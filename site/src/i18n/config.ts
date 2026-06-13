// i18n 基本設定（§10）。日本語＝デフォルト（プレフィックスなし `/`）、英語＝`/en/`。
export const languages = {
  ja: '日本語',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ja';
export const locales: Lang[] = ['ja', 'en'];

// hreflang 用のロケールコード
export const hreflangMap: Record<Lang, string> = {
  ja: 'ja-JP',
  en: 'en-AU',
};
