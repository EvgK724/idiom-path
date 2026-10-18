'use strict';

const VERSION = '2026-10-18-1';
const SCOPE = new URL(self.registration.scope);
const CACHE_PREFIX = `idiom-path-${encodeURIComponent(SCOPE.pathname)}-`;
const CACHE = `${CACHE_PREFIX}${VERSION}`;
// This release includes the complete local library, including every Ryan recording.
// Regenerate this inventory whenever content or asset filenames change.
const ASSETS = [
  "./app.js",
  "./assets/cards/i001.webp",
  "./assets/cards/i002.webp",
  "./assets/cards/i003.webp",
  "./assets/cards/i004.webp",
  "./assets/cards/i005.webp",
  "./assets/cards/i006.webp",
  "./assets/cards/i007.webp",
  "./assets/cards/i008.webp",
  "./assets/cards/i009.webp",
  "./assets/cards/i010.webp",
  "./assets/cards/i011.webp",
  "./assets/cards/i012.webp",
  "./assets/cards/i013.webp",
  "./assets/cards/i014.webp",
  "./assets/cards/i015.webp",
  "./assets/cards/i016.webp",
  "./assets/cards/i017.webp",
  "./assets/cards/i018.webp",
  "./assets/cards/i019.webp",
  "./assets/cards/i020.webp",
  "./assets/cards/i021.webp",
  "./assets/cards/i022.webp",
  "./assets/cards/i023.webp",
  "./assets/cards/i024.webp",
  "./assets/cards/i025.webp",
  "./assets/cards/i026.webp",
  "./assets/cards/i027.webp",
  "./assets/cards/i028.webp",
  "./assets/cards/i029.webp",
  "./assets/cards/i030.webp",
  "./assets/cards/i031.webp",
  "./assets/cards/i032.webp",
  "./assets/cards/i033.webp",
  "./assets/cards/i034.webp",
  "./assets/cards/i035.webp",
  "./assets/cards/i036.webp",
  "./assets/cards/i037.webp",
  "./assets/cards/i038.webp",
  "./assets/cards/i039.webp",
  "./assets/cards/i040.webp",
  "./assets/cards/i041.webp",
  "./assets/cards/i042.webp",
  "./assets/cards/i043.webp",
  "./assets/cards/i044.webp",
  "./assets/cards/i045.webp",
  "./assets/cards/i046.webp",
  "./assets/cards/i047.webp",
  "./assets/cards/i048.webp",
  "./assets/cards/i049.webp",
  "./assets/cards/i050.webp",
  "./assets/cards/i051.webp",
  "./assets/cards/i052.webp",
  "./assets/cards/i053.webp",
  "./assets/cards/i054.webp",
  "./assets/cards/i055.webp",
  "./assets/cards/i056.webp",
  "./assets/cards/i057.webp",
  "./assets/cards/i058.webp",
  "./assets/cards/i059.webp",
  "./assets/cards/i060.webp",
  "./assets/cards/i061.webp",
  "./assets/cards/i062.webp",
  "./assets/cards/i063.webp",
  "./assets/cards/i064.webp",
  "./assets/cards/i065.webp",
  "./assets/cards/i066.webp",
  "./assets/cards/i067.webp",
  "./assets/cards/i068.webp",
  "./assets/cards/i069.webp",
  "./assets/cards/i070.webp",
  "./assets/cards/i071.webp",
  "./assets/cards/i072.webp",
  "./assets/cards/i073.webp",
  "./assets/cards/i074.webp",
  "./assets/cards/i075.webp",
  "./assets/cards/i076.webp",
  "./assets/cards/i077.webp",
  "./assets/cards/i078.webp",
  "./assets/cards/i079.webp",
  "./assets/cards/i080.webp",
  "./assets/cards/i081.webp",
  "./assets/cards/i082.webp",
  "./assets/cards/i083.webp",
  "./assets/cards/i084.webp",
  "./assets/cards/i085.webp",
  "./assets/cards/i086.webp",
  "./assets/cards/i087.webp",
  "./assets/cards/i088.webp",
  "./assets/cards/i089.webp",
  "./assets/cards/i090.webp",
  "./assets/cards/i091.webp",
  "./assets/cards/i092.webp",
  "./assets/cards/i093.webp",
  "./assets/cards/i094.webp",
  "./assets/cards/i095.webp",
  "./assets/cards/i096.webp",
  "./assets/cards/i097.webp",
  "./assets/cards/i098.webp",
  "./assets/cards/i099.webp",
  "./assets/cards/i100.webp",
  "./assets/icon-180.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/install-qr.png",
  "./audio/i001-example.mp3",
  "./audio/i001.mp3",
  "./audio/i002-example.mp3",
  "./audio/i002.mp3",
  "./audio/i003-example.mp3",
  "./audio/i003.mp3",
  "./audio/i004-example.mp3",
  "./audio/i004.mp3",
  "./audio/i005-example.mp3",
  "./audio/i005.mp3",
  "./audio/i006-example.mp3",
  "./audio/i006.mp3",
  "./audio/i007-example.mp3",
  "./audio/i007.mp3",
  "./audio/i008-example.mp3",
  "./audio/i008.mp3",
  "./audio/i009-example.mp3",
  "./audio/i009.mp3",
  "./audio/i010-example.mp3",
  "./audio/i010.mp3",
  "./audio/i011-example.mp3",
  "./audio/i011.mp3",
  "./audio/i012-example.mp3",
  "./audio/i012.mp3",
  "./audio/i013-example.mp3",
  "./audio/i013.mp3",
  "./audio/i014-example.mp3",
  "./audio/i014.mp3",
  "./audio/i015-example.mp3",
  "./audio/i015.mp3",
  "./audio/i016-example.mp3",
  "./audio/i016.mp3",
  "./audio/i017-example.mp3",
  "./audio/i017.mp3",
  "./audio/i018-example.mp3",
  "./audio/i018.mp3",
  "./audio/i019-example.mp3",
  "./audio/i019.mp3",
  "./audio/i020-example.mp3",
  "./audio/i020.mp3",
  "./audio/i021-example.mp3",
  "./audio/i021.mp3",
  "./audio/i022-example.mp3",
  "./audio/i022.mp3",
  "./audio/i023-example.mp3",
  "./audio/i023.mp3",
  "./audio/i024-example.mp3",
  "./audio/i024.mp3",
  "./audio/i025-example.mp3",
  "./audio/i025.mp3",
  "./audio/i026-example.mp3",
  "./audio/i026.mp3",
  "./audio/i027-example.mp3",
  "./audio/i027.mp3",
  "./audio/i028-example.mp3",
  "./audio/i028.mp3",
  "./audio/i029-example.mp3",
  "./audio/i029.mp3",
  "./audio/i030-example.mp3",
  "./audio/i030.mp3",
  "./audio/i031-example.mp3",
  "./audio/i031.mp3",
  "./audio/i032-example.mp3",
  "./audio/i032.mp3",
  "./audio/i033-example.mp3",
  "./audio/i033.mp3",
  "./audio/i034-example.mp3",
  "./audio/i034.mp3",
  "./audio/i035-example.mp3",
  "./audio/i035.mp3",
  "./audio/i036-example.mp3",
  "./audio/i036.mp3",
  "./audio/i037-example.mp3",
  "./audio/i037.mp3",
  "./audio/i038-example.mp3",
  "./audio/i038.mp3",
  "./audio/i039-example.mp3",
  "./audio/i039.mp3",
  "./audio/i040-example.mp3",
  "./audio/i040.mp3",
  "./audio/i041-example.mp3",
  "./audio/i041.mp3",
  "./audio/i042-example.mp3",
  "./audio/i042.mp3",
  "./audio/i043-example.mp3",
  "./audio/i043.mp3",
  "./audio/i044-example.mp3",
  "./audio/i044.mp3",
  "./audio/i045-example.mp3",
  "./audio/i045.mp3",
  "./audio/i046-example.mp3",
  "./audio/i046.mp3",
  "./audio/i047-example.mp3",
  "./audio/i047.mp3",
  "./audio/i048-example.mp3",
  "./audio/i048.mp3",
  "./audio/i049-example.mp3",
  "./audio/i049.mp3",
  "./audio/i050-example.mp3",
  "./audio/i050.mp3",
  "./audio/i051-example.mp3",
  "./audio/i051.mp3",
  "./audio/i052-example.mp3",
  "./audio/i052.mp3",
  "./audio/i053-example.mp3",
  "./audio/i053.mp3",
  "./audio/i054-example.mp3",
  "./audio/i054.mp3",
  "./audio/i055-example.mp3",
  "./audio/i055.mp3",
  "./audio/i056-example.mp3",
  "./audio/i056.mp3",
  "./audio/i057-example.mp3",
  "./audio/i057.mp3",
  "./audio/i058-example.mp3",
  "./audio/i058.mp3",
  "./audio/i059-example.mp3",
  "./audio/i059.mp3",
  "./audio/i060-example.mp3",
  "./audio/i060.mp3",
  "./audio/i061-example.mp3",
  "./audio/i061.mp3",
  "./audio/i062-example.mp3",
  "./audio/i062.mp3",
  "./audio/i063-example.mp3",
  "./audio/i063.mp3",
  "./audio/i064-example.mp3",
  "./audio/i064.mp3",
  "./audio/i065-example.mp3",
  "./audio/i065.mp3",
  "./audio/i066-example.mp3",
  "./audio/i066.mp3",
  "./audio/i067-example.mp3",
  "./audio/i067.mp3",
  "./audio/i068-example.mp3",
  "./audio/i068.mp3",
  "./audio/i069-example.mp3",
  "./audio/i069.mp3",
  "./audio/i070-example.mp3",
  "./audio/i070.mp3",
  "./audio/i071-example.mp3",
  "./audio/i071.mp3",
  "./audio/i072-example.mp3",
  "./audio/i072.mp3",
  "./audio/i073-example.mp3",
  "./audio/i073.mp3",
  "./audio/i074-example.mp3",
  "./audio/i074.mp3",
  "./audio/i075-example.mp3",
  "./audio/i075.mp3",
  "./audio/i076-example.mp3",
  "./audio/i076.mp3",
  "./audio/i077-example.mp3",
  "./audio/i077.mp3",
  "./audio/i078-example.mp3",
  "./audio/i078.mp3",
  "./audio/i079-example.mp3",
  "./audio/i079.mp3",
  "./audio/i080-example.mp3",
  "./audio/i080.mp3",
  "./audio/i081-example.mp3",
  "./audio/i081.mp3",
  "./audio/i082-example.mp3",
  "./audio/i082.mp3",
  "./audio/i083-example.mp3",
  "./audio/i083.mp3",
  "./audio/i084-example.mp3",
  "./audio/i084.mp3",
  "./audio/i085-example.mp3",
  "./audio/i085.mp3",
  "./audio/i086-example.mp3",
  "./audio/i086.mp3",
  "./audio/i087-example.mp3",
  "./audio/i087.mp3",
  "./audio/i088-example.mp3",
  "./audio/i088.mp3",
  "./audio/i089-example.mp3",
  "./audio/i089.mp3",
  "./audio/i090-example.mp3",
  "./audio/i090.mp3",
  "./audio/i091-example.mp3",
  "./audio/i091.mp3",
  "./audio/i092-example.mp3",
  "./audio/i092.mp3",
  "./audio/i093-example.mp3",
  "./audio/i093.mp3",
  "./audio/i094-example.mp3",
  "./audio/i094.mp3",
  "./audio/i095-example.mp3",
  "./audio/i095.mp3",
  "./audio/i096-example.mp3",
  "./audio/i096.mp3",
  "./audio/i097-example.mp3",
  "./audio/i097.mp3",
  "./audio/i098-example.mp3",
  "./audio/i098.mp3",
  "./audio/i099-example.mp3",
  "./audio/i099.mp3",
  "./audio/i100-example.mp3",
  "./audio/i100.mp3",
  "./audio/manifest.json",
  "./data.js",
  "./engine.js",
  "./index.html",
  "./manifest.webmanifest",
  "./offline.js",
  "./research.js",
  "./style.css"
];
const URLS = ASSETS.map(path => new URL(path, SCOPE).href);
const URL_SET = new Set(URLS);
const INDEX_URL = new URL('./index.html', SCOPE).href;
const CORE = ['./index.html', './style.css', './app.js', './data.js', './engine.js', './research.js', './offline.js', './manifest.webmanifest'];
let preparation = null;
let status = { type: 'IDIOM_PATH_OFFLINE_STATUS', version: VERSION, state: 'downloading', completed: 0, total: URLS.length };

async function publish(state, completed) {
  status = { ...status, state, completed };
  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  for (const client of clients) {
    if (client.url.startsWith(SCOPE.href)) client.postMessage(status);
  }
}

async function storeComplete(cache, url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  try {
    // Never persist a partial audio response. The request deliberately has no Range header.
    const response = await fetch(new Request(url, { cache: 'reload', credentials: 'same-origin', signal: controller.signal }));
    if (response.status !== 200 || response.type === 'opaque') throw new Error('Incomplete resource');
    await cache.put(url, response);
  } finally {
    clearTimeout(timeout);
  }
}

async function inventory(cache) {
  const missing = [];
  for (const url of URLS) {
    const response = await cache.match(url);
    if (!response || response.status !== 200) missing.push(url);
  }
  return missing;
}

async function prepareOffline() {
  if (preparation) return preparation;
  preparation = (async () => {
    try {
      const cache = await caches.open(CACHE);
      const missing = await inventory(cache);
      let completed = URLS.length - missing.length;
      await publish('downloading', completed);
      let cursor = 0;
      // Four concurrent downloads are gentle on mobile connections and resume individually.
      await Promise.all(Array.from({ length: Math.min(4, missing.length) }, async () => {
        while (cursor < missing.length) {
          const url = missing[cursor++];
          try {
            await storeComplete(cache, url);
            completed += 1;
            if (completed % 8 === 0 || completed === URLS.length) await publish('downloading', completed);
          } catch (_) {
            // Keep successful files. A retry downloads only the ones still missing.
          }
        }
      }));
      const remaining = await inventory(cache);
      if (remaining.length) {
        await publish('error', URLS.length - remaining.length);
        return;
      }
      await publish('ready', URLS.length);
      // CacheStorage is shared by all Pages projects on this origin; only remove our scope.
      for (const key of await caches.keys()) {
        if (key.startsWith(CACHE_PREFIX) && key !== CACHE) await caches.delete(key);
      }
    } catch (_) {
      await publish('error', status.completed);
    }
  })();
  try { await preparation; } finally { preparation = null; }
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(CORE.map(path => storeComplete(cache, new URL(path, SCOPE).href)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  // Finish activation promptly, so online reading/playback is not blocked while
  // the whole library downloads. offline.js starts the durable message event.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', event => {
  if (event.data?.type !== 'IDIOM_PATH_PREPARE_OFFLINE') return;
  event.waitUntil(prepareOffline());
});

async function rangedAudio(response, range) {
  const data = await response.arrayBuffer();
  const size = data.byteLength;
  const match = /^bytes=(\d*)-(\d*)$/i.exec(range.trim());
  const invalid = () => new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}`, 'Accept-Ranges': 'bytes' } });
  if (!match || (!match[1] && !match[2]) || !size) return invalid();
  let start, end;
  if (!match[1]) {
    const suffix = Number(match[2]);
    if (!Number.isSafeInteger(suffix) || suffix <= 0) return invalid();
    start = Math.max(0, size - suffix);
    end = size - 1;
  } else {
    start = Number(match[1]);
    end = match[2] ? Number(match[2]) : size - 1;
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start >= size || end < start) return invalid();
    end = Math.min(end, size - 1);
  }
  const headers = new Headers(response.headers);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Content-Length', String(end - start + 1));
  headers.set('Content-Type', 'audio/mpeg');
  headers.delete('Content-Encoding');
  return new Response(data.slice(start, end + 1), { status: 206, statusText: 'Partial Content', headers });
}

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== SCOPE.origin || !url.pathname.startsWith(SCOPE.pathname)) return;
  url.search = '';
  url.hash = '';
  const isNavigation = event.request.mode === 'navigate';
  const cacheURL = isNavigation ? INDEX_URL : url.href;
  if (!isNavigation && !URL_SET.has(cacheURL)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(cacheURL);
    if (cached?.status === 200) {
      const range = event.request.headers.get('range');
      if (range && /\.mp3$/i.test(url.pathname)) return rangedAudio(cached, range);
      return cached;
    }
    // During the first download users can already read and play audio online.
    // Only the complete-library job writes to the versioned cache.
    return fetch(event.request);
  })());
});
