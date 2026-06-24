import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: 独自ドメイン確定後に site を差し替え
export default defineConfig({
  site: 'https://akane-web-studio.vercel.app',
  // 日本語＝デフォルト（プレフィックスなし `/`）、英語＝`/en/`（§10）
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // Dropbox同期によるファイルロック（EBUSY）を避けるため、ViteのキャッシュはDropbox外に置く
    cacheDir: join(tmpdir(), 'astro-vite-cache-growth-partner'),
  },
});
