// 実績・事例（§1.6 / §6.3）。事例の追加は両言語の配列に同じ slug で足す。
import type { Lang } from '../i18n/config';

export type Work = {
  slug: string;
  name: string;
  industry: string;
  area: string;
  services: string[];
  summary: string;
  challenge: string;
  approach: string[];
  result: string;
  thumbSlot: string;
  detailSlots: { id: string; label: string; ratio: string }[];
};

export const works: Record<Lang, Work[]> = {
  ja: [
    {
      slug: 'mai-lashes-brisbane',
      name: 'Mai Lashes Brisbane',
      industry: 'マツエクサロン（3店舗）',
      area: 'ブリスベン',
      services: ['Webサイト制作', '予約導線設計', 'レビュー埋め込み', 'MEO整備'],
      summary: '3店舗展開のマツエクサロンのWebサイトを制作。デザインから予約・レビュー導線まで一貫して構築しました。',
      challenge: '3店舗の情報が整理されておらず、ブランドの世界観と技術力がWeb上で伝わっていませんでした。予約への導線も分かりにくい状態でした。',
      approach: [
        'Figmaでデザインを設計し、Wixで忠実に再現',
        '予約ポップアップを実装し、迷わず予約できる導線に',
        'Google・Freshaのレビューをサイトに埋め込み、社会的証明を可視化',
        'FAQを実装し、来店前の不安を解消',
        'Googleビジネスプロフィールを整備（MEOの土台づくり）',
      ],
      result: '世界観・信頼・予約導線がそろったサイトが完成。レビューが新規のお客様の後押しとして機能する構造になりました。', // TODO: 数値が入り次第差し替え
      thumbSlot: 'case-thumb-mai-lashes',
      detailSlots: [
        { id: 'case-detail-mai-pc', label: 'PC版サイトデザイン', ratio: '16:9' },
        { id: 'case-detail-mai-sp', label: 'スマホ版サイトデザイン', ratio: '9:16' },
      ],
    },
  ],

  en: [
    {
      slug: 'mai-lashes-brisbane',
      name: 'Mai Lashes Brisbane',
      industry: 'Lash salon (3 locations)',
      area: 'Brisbane',
      services: ['Website build', 'Booking flow', 'Review embedding', 'MEO setup'],
      summary: 'A website for a three-location lash salon — from design through to the booking and review flow, built end to end.',
      challenge: 'Information across three locations wasn’t organised, and the brand’s atmosphere and skill weren’t coming through online. The path to booking was unclear.',
      approach: [
        'Designed in Figma and faithfully rebuilt in Wix',
        'Added a booking pop-up for a clear, frictionless path to book',
        'Embedded Google and Fresha reviews to make social proof visible',
        'Built out an FAQ to ease pre-visit hesitation',
        'Set up the Google Business Profile (the MEO foundation)',
      ],
      result: 'A site that brings together atmosphere, trust and a clear booking path — with reviews working to reassure new clients.', // TODO: 数値が入り次第差し替え
      thumbSlot: 'case-thumb-mai-lashes',
      detailSlots: [
        { id: 'case-detail-mai-pc', label: 'Desktop site design', ratio: '16:9' },
        { id: 'case-detail-mai-sp', label: 'Mobile site design', ratio: '9:16' },
      ],
    },
  ],
};
