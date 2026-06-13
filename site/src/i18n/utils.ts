import { defaultLang, type Lang } from './config';

/** URL から現在の言語を判定する */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return seg === 'en' ? 'en' : defaultLang;
}

/** 言語に依存しない正規パス（先頭の /en を除去）を返す。例: /en/pricing → /pricing */
export function stripLocale(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice('/en'.length);
  return pathname;
}

/** 正規パスを指定言語のパスに変換する。例: localizePath('/pricing', 'en') → /en/pricing */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}
