// サイト全体の基本情報。ノンエンジニアはこのファイルの文字列を書き換えるだけでよい。
import type { Lang } from '../i18n/config';

// 言語に依存しない共通情報
export const siteCommon = {
  // TODO: ブランド名確定後に差し替え（§18）
  brandName: '[ブランド名]',
  // TODO: 連絡先メール確定後に差し替え
  email: 'hello@example.com',
  // TODO: InstagramアカウントURL確定後に差し替え
  instagramUrl: 'https://www.instagram.com/',
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
    tagline: 'ゴールドコーストの美容サロンに、日本品質の集客を。',
    areas: 'ゴールドコースト（市内・近郊の美容サロン）',
    copyright: `© ${year} ${siteCommon.brandName}. All rights reserved.`,
  },
  en: {
    tagline: 'Japanese-quality marketing for Gold Coast beauty salons.',
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
