import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
const root = resolve(import.meta.dirname);
const types = { '.html': 'text/html', '.mjs': 'text/javascript', '.css': 'text/css' };
createServer(async (req, res) => {
  try {
    const path = resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname === '/' ? '/index.html' : new URL(req.url, 'http://localhost').pathname));
    if (!path.startsWith(root + sep) || !['index.html', 'styles.css', 'src'].includes(path.slice(root.length + 1).split(sep)[0])) { res.writeHead(404); return res.end('Not found'); }
    res.setHeader('Content-Type', types[extname(path)] ?? 'text/plain');
    res.setHeader('X-Content-Type-Options', 'nosniff'); res.end(await readFile(path));
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(Number(process.env.PORT || 3000), '127.0.0.1', () => console.log('Pages & Prose: http://127.0.0.1:' + (process.env.PORT || 3000)));
