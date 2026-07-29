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
  }

  function syncNav(key, anchor) {
    Array.prototype.forEach.call(els.nav.querySelectorAll('a'), function (a) {
      a.classList.remove('active');
    });
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

    s.docs.forEach(function (d) {
      html +=
        '<a class="card" href="#/' + s.code + '/' + d.id + '" style="--accent:' + esc(s.colour) + '">' +
        '<div class="code" style="font-size:.98rem">' + esc(d.title) + '</div>' +
        '<div class="meta"><span>' + d.words.toLocaleString() + ' words</span>' +
        '<span>' + d.readingMinutes + ' min read</span>' +
        '<span>' + (d.toc ? d.toc.length : 0) + ' sections</span></div></a>';
    });
    html += '</div>';
    els.main.innerHTML = html;
    window.scrollTo(0, 0);
  }

  function scrollToAnchor(anchor) {
    if (!anchor) { window.scrollTo(0, 0); return; }
    var target = document.getElementById(anchor);
    if (!target) { window.scrollTo(0, 0); return; }
    var top = target.getBoundingClientRect().top + window.pageYOffset - 72;
    window.scrollTo({ top: top, behavior: 'auto' });
    target.setAttribute('tabindex', '-1');
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
        '<div class="prose">' + doc.html + '</div></article>';

      // Wrap tables so wide ones scroll instead of breaking the layout.
      Array.prototype.forEach.call(els.main.querySelectorAll('.prose table'), function (t) {
        if (t.parentNode.classList.contains('tablewrap')) return;
        var w = document.createElement('div');
        w.className = 'tablewrap';
        t.parentNode.insertBefore(w, t);
        w.appendChild(t);
      });

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

  // ------------------------------------------------------------- router

  function route() {
    if (!manifest) return;
    var raw = (location.hash || '#/').replace(/^#\/?/, '');
    var parts = raw.split('/').filter(Boolean).map(decodeURIComponent);

    if (!parts.length) return renderHome();
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
