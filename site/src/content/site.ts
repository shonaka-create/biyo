// サイト全体の基本情報。ノンエンジニアはこのファイルの文字列を書き換えるだけでよい。

export const site = {
  // TODO: ブランド名確定後に差し替え（§18）
  brandName: '[ブランド名]',
  brandNameEn: '[BRAND NAME]',
  tagline: '日本品質の集客を、オーストラリアで信頼できる形で。',
  // TODO: 連絡先メール確定後に差し替え
  email: 'hello@example.com',
  // TODO: InstagramアカウントURL確定後に差し替え
  instagramUrl: 'https://www.instagram.com/',
  // TODO: 予約ツール（Calendly / TimeRex / Spir）のURL確定後に差し替え
  bookingUrl: '',
  // TODO: 独自ドメイン確定後に差し替え
  siteUrl: 'https://example.com',
  areas: 'ゴールドコースト・ブリスベン（オンライン対応で QLD 全域）',
  copyright: `© ${new Date().getFullYear()} [ブランド名]. All rights reserved.`,
} as const;

export const nav = {
  links: [
    { label: 'サービス', href: '/service' },
    { label: '料金', href: '/pricing' },
    { label: '実績', href: '/works' },
    { label: '私たち', href: '/about' },
    { label: 'FAQ', href: '/faq' },
  ],
  cta: { label: '無料相談を予約する', href: '/contact' },
} as const;
