import { defineConfig } from 'vite';
import { readdirSync, statSync, copyFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, relative, join, dirname } from 'path';

function collectHtml(dir, base = dir) {
  const entries = {};
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (entry === 'dist' || entry === '_build' || entry === 'node_modules' || entry === 'supabase') continue;
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

function copyStaticAssets() {
  const root = process.cwd();
  const staticFiles = [
    'nord-shared.js',
    'nord-about.js',
    'nord-home.js',
    'nord-data.js',
    'nord-service.js',
    'nord-page-blog.js',
    'nord-page-hizmetler.js',
    'nord-page-legal.js',
    'nord-page-odak.js',
    'nord-page-panel.js',
    'nord-page-post.js',
    'nord-page-referanslar.js',
    'nord-page-yaklasim.js',
    'nord-blog-data.js',
    'nord-legal-data.js',
  ];
  const staticDirs = ['vendor', 'assets'];

  function copyDir(src, dest) {
    if (!existsSync(src)) return;
    mkdirSync(dest, { recursive: true });
    for (const entry of readdirSync(src)) {
      const srcPath = join(src, entry);
      const destPath = join(dest, entry);
      const stat = statSync(srcPath);
      if (stat.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        copyFileSync(srcPath, destPath);
      }
    }
  }

  return {
    name: 'copy-static-assets',
    closeBundle() {
      const outDir = join(root, 'dist');
      for (const file of staticFiles) {
        const src = join(root, file);
        if (existsSync(src)) {
          copyFileSync(src, join(outDir, file));
        }
      }
      for (const dir of staticDirs) {
        copyDir(join(root, dir), join(outDir, dir));
      }
    }
  };
}

const input = collectHtml(process.cwd());

export default defineConfig({
  root: '.',
  publicDir: false,
  server: {
    host: true,
    port: 5173
  },
  plugins: [copyStaticAssets()],
  build: {
    rollupOptions: {
      input
    }
  }
});
