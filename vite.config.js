import { defineConfig } from 'vite';
import { readdirSync, statSync } from 'fs';
import { resolve, relative, join } from 'path';

function collectHtml(dir, base = dir) {
  const entries = {};
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (entry === 'dist' || entry === '_build' || entry === 'node_modules') continue;
    const stat = statSync(full);
    if (stat.isDirectory()) {
      Object.assign(entries, collectHtml(full, base));
    } else if (entry.endsWith('.html')) {
      const rel = relative(base, full);
      const key = rel.replace(/[\\/]/g, '_').replace('.html', '');
      entries[key] = resolve(full);
    }
  }
  return entries;
}

const input = collectHtml(__dirname);

export default defineConfig({
  root: '.',
  server: {
    host: true,
    port: 5173
  },
  build: {
    rollupOptions: {
      input
    }
  }
});
