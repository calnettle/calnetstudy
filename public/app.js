/* calnetstudy — client app
 *
 * Routes:  #/                       home (subject cards)
 *          #/<SUBJECT>              subject overview
 *          #/<SUBJECT>/<doc-id>     document
 *          #/<SUBJECT>/<doc-id>/<anchor>  document, scrolled to a heading
 */

(function () {
  'use strict';

  var els = {
    main: document.getElementById('main'),
    nav: document.getElementById('nav'),
    sidebar: document.getElementById('sidebar'),
    scrim: document.getElementById('scrim'),
    menuBtn: document.getElementById('menuBtn'),
    closeNav: document.getElementById('closeNav'),
    searchBtn: document.getElementById('searchBtn'),
    search: document.getElementById('search'),
    searchInput: document.getElementById('searchInput'),
    searchClose: document.getElementById('searchClose'),
    searchResults: document.getElementById('searchResults'),
    progress: document.getElementById('progress'),
    offlineBadge: document.getElementById('offlineBadge'),
    buildStamp: document.getElementById('buildStamp')
  };

  var manifest = null;
  var searchIndex = null;
  var docCache = {};
  var currentKey = null;

  // ------------------------------------------------------------- utils

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function getJSON(url) {
    return fetch(url, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error(url + ' → ' + r.status);
      return r.json();
    });
  }

  function findSubject(code) {
    if (!manifest) return null;
    for (var i = 0; i < manifest.subjects.length; i++) {
      if (manifest.subjects[i].code === code) return manifest.subjects[i];
    }
    return null;
  }

  function findDoc(code, id) {
    var s = findSubject(code);
    if (!s) return null;
    for (var i = 0; i < s.docs.length; i++) if (s.docs[i].id === id) return s.docs[i];
    return null;
  }

  // ------------------------------------------------------------- my notes
  //
  // Personal section notes live in localStorage only — the site has no
  // backend, so they stay on this device.
  // Shape: { "<doc key>": { "<heading anchor>": { t, u, h: heading text } } }

  var NOTES_KEY = 'calnetstudy-mynotes';

  function loadNotes() {
    try {
      var all = JSON.parse(localStorage.getItem(NOTES_KEY)) || {};
      // Migrate v1 page-level notes ({key:{t,u}}) to the nested shape.
      for (var k in all) {
        if (all.hasOwnProperty(k) && all[k] && typeof all[k].t === 'string') {
          all[k] = { __page__: all[k] };
        }
      }
      return all;
    } catch (e) { return {}; }
  }

  function storeNotes(all) {
    try {
      localStorage.setItem(NOTES_KEY, JSON.stringify(all));
      return true;
    } catch (e) { return false; }
  }

  // Deleting writes a tombstone ({ d:1, u }) instead of removing the entry,
  // so a deletion made on one device wins over the stale copy on another.
  function saveNote(key, anchor, text, heading) {
    var all = loadNotes();
    var doc = all[key] || {};
    if (text && text.trim()) {
      doc[anchor] = { t: text, u: new Date().toISOString(), h: heading || '' };
    } else if (doc[anchor] && !doc[anchor].d) {
      doc[anchor] = { d: 1, u: new Date().toISOString(), h: (doc[anchor].h || heading || '') };
    } else if (!doc[anchor]) {
      // nothing existed and nothing was written — no tombstone needed
      if (!Object.keys(doc).length) delete all[key];
      return storeNotes(all);
    }
    all[key] = doc;
    var ok = storeNotes(all);
    scheduleSync();
    return ok;
  }

  // Flat list of every live note (tombstones excluded), newest first.
  function allNotesFlat() {
    var all = loadNotes(), out = [];
    for (var k in all) {
      if (!all.hasOwnProperty(k)) continue;
      for (var a in all[k]) {
        if (all[k].hasOwnProperty(a) && !all[k][a].d) {
          out.push({ key: k, anchor: a, note: all[k][a] });
        }
      }
    }
    out.sort(function (x, y) { return x.note.u < y.note.u ? 1 : -1; });
    return out;
  }

  function noteCount() { return allNotesFlat().length; }

  // Drop tombstones older than 60 days — every device syncs well before that.
  function purgeTombstones() {
    var all = loadNotes(), cutoff = Date.now() - 60 * 864e5, dirty = false;
    for (var k in all) {
      if (!all.hasOwnProperty(k)) continue;
      for (var a in all[k]) {
        if (all[k][a].d && new Date(all[k][a].u).getTime() < cutoff) {
          delete all[k][a]; dirty = true;
        }
      }
      if (!Object.keys(all[k]).length) { delete all[k]; dirty = true; }
    }
    if (dirty) storeNotes(all);
  }

  // --------------------------------------------------- my notes: sync
  //
  // Optional cross-device sync via PocketBase (plain REST, no SDK — the
  // client stays dependency-free). localStorage remains the source of truth;
  // sync is a two-way merge where the newer timestamp wins per (doc, anchor).
  // Server rows are never hard-deleted; `deleted:true` mirrors tombstones.

  var PB_URL = 'https://pb.calnetcorp.com.au/study';
  var SYNC_KEY = 'calnetstudy-sync';
  var syncTimer = null;
  var syncBusy = false;
  var syncStatus = ''; // shown on the #/notes page

  function syncState() {
    try { return JSON.parse(localStorage.getItem(SYNC_KEY)) || null; }
    catch (e) { return null; }
  }
  function setSyncState(s) {
    try {
      if (s) localStorage.setItem(SYNC_KEY, JSON.stringify(s));
      else localStorage.removeItem(SYNC_KEY);
    } catch (e) {}
  }

  function pbFetch(path, opts) {
    var s = syncState();
    opts = opts || {};
    opts.headers = opts.headers || {};
    if (s && s.token) opts.headers.Authorization = s.token;
    if (opts.body && typeof opts.body !== 'string') {
      opts.headers['Content-Type'] = 'application/json';
      opts.body = JSON.stringify(opts.body);
    }
    return fetch(((s && s.url) || PB_URL) + path, opts).then(function (r) {
      if (r.status === 204) return null;
      return r.json().catch(function () { return null; }).then(function (data) {
        if (!r.ok) {
          var err = new Error((data && data.message) || ('sync error ' + r.status));
          err.status = r.status;
          throw err;
        }
        return data;
      });
    });
  }

  function syncSignIn(email, password) {
    return pbFetch('/api/collections/users/auth-with-password', {
      method: 'POST',
      body: { identity: email, password: password }
    }).then(function (res) {
      var prev = syncState(); // keep a url override (used for local testing)
      setSyncState({ url: (prev && prev.url) || PB_URL, token: res.token,
                     userId: res.record.id, email: res.record.email,
                     ids: {}, last: null });
      return syncNow();
    });
  }

  function syncSignOut() { setSyncState(null); syncStatus = ''; }

  function scheduleSync(delay) {
    if (!syncState()) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(syncNow, delay || 1500);
  }

  function syncNow() {
    var s = syncState();
    if (!s || syncBusy || !navigator.onLine) return Promise.resolve();
    syncBusy = true;
    syncStatus = 'Syncing…';

    return pbFetch('/api/collections/study_notes/records?perPage=500&fields=' +
                   'id,doc,anchor,heading,body,stamp,deleted')
      .then(function (res) {
        var all = loadNotes();
        var remoteChanged = false;
        var pushes = [];
        var seen = {};
        s.ids = s.ids || {};

        (res.items || []).forEach(function (r) {
          var mapKey = r.doc + '||' + r.anchor;
          s.ids[mapKey] = r.id;
          seen[mapKey] = true;
          var local = (all[r.doc] || {})[r.anchor];
          var localU = local ? local.u : '';
          if (r.stamp > localU) {
            // remote is newer → adopt locally
            all[r.doc] = all[r.doc] || {};
            all[r.doc][r.anchor] = r.deleted
              ? { d: 1, u: r.stamp, h: r.heading || '' }
              : { t: r.body, u: r.stamp, h: r.heading || '' };
            remoteChanged = true;
          } else if (local && localU > r.stamp) {
            pushes.push({ key: r.doc, anchor: r.anchor, note: local, id: r.id });
          }
        });

        // local entries the server has never seen → create
        for (var k in all) {
          if (!all.hasOwnProperty(k)) continue;
          for (var a in all[k]) {
            if (all[k].hasOwnProperty(a) && !seen[k + '||' + a]) {
              pushes.push({ key: k, anchor: a, note: all[k][a], id: null });
            }
          }
        }

        if (remoteChanged) storeNotes(all);

        var chain = Promise.resolve();
        pushes.forEach(function (p) {
          chain = chain.then(function () {
            var body = {
              owner: s.userId, doc: p.key, anchor: p.anchor,
              heading: p.note.h || '', body: p.note.d ? '' : p.note.t,
              stamp: p.note.u, deleted: !!p.note.d
            };
            var req = p.id
              ? pbFetch('/api/collections/study_notes/records/' + p.id,
                        { method: 'PATCH', body: body })
              : pbFetch('/api/collections/study_notes/records',
                        { method: 'POST', body: body });
            return req.then(function (rec) {
              if (rec && rec.id) s.ids[p.key + '||' + p.anchor] = rec.id;
            });
          });
        });

        return chain.then(function () { return remoteChanged; });
      })
      .then(function (remoteChanged) {
        s.last = new Date().toISOString();
        setSyncState(s);
        syncStatus = 'Synced';
        refreshNotesCount();
        // Repaint if another device changed something — but never mid-typing.
        if (remoteChanged && document.activeElement.tagName !== 'TEXTAREA') route();
        else if (location.hash === '#/notes') updateSyncCard();
      })
      .catch(function (err) {
        if (err.status === 401 || err.status === 403) {
          var st = syncState();
          if (st) { st.token = ''; setSyncState(st); }
          syncStatus = 'Signed out — sign in again to sync';
        } else {
          syncStatus = 'Sync failed (' + err.message + ')';
        }
        if (location.hash === '#/notes') updateSyncCard();
      })
      .then(function () { syncBusy = false; });
  }

  window.addEventListener('online', function () { scheduleSync(800); });

  function docByKey(key) {
    if (!manifest) return null;
    for (var i = 0; i < manifest.subjects.length; i++) {
      var s = manifest.subjects[i];
      for (var j = 0; j < s.docs.length; j++) {
        if (s.docs[j].key === key) return { subject: s, doc: s.docs[j] };
      }
    }
    return null;
  }

  // ------------------------------------------------------------- drawer

  function openNav() {
    els.sidebar.classList.add('open');
    els.scrim.hidden = false;
    els.menuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('locked');
  }
  function closeNav() {
    els.sidebar.classList.remove('open');
    els.scrim.hidden = true;
    els.menuBtn.setAttribute('aria-expanded', 'false');
    if (els.search.hidden) document.body.classList.remove('locked');
  }
  var isDesktop = function () { return window.matchMedia('(min-width: 900px)').matches; };

  els.menuBtn.addEventListener('click', openNav);
  els.closeNav.addEventListener('click', closeNav);
  els.scrim.addEventListener('click', closeNav);

  // ------------------------------------------------------------- nav

  function buildNav() {
    if (!manifest.subjects.length) {
      els.nav.innerHTML = '<p style="padding:14px;color:var(--muted);font-size:.88rem">' +
        'No subjects yet. Add a folder under <code>content/</code>.</p>';
      return;
    }

    var html = '';
    manifest.subjects.forEach(function (s) {
      html += '<div class="nav-subject">';
      html += '<div class="code"><b>' + esc(s.code) + '</b><span>' + esc(s.name) + '</span></div>';
      s.docs.forEach(function (d) {
        var route = '#/' + s.code + '/' + d.id;
        html += '<a href="' + route + '" data-key="' + d.key + '">' + esc(d.title) + '</a>';
        if (d.toc && d.toc.length) {
          html += '<div class="sub" data-for="' + d.key + '" hidden>';
          d.toc.forEach(function (t) {
            html += '<a href="' + route + '/' + t.id + '" data-anchor="' + t.id + '">' +
                    esc(t.text) + '</a>';
          });
          html += '</div>';
        }
      });
      html += '</div>';
    });
    els.nav.innerHTML = html;

    els.nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && !isDesktop()) closeNav();
    });
    refreshNotesCount();
  }

  function refreshNotesCount() {
    var badge = document.getElementById('navMyNotesCount');
    if (!badge) return;
    var n = noteCount();
    badge.textContent = n ? String(n) : '';
    badge.hidden = !n;
  }

  function syncNav(key, anchor) {
    Array.prototype.forEach.call(els.nav.querySelectorAll('a'), function (a) {
      a.classList.remove('active');
    });
    var notesLink = document.getElementById('navMyNotes');
    if (notesLink) notesLink.classList.remove('active');
    Array.prototype.forEach.call(els.nav.querySelectorAll('.sub'), function (d) {
      d.hidden = d.getAttribute('data-for') !== key;
    });
    var link = els.nav.querySelector('a[data-key="' + key + '"]');
    if (link) link.classList.add('active');
    if (anchor) {
      var sub = els.nav.querySelector('.sub[data-for="' + key + '"] a[data-anchor="' + anchor + '"]');
      if (sub) sub.classList.add('active');
    }
  }

  // ------------------------------------------------------------- views

  function renderHome() {
    currentKey = null;
    syncNav(null, null);

    var total = 0;
    manifest.subjects.forEach(function (s) {
      s.docs.forEach(function (d) { total += d.words; });
    });

    var html =
      '<div class="home-hero">' +
      '<h1>Your notes, everywhere.</h1>' +
      '<p>' +
        (manifest.subjects.length
          ? manifest.subjects.length + ' subject' + (manifest.subjects.length > 1 ? 's' : '') +
            ' · ' + total.toLocaleString() + ' words · searchable offline'
          : 'Nothing here yet.') +
      '</p></div>';

    if (!manifest.subjects.length) {
      html += '<div class="empty"><b>No subjects yet</b><br>' +
              'Create <code>content/&lt;UNIT-CODE&gt;/</code> and drop in a ' +
              '<code>.md</code> file, then redeploy.</div>';
      els.main.innerHTML = html;
      return;
    }

    html += '<div class="cards">';
    manifest.subjects.forEach(function (s) {
      var words = 0;
      s.docs.forEach(function (d) { words += d.words; });
      var mins = Math.max(1, Math.round(words / 220));
      html +=
        '<a class="card" href="#/' + s.code + '" style="--accent:' + esc(s.colour) + '">' +
        '<div class="code">' + esc(s.code) + '</div>' +
        '<div class="name">' + esc(s.name) + '</div>' +
        (s.description ? '<div class="desc">' + esc(s.description) + '</div>' : '') +
        '<div class="meta">' +
          '<span>' + s.docs.length + ' note' + (s.docs.length > 1 ? 's' : '') + '</span>' +
          '<span>' + mins + ' min read</span>' +
          (s.term ? '<span>' + esc(s.term) + '</span>' : '') +
        '</div></a>';
    });
    html += '</div>';
    els.main.innerHTML = html;
    window.scrollTo(0, 0);
  }

  function renderSubject(code) {
    var s = findSubject(code);
    if (!s) return renderHome();
    currentKey = null;
    syncNav(null, null);

    var html =
      '<div class="home-hero">' +
      '<h1>' + esc(s.code) + '</h1>' +
      '<p>' + esc(s.name) + (s.term ? ' · ' + esc(s.term) : '') + '</p></div><div class="cards">';

    var flatAll = allNotesFlat();
    s.docs.forEach(function (d) {
      var n = flatAll.filter(function (it) { return it.key === d.key; }).length;
      html +=
        '<a class="card" href="#/' + s.code + '/' + d.id + '" style="--accent:' + esc(s.colour) + '">' +
        '<div class="code" style="font-size:.98rem">' + esc(d.title) + '</div>' +
        '<div class="meta"><span>' + d.words.toLocaleString() + ' words</span>' +
        '<span>' + d.readingMinutes + ' min read</span>' +
        '<span>' + (d.toc ? d.toc.length : 0) + ' sections</span>' +
        (n ? '<span class="notecount">' + n + ' note' + (n > 1 ? 's' : '') + '</span>' : '') +
        '</div></a>';
    });
    html += '</div>';

    // This unit's own notes, in reading order (doc order, then section order).
    var flat = allNotesFlat();
    var mine = [];
    s.docs.forEach(function (d) {
      var perDoc = flat.filter(function (it) { return it.key === d.key; });
      perDoc.sort(function (a, b) { return a.note.u < b.note.u ? -1 : 1; });
      mine = mine.concat(perDoc);
    });
    if (mine.length) {
      html +=
        '<div class="mynotes-sect">' +
        '<h2>My notes · ' + esc(s.code) + '</h2>' +
        '<div class="cards">' + noteCardsHTML(mine, false) + '</div></div>';
    }

    els.main.innerHTML = html;
    window.scrollTo(0, 0);
  }

  function scrollToAnchor(anchor) {
    if (!anchor) { window.scrollTo(0, 0); return; }
    var target = document.getElementById(anchor);
    if (!target) { window.scrollTo(0, 0); return; }

    // Land the heading 72px down, clear of the fixed top bar. Correcting a
    // miss should never animate, so bypass html{scroll-behavior:smooth} —
    // 'auto' means "use the CSS value", which is smooth here.
    function align() {
      var h = document.documentElement;
      var prev = h.style.scrollBehavior;
      h.style.scrollBehavior = 'auto';
      window.scrollTo(0, target.getBoundingClientRect().top + window.pageYOffset - 72);
      h.style.scrollBehavior = prev;
    }

    align();
    target.setAttribute('tabindex', '-1');

    // On a cold load we scroll before the webfont has swapped in; the reflow
    // that follows drags the heading out from under the reader (landing ~195px
    // off). Re-align once fonts settle — a no-op on warm navigations.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        if (Math.abs(target.getBoundingClientRect().top - 72) > 2) align();
      });
    }
  }

  function renderDoc(code, id, anchor) {
    var meta = findDoc(code, id);
    var subject = findSubject(code);
    if (!meta) return renderHome();

    var key = meta.key;
    currentKey = key;
    syncNav(key, anchor);

    function paint(doc) {
      els.main.innerHTML =
        '<article class="doc">' +
        '<div class="doc-head">' +
          '<span class="kicker">' + esc(code) + (subject ? ' · ' + esc(subject.name) : '') + '</span>' +
          '<div class="meta">' + doc.toc.length + ' sections · ' +
            meta.readingMinutes + ' min read</div>' +
        '</div>' +
        '<div class="prose">' + doc.html + '</div>' +
        '</article>';

      // Wrap tables so wide ones scroll instead of breaking the layout.
      Array.prototype.forEach.call(els.main.querySelectorAll('.prose table'), function (t) {
        if (t.parentNode.classList.contains('tablewrap')) return;
        var w = document.createElement('div');
        w.className = 'tablewrap';
        t.parentNode.insertBefore(w, t);
        w.appendChild(t);
      });

      decorateHeadings(key);
      requestAnimationFrame(function () { scrollToAnchor(anchor); });
    }

    if (docCache[key]) return paint(docCache[key]);

    els.main.innerHTML = '<div class="loading">Loading…</div>';
    getJSON('/data/docs/' + key + '.json')
      .then(function (doc) { docCache[key] = doc; if (currentKey === key) paint(doc); })
      .catch(function (err) {
        els.main.innerHTML = '<div class="empty"><b>Could not load this note.</b><br>' +
                             esc(err.message) + '</div>';
      });
  }

  // ------------------------------------------------- my notes: doc panel

  function fmtDate(iso) {
    try {
      return new Date(iso).toLocaleDateString('en-AU',
        { day: 'numeric', month: 'short', year: 'numeric' });
    } catch (e) { return ''; }
  }

  // Attach an "add note" button to every h2/h3 that has an anchor id, and
  // render an existing note as a collapsible box under its heading.
  function decorateHeadings(key) {
    var notes = {};
    var raw = loadNotes()[key] || {};
    for (var a in raw) {
      if (raw.hasOwnProperty(a) && !raw[a].d) notes[a] = raw[a];
    }
    var heads = els.main.querySelectorAll('.prose h2[id], .prose h3[id]');

    Array.prototype.forEach.call(heads, function (h) {
      var headingText = h.textContent.trim();

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'notebtn' + (notes[h.id] ? ' has' : '');
      btn.setAttribute('aria-label', notes[h.id]
        ? 'Show my note for ' + headingText : 'Add a note to ' + headingText);
      btn.title = notes[h.id] ? 'My note' : 'Add note';
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" aria-hidden="true">' +
        '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>';
      h.appendChild(btn);

      var existing = notes[h.id];
      if (existing) insertNoteBox(h, key, h.id, headingText, existing, false);

      btn.addEventListener('click', function () {
        var box = h.nextElementSibling;
        if (box && box.classList.contains('secnote')) {
          box.open = !box.open;
          if (box.open) box.querySelector('textarea').focus();
        } else {
          box = insertNoteBox(h, key, h.id, headingText, null, true);
          box.querySelector('textarea').focus();
        }
      });
    });
  }

  function insertNoteBox(heading, key, anchor, headingText, note, open) {
    var box = document.createElement('details');
    box.className = 'secnote';
    box.open = !!open || false;
    box.innerHTML =
      '<summary><svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>' +
      'My note <span class="secnote-stamp">' +
        (note ? 'Saved ' + fmtDate(note.u) : 'Saved on this device only') +
      '</span></summary>' +
      '<textarea rows="3" placeholder="Your note on this section…"></textarea>';
    heading.parentNode.insertBefore(box, heading.nextSibling);

    var ta = box.querySelector('textarea');
    var stamp = box.querySelector('.secnote-stamp');
    var btn = heading.querySelector('.notebtn');
    if (note) ta.value = note.t;

    function grow() {
      ta.style.height = 'auto';
      ta.style.height = Math.max(72, ta.scrollHeight) + 'px';
    }
    box.addEventListener('toggle', grow);
    grow();

    function persist() {
      var ok = saveNote(key, anchor, ta.value, headingText);
      stamp.textContent = ok
        ? (ta.value.trim() ? 'Saved just now' : 'Empty — not saved')
        : 'Could not save (storage blocked)';
      if (btn) btn.classList.toggle('has', !!ta.value.trim());
      refreshNotesCount();
    }

    var timer;
    ta.addEventListener('input', function () {
      grow();
      stamp.textContent = 'Saving…';
      clearTimeout(timer);
      timer = setTimeout(persist, 400);
    });
    // Flush on blur so a fast tap elsewhere never loses input.
    ta.addEventListener('blur', function () { clearTimeout(timer); persist(); });

    return box;
  }

  // My-notes cards shared by the unit overview and the all-notes page.
  function noteCardsHTML(items, showUnit) {
    var html = '';
    items.forEach(function (it) {
      var hit = docByKey(it.key);
      var isPage = it.anchor === '__page__';
      var section = it.note.h || (isPage ? 'Page note' : it.anchor);
      var crumb = hit
        ? (showUnit ? hit.subject.code + ' · ' : '') + hit.doc.title
        : 'Removed document';
      var href = hit
        ? '#/' + hit.subject.code + '/' + hit.doc.id + (isPage ? '' : '/' + it.anchor)
        : null;
      var colour = hit ? hit.subject.colour : '#999';
      html +=
        '<div class="card mynote-card" style="--accent:' + esc(colour) + '">' +
        '<div class="mynote-top">' +
          (href
            ? '<a class="mynote-title" href="' + href + '">' + esc(section) + '</a>'
            : '<span class="mynote-title">' + esc(section) + '</span>') +
          '<button class="textbtn mynote-del" data-key="' + esc(it.key) +
            '" data-anchor="' + esc(it.anchor) + '">Delete</button>' +
        '</div>' +
        '<div class="meta"><span>' + esc(crumb) + '</span>' +
          '<span>' + fmtDate(it.note.u) + '</span></div>' +
        '<div class="mynote-text">' + esc(it.note.t) + '</div>' +
        '</div>';
    });
    return html;
  }

  // ---------------------------------------------- my notes: sync card UI

  function syncCardHTML() {
    var s = syncState();
    if (s && s.token) {
      return (
        '<div class="synccard" id="syncCard">' +
        '<div class="synccard-row">' +
          '<span class="synccard-dot on"></span>' +
          '<span>Syncing as <b>' + esc(s.email) + '</b></span>' +
          '<button class="textbtn" id="syncNowBtn">Sync now</button>' +
          '<button class="textbtn" id="syncOutBtn">Sign out</button>' +
        '</div>' +
        '<div class="synccard-status" id="syncStatusLine">' +
          esc(syncStatus || (s.last ? 'Last synced ' + fmtDate(s.last) : '')) +
        '</div></div>'
      );
    }
    return (
      '<div class="synccard" id="syncCard">' +
      '<div class="synccard-row">' +
        '<span class="synccard-dot"></span>' +
        '<span>Sync notes across devices</span>' +
      '</div>' +
      '<form class="synccard-form" id="syncForm">' +
        '<input type="email" id="syncEmail" placeholder="Email" autocomplete="username" required ' +
          ((s && s.email) ? 'value="' + esc(s.email) + '"' : '') + ' />' +
        '<input type="password" id="syncPass" placeholder="Password" autocomplete="current-password" required />' +
        '<button class="textbtn" type="submit">Sign in</button>' +
      '</form>' +
      '<div class="synccard-status" id="syncStatusLine">' + esc(syncStatus) + '</div>' +
      '</div>'
    );
  }

  function updateSyncCard() {
    var line = document.getElementById('syncStatusLine');
    if (line) line.textContent = syncStatus;
  }

  function wireSyncCard() {
    var form = document.getElementById('syncForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        syncStatus = 'Signing in…';
        updateSyncCard();
        syncSignIn(document.getElementById('syncEmail').value,
                   document.getElementById('syncPass').value)
          .then(function () { if (location.hash === '#/notes') renderMyNotes(); })
          .catch(function (err) {
            syncStatus = err.status === 400
              ? 'Wrong email or password'
              : 'Could not sign in (' + err.message + ')';
            updateSyncCard();
          });
      });
    }
    var out = document.getElementById('syncOutBtn');
    if (out) out.addEventListener('click', function () {
      syncSignOut();
      renderMyNotes();
    });
    var now = document.getElementById('syncNowBtn');
    if (now) now.addEventListener('click', function () {
      syncStatus = 'Syncing…';
      updateSyncCard();
      syncNow().then(function () {
        if (location.hash === '#/notes') renderMyNotes();
      });
    });
  }

  // ------------------------------------------------- my notes: list view

  function renderMyNotes() {
    currentKey = null;
    syncNav(null, null);
    var navLink = document.getElementById('navMyNotes');
    if (navLink) navLink.classList.add('active');

    var flat = allNotesFlat();

    var html = syncCardHTML() +
      '<div class="home-hero"><h1>My notes</h1>' +
      '<p>' + (flat.length
        ? flat.length + ' note' + (flat.length > 1 ? 's' : '') +
          ' · stored on this device only'
        : 'Notes you add to any section show up here. They stay on this device.') +
      '</p></div>';

    if (!flat.length) {
      html += '<div class="empty"><b>Nothing yet</b><br>' +
              'Open any topic and tap the pencil next to a section heading.</div>';
      els.main.innerHTML = html;
      wireSyncCard();
      window.scrollTo(0, 0);
      return;
    }

    html += '<div class="cards">' + noteCardsHTML(flat, true) + '</div>' +
      '<div class="mynotes-actions">' +
      '<button class="textbtn" id="notesExport">Download all as Markdown</button></div>';

    els.main.innerHTML = html;
    wireSyncCard();
    window.scrollTo(0, 0);

    var exportBtn = document.getElementById('notesExport');
    if (exportBtn) exportBtn.addEventListener('click', function () {
      var lines = ['# My calnetstudy notes', ''];
      flat.forEach(function (it) {
        var hit = docByKey(it.key);
        var where = hit ? hit.subject.code + ' — ' + hit.doc.title : it.key;
        var section = it.note.h || (it.anchor === '__page__' ? 'Page note' : it.anchor);
        lines.push('## ' + where + ' › ' + section);
        lines.push('_Updated ' + fmtDate(it.note.u) + '_', '', it.note.t, '');
      });
      var blob = new Blob([lines.join('\n')], { type: 'text/markdown' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'my-calnetstudy-notes.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
    });
  }

  // ------------------------------------------------------------- router

  function route() {
    if (!manifest) return;
    var raw = (location.hash || '#/').replace(/^#\/?/, '');
    var parts = raw.split('/').filter(Boolean).map(decodeURIComponent);

    if (!parts.length) return renderHome();
    if (parts[0] === 'notes') return renderMyNotes(); // unit codes are uppercase, no clash
    if (parts.length === 1) return renderSubject(parts[0]);
    return renderDoc(parts[0], parts[1], parts[2] || null);
  }

  window.addEventListener('hashchange', route);

  // ------------------------------------------------------------- search

  function openSearch() {
    els.search.hidden = false;
    document.body.classList.add('locked');
    els.searchInput.focus();
    if (!searchIndex) {
      getJSON('/data/search.json')
        .then(function (d) { searchIndex = d; runSearch(els.searchInput.value); })
        .catch(function () {
          els.searchResults.innerHTML = '<p class="noresults">Search index unavailable offline.</p>';
        });
    }
  }
  function closeSearch() {
    els.search.hidden = true;
    document.body.classList.remove('locked');
  }

  els.searchBtn.addEventListener('click', openSearch);
  els.searchClose.addEventListener('click', closeSearch);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (!els.search.hidden) closeSearch();
      else if (els.sidebar.classList.contains('open')) closeNav();
    }
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName))) {
      e.preventDefault();
      openSearch();
    }
  });

  function highlight(text, terms) {
    var out = esc(text);
    terms.forEach(function (t) {
      if (t.length < 2) return;
      out = out.replace(
        new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'),
        '<mark>$1</mark>'
      );
    });
    return out;
  }

  function snippet(text, terms) {
    var lower = text.toLowerCase();
    var at = -1;
    for (var i = 0; i < terms.length; i++) {
      var p = lower.indexOf(terms[i]);
      if (p !== -1 && (at === -1 || p < at)) at = p;
    }
    if (at === -1) return text.slice(0, 160);
    var start = Math.max(0, at - 60);
    return (start ? '…' : '') + text.slice(start, start + 200);
  }

  function runSearch(q) {
    q = (q || '').trim();
    if (!q) {
      els.searchResults.innerHTML =
        '<p class="hint">Search formulas, definitions, worked examples — across every subject.</p>';
      return;
    }
    if (!searchIndex) return;

    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    var hits = [];

    searchIndex.forEach(function (r) {
      var hay = (r.h + ' ' + r.x + ' ' + r.d + ' ' + r.c).toLowerCase();
      var score = 0, all = true;
      terms.forEach(function (t) {
        var inHeading = r.h.toLowerCase().indexOf(t) !== -1;
        var inCode = r.c.toLowerCase().indexOf(t) !== -1;
        var inBody = hay.indexOf(t) !== -1;
        if (!inBody) { all = false; return; }
        score += inHeading ? 10 : 0;
        score += inCode ? 6 : 0;
        score += 1;
      });
      if (all) hits.push({ r: r, score: score });
    });

    hits.sort(function (a, b) { return b.score - a.score; });

    if (!hits.length) {
      els.searchResults.innerHTML = '<p class="noresults">No matches for “' + esc(q) + '”.</p>';
      return;
    }

    var top = hits.slice(0, 60);
    var html = '<div class="count">' + hits.length + ' match' +
               (hits.length === 1 ? '' : 'es') + '</div>';
    top.forEach(function (h) {
      var r = h.r;
      var docId = r.k.split('__')[1];
      var href = '#/' + r.c + '/' + docId + (r.a ? '/' + r.a : '');
      html +=
        '<a class="result" href="' + href + '">' +
        '<div class="crumb">' + esc(r.c) + '</div>' +
        '<div class="h">' + highlight(r.h, terms) + '</div>' +
        '<div class="x">' + highlight(snippet(r.x, terms), terms) + '</div></a>';
    });
    els.searchResults.innerHTML = html;

    els.searchResults.addEventListener('click', function onClick(e) {
      if (e.target.closest('.result')) {
        closeSearch();
        els.searchResults.removeEventListener('click', onClick);
      }
    });
  }

  var searchTimer;
  els.searchInput.addEventListener('input', function () {
    clearTimeout(searchTimer);
    var v = this.value;
    searchTimer = setTimeout(function () { runSearch(v); }, 110);
  });

  // Delegated once: delete buttons on note cards (My notes page and unit
  // overview both use them, so re-run the router to repaint whichever view).
  els.main.addEventListener('click', function (e) {
    var del = e.target.closest('.mynote-del');
    if (!del) return;
    saveNote(del.getAttribute('data-key'), del.getAttribute('data-anchor'), '');
    refreshNotesCount();
    route();
  });

  // ------------------------------------------------------------- chrome

  window.addEventListener('scroll', function () {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    els.progress.style.width = max > 0 ? (h.scrollTop / max) * 100 + '%' : '0';
  }, { passive: true });

  function setOnline() { els.offlineBadge.hidden = navigator.onLine; }
  window.addEventListener('online', setOnline);
  window.addEventListener('offline', setOnline);
  setOnline();

  // ------------------------------------------------------------- boot

  getJSON('/data/manifest.json')
    .then(function (m) {
      manifest = m;
      if (m.generated) {
        els.buildStamp.textContent = 'Updated ' +
          new Date(m.generated).toLocaleDateString('en-AU',
            { day: 'numeric', month: 'short', year: 'numeric' });
      }
      buildNav();
      route();

      purgeTombstones();
      var s = syncState();
      if (s && s.token) {
        // Extend the session, then merge anything other devices wrote.
        pbFetch('/api/collections/users/auth-refresh', { method: 'POST' })
          .then(function (res) {
            s = syncState();
            if (s && res && res.token) { s.token = res.token; setSyncState(s); }
          })
          .catch(function (err) {
            if (err.status === 401 || err.status === 403) {
              s = syncState();
              if (s) { s.token = ''; setSyncState(s); }
            }
          })
          .then(function () { syncNow(); });
      }
    })
    .catch(function (err) {
      document.getElementById('loading').outerHTML =
        '<div class="empty"><b>Could not load notes.</b><br>' + esc(err.message) + '</div>';
    });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () {});
    });
  }
})();
