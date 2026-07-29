#!/usr/bin/env node
/**
 * calnetstudy build
 *
 * Scans content/<SUBJECT>/*.md, renders each to HTML, and emits:
 *   public/data/manifest.json          — subjects + docs + table of contents
 *   public/data/docs/<subject>__<doc>.json — { title, html, toc }
 *   public/data/search.json            — one record per section, for client-side search
 *
 * Adding a new subject = create content/<CODE>/ and drop .md files in.
 * Optionally describe it in content/subjects.json. That's the whole workflow.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { marked } = require('marked');

const ROOT = __dirname;
const CONTENT = path.join(ROOT, 'content');
const PUBLIC = path.join(ROOT, 'public');
const OUT = path.join(PUBLIC, 'data');
const DOCS_OUT = path.join(OUT, 'docs');

// ---------------------------------------------------------------- helpers

const mkdir = (p) => fs.mkdirSync(p, { recursive: true });

/**
 * Clear generated output. Network/FUSE mounts sometimes refuse recursive
 * unlink, so fall back to best-effort per-file removal rather than dying —
 * every file is rewritten below anyway.
 */
function rm(p) {
  if (!fs.existsSync(p)) return;
  try {
    fs.rmSync(p, { recursive: true, force: true });
  } catch {
    const walk = (dir) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, e.name);
        try {
          e.isDirectory() ? walk(full) : fs.unlinkSync(full);
        } catch {
          /* leave it; it will be overwritten */
        }
      }
    };
    walk(p);
  }
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  hellip: '…', mdash: '—', ndash: '–', rsquo: '’', lsquo: '‘',
  ldquo: '“', rdquo: '”', times: '×', divide: '÷', minus: '−', deg: '°'
};

function decodeEntities(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, name) => {
      const key = name.toLowerCase();
      return Object.prototype.hasOwnProperty.call(ENTITIES, key) ? ENTITIES[key] : m;
    });
}

function stripHtml(html) {
  return decodeEntities(
    String(html)
      .replace(/<pre[\s\S]*?<\/pre>/g, ' ')
      .replace(/<[^>]+>/g, ' ')
  )
    .replace(/\s+/g, ' ')
    .trim();
}

/** Turn "01-revision-notes" into "Revision Notes" as a fallback title. */
function titleFromFilename(f) {
  return f
    .replace(/\.md$/i, '')
    .replace(/^\d+[-_.\s]*/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// ---------------------------------------------------------------- renderer

marked.setOptions({ gfm: true, breaks: false });

/**
 * Render markdown, assigning stable ids to h1/h2/h3 so the TOC and search
 * results can deep-link into a document.
 */
function render(md) {
  const toc = [];
  const seen = new Map();

  const renderer = new marked.Renderer();

  // marked v12 calls heading(text, level, raw); v13+ passes a token object.
  // Support both so a dependency bump doesn't silently produce <hundefined>.
  renderer.heading = function (a, b) {
    const isToken = a && typeof a === 'object';
    const rawText = isToken ? a.text : a;
    const level = isToken ? a.depth : b;

    const inline = this.parser
      ? this.parser.parseInline(
          isToken && a.tokens ? a.tokens : marked.Lexer.lexInline(String(rawText))
        )
      : String(rawText);

    let id = slugify(stripHtml(inline)) || 'section';
    if (seen.has(id)) {
      const n = seen.get(id) + 1;
      seen.set(id, n);
      id = `${id}-${n}`;
    } else {
      seen.set(id, 1);
    }

    if (level <= 3) toc.push({ level, text: stripHtml(inline), id });
    return `<h${level} id="${id}">${inline}</h${level}>\n`;
  };

  const html = marked.parse(md, { renderer });

  if (/<h(undefined|NaN)/.test(html)) {
    throw new Error('Heading renderer failed — marked API changed. Check build.js render().');
  }

  return { html, toc };
}

/**
 * Split rendered HTML into searchable sections, one per h2/h3, so a hit
 * can jump the reader to the right part of a long document.
 */
function sections(html, toc) {
  if (!toc.length) return [{ heading: null, id: null, text: stripHtml(html) }];
  const out = [];
  const parts = html.split(/(?=<h[123] id=")/);
  for (const part of parts) {
    const m = part.match(/^<h[123] id="([^"]+)"[^>]*>([\s\S]*?)<\/h[123]>/);
    if (!m) {
      const text = stripHtml(part);
      if (text) out.push({ heading: null, id: null, text });
      continue;
    }
    out.push({
      heading: stripHtml(m[2]),
      id: m[1],
      text: stripHtml(part.slice(m[0].length))
    });
  }
  return out.filter((s) => s.text || s.heading);
}

// ---------------------------------------------------------------- icons

/**
 * App icons are generated rather than committed, so the repo stays text-only
 * and the icon can be restyled by editing numbers instead of opening a
 * design tool. Pure-Node PNG encoder — no image dependencies.
 */

const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

/** RGBA pixel buffer → PNG file buffer. */
function encodePNG(size, rgba) {
  const stride = size * 4;
  const raw = Buffer.alloc((stride + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;   // bit depth
  ihdr[9] = 6;   // colour type: RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

function makeIcon(size, maskable) {
  const px = Buffer.alloc(size * size * 4);
  const R = maskable ? 0 : size * 0.22;   // corner radius
  const top = [0x90, 0x3b, 0xd4];
  const bot = [0xc0, 0x7e, 0xf0];

  const inCorner = (x, y) => {
    if (!R) return true;
    const cx = x < R ? R : x > size - R ? size - R : x;
    const cy = y < R ? R : y > size - R ? size - R : y;
    return (x - cx) ** 2 + (y - cy) ** 2 <= R * R;
  };

  // "note page" mark: rounded white card with ruled lines
  const s = maskable ? 0.40 : 0.52;       // mark size relative to canvas
  const w = size * s * 0.78;
  const h = size * s;
  const x0 = (size - w) / 2;
  const y0 = (size - h) / 2;
  const cardR = size * 0.035;

  const inCard = (x, y) => {
    if (x < x0 || x > x0 + w || y < y0 || y > y0 + h) return false;
    const cx = x < x0 + cardR ? x0 + cardR : x > x0 + w - cardR ? x0 + w - cardR : x;
    const cy = y < y0 + cardR ? y0 + cardR : y > y0 + h - cardR ? y0 + h - cardR : y;
    return (x - cx) ** 2 + (y - cy) ** 2 <= cardR * cardR;
  };

  const lineH = h * 0.075;
  const lines = [0.24, 0.44, 0.64, 0.84].map((f, i) => ({
    y: y0 + h * f,
    x1: x0 + w * 0.16,
    x2: x0 + w * (i === 3 ? 0.58 : 0.84)
  }));
  const onLine = (x, y) =>
    lines.some((l) => y >= l.y - lineH / 2 && y <= l.y + lineH / 2 && x >= l.x1 && x <= l.x2);

  for (let y = 0; y < size; y++) {
    const t = y / (size - 1);
    const bg = [
      Math.round(top[0] + (bot[0] - top[0]) * t),
      Math.round(top[1] + (bot[1] - top[1]) * t),
      Math.round(top[2] + (bot[2] - top[2]) * t)
    ];
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      if (!inCorner(x, y)) { px[i + 3] = 0; continue; }
      let c = bg;
      if (inCard(x, y)) c = onLine(x, y) ? bg : [255, 255, 255];
      px[i] = c[0]; px[i + 1] = c[1]; px[i + 2] = c[2]; px[i + 3] = 255;
    }
  }
  return encodePNG(size, px);
}

function buildIcons() {
  const targets = [
    ['icon-192.png', 192, false],
    ['icon-512.png', 512, false],
    ['icon-maskable-512.png', 512, true]
  ];
  for (const [name, size, maskable] of targets) {
    fs.writeFileSync(path.join(PUBLIC, name), makeIcon(size, maskable));
  }
  console.log(`  ✓ icons (${targets.map((t) => t[0]).join(', ')})`);
}

// ---------------------------------------------------------------- build

function build() {
  if (!fs.existsSync(CONTENT)) {
    console.error('No content/ directory found.');
    process.exit(1);
  }

  rm(OUT);
  mkdir(DOCS_OUT);
  buildIcons();

  let meta = {};
  const metaPath = path.join(CONTENT, 'subjects.json');
  if (fs.existsSync(metaPath)) {
    try {
      meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
    } catch (e) {
      console.warn('subjects.json is not valid JSON — ignoring.', e.message);
    }
  }

  const subjectDirs = fs
    .readdirSync(CONTENT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
    .map((d) => d.name)
    .sort();

  const manifest = { generated: new Date().toISOString(), subjects: [] };
  const searchIndex = [];
  let docCount = 0;

  for (const code of subjectDirs) {
    const dir = path.join(CONTENT, code);
    const files = fs
      .readdirSync(dir)
      .filter((f) => f.toLowerCase().endsWith('.md'))
      .sort();

    if (!files.length) continue;

    const info = meta[code] || {};
    const subject = {
      code,
      name: info.name || code,
      institution: info.institution || '',
      term: info.term || '',
      colour: info.colour || '#903BD4',
      description: info.description || '',
      docs: []
    };

    for (const file of files) {
      const md = fs.readFileSync(path.join(dir, file), 'utf8');
      const { html, toc } = render(md);

      const h1 = toc.find((t) => t.level === 1);
      const title = h1 ? h1.text : titleFromFilename(file);
      const id = slugify(file.replace(/\.md$/i, ''));
      const key = `${code}__${id}`;

      fs.writeFileSync(
        path.join(DOCS_OUT, `${key}.json`),
        JSON.stringify({ code, id, title, html, toc })
      );

      const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
      subject.docs.push({
        id,
        key,
        title,
        words,
        readingMinutes: Math.max(1, Math.round(words / 220)),
        toc: toc.filter((t) => t.level === 2).map((t) => ({ text: t.text, id: t.id }))
      });

      for (const s of sections(html, toc)) {
        searchIndex.push({
          k: key,
          c: code,
          d: title,
          h: s.heading || title,
          a: s.id || '',
          x: s.text.slice(0, 600)
        });
      }

      docCount++;
      console.log(`  ✓ ${code}/${file} → ${title} (${words} words, ${toc.length} headings)`);
    }

    manifest.subjects.push(subject);
  }

  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest));
  fs.writeFileSync(path.join(OUT, 'search.json'), JSON.stringify(searchIndex));

  console.log(
    `\n✅ Built ${docCount} document(s) across ${manifest.subjects.length} subject(s), ` +
      `${searchIndex.length} searchable sections.`
  );
}

build();
