import { defineConfig, loadEnv } from 'vite';
import { readdirSync, statSync, cpSync, mkdirSync, readFileSync } from 'fs';
import { resolve, relative, join, dirname } from 'path';
import { createHash } from 'crypto';

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

function nordSite(env) {
  const config = `<script>window.NORD_SUPABASE_URL=${JSON.stringify(env.VITE_SUPABASE_URL || '')};window.NORD_SUPABASE_KEY=${JSON.stringify(env.VITE_SUPABASE_ANON_KEY || '')};</script>`;
  return {
    name: 'nord-site',
    transformIndexHtml: (html, ctx) => html
      .replace('<head>', `<head>\n${config}`)
      .replace(/src="([^"?]+\.js)\?v=[0-9a-f]+"/g, (m, src) => {
        const file = resolve(dirname(ctx.filename), src);
        const v = createHash('md5').update(readFileSync(file)).digest('hex').slice(0, 8);
        return `src="${src}?v=${v}"`;
      }),
    closeBundle() {
      const out = resolve(__dirname, 'dist');
      mkdirSync(out, { recursive: true });
      for (const f of readdirSync(__dirname)) {
        if ((/^nord-.*\.js$/.test(f)) || ['robots.txt', 'sitemap.xml', 'llms.txt'].includes(f)) {
          cpSync(resolve(__dirname, f), join(out, f));
        }
      }
      cpSync(resolve(__dirname, 'vendor'), join(out, 'vendor'), { recursive: true });
      cpSync(resolve(__dirname, 'assets'), join(out, 'assets'), { recursive: true });
    },
  };
}

export default defineConfig(({ mode }) => ({
  root: '.',
  server: {
    host: true,
    port: 5173
  },
  plugins: [nordSite(loadEnv(mode, __dirname, 'VITE_'))],
  build: {
    rollupOptions: {
      input
    }
  }
}));
