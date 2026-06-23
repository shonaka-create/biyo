// サイト全体の基本情報。ノンエンジニアはこのファイルの文字列を書き換えるだけでよい。
import type { Lang } from '../i18n/config';

// 言語に依存しない共通情報
export const siteCommon = {
  brandName: 'AKANE WEB STUDIO',
  email: 'akane.webstudio@gmail.com',
  instagramUrl: 'https://www.instagram.com/akane.webstudio/',
  // TODO: 予約ツール（Calendly / TimeRex / Spir）のURL確定後に差し替え
  bookingUrl: '',
  // TODO: 独自ドメイン確定後に差し替え（astro.config.mjs の site と必ず一致させる）
  siteUrl: 'https://biyo-puce.vercel.app',
} as const;

// 言語別テキスト
const year = new Date().getFullYear();

export const siteText: Record<Lang, {
  tagline: string;
  areas: string;
  copyright: string;
}> = {
  ja: {
    tagline: 'ゴールドコーストのビジネスに、日本品質のSNS運用とWebを。',
    areas: 'ゴールドコースト（市内・近郊）',
    copyright: `© ${year} ${siteCommon.brandName}. All rights reserved.`,
  },
  en: {
    tagline: 'Japanese-quality social media & websites for Gold Coast businesses.',
    areas: 'Gold Coast (city & surrounds)',
    copyright: `© ${year} ${siteCommon.brandName}. All rights reserved.`,
  },
};

export const navText: Record<Lang, {
  links: { label: string; path: string }[];
  cta: { label: string; path: string };
}> = {
  ja: {
    links: [
      { label: 'サービス', path: '/service' },
      { label: '料金', path: '/pricing' },
      { label: '実績', path: '/works' },
      { label: '私たち', path: '/about' },
      { label: 'FAQ', path: '/faq' },
    ],
    cta: { label: 'Instagramで相談する', path: siteCommon.instagramUrl },
  },
  en: {
    links: [
      { label: 'Services', path: '/service' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Work', path: '/works' },
      { label: 'About', path: '/about' },
      { label: 'FAQ', path: '/faq' },
    ],
    cta: { label: 'Contact us on Instagram', path: siteCommon.instagramUrl },
  },
};
