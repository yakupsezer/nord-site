import { defineConfig } from 'vite';
import { readdirSync, statSync } from 'fs';
import { resolve, relative, join } from 'path';

function collectHtml(dir, root) {
  let entries = {};
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory() && entry !== 'node_modules' && entry !== 'dist' && entry !== '_build') {
      Object.assign(entries, collectHtml(full, root));
    } else if (entry.endsWith('.html')) {
      const rel = relative(root, full);
      const name = rel.replace(/[\/\\]/g, '_').replace('.html', '');
      entries[name] = full;
    }
  }
  return entries;
}

const root = resolve(__dirname);
const input = collectHtml(root, root);

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
