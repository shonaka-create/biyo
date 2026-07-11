// 料金（§1.5 / §6.1 S8 / §6.2）
// SNS運用（月額プラン）と サイト制作（別料金）を分けて提示する。
// 表示通貨はオーストラリアドル（A$）で統一（§10）。
// TODO: 料金・税の確定後にここを更新（数値は現行案）。
import type { Lang } from '../i18n/config';

// --- SNS運用プラン（月額） ---
export type Plan = {
  id: 'a' | 'b' | 'c';
  name: string;
  position: string;
  target: string;
  monthly: string;
  recommended: boolean;
  features: string[];
};

export const plans: Record<Lang, Plan[]> = {
  ja: [
    {
      id: 'a',
      name: 'Plan A',
      position: 'まずは続ける土台を',
      target: '無理なく投稿を継続したい方',
      monthly: 'A$650',
      recommended: false,
      features: [
        '投稿の企画（必要に応じてチャット／ミーティングでご相談）',
        '週1回の投稿（月4回）',
        '投稿の分析（月1回）・レポート共有',
      ],
    },
    {
      id: 'b',
      name: 'Plan B',
      position: '投稿量を増やして伸ばす',
      target: '発信を強化して新規をしっかり増やしたい方',
      monthly: 'A$900',
      recommended: true,
      features: [
        '投稿の企画（必要に応じてチャット／ミーティングでご相談）',
        '週2回の投稿（月8回）',
        '投稿の分析（月1回）・レポート共有',
      ],
    },
    {
      id: 'c',
      name: 'Plan C',
      position: '撮影から運用までフルで',
      target: '撮影込みで本格的に運用したい方',
      monthly: 'A$1,500',
      recommended: false,
      features: [
        '素材撮影・同行（別途交通費をご請求）',
        '週3回の投稿（月15回）',
        '投稿の分析（月1回）・レポート共有',
      ],
    },
  ],
  en: [
    {
      id: 'a',
      name: 'Plan A',
      position: 'Build a steady base',
      target: 'For posting consistently, without the strain',
      monthly: 'A$650',
      recommended: false,
      features: [
        'Post planning (chat / meeting consults as needed)',
        '1 post a week (4 a month)',
        'Monthly post analysis & shared report',
      ],
    },
    {
      id: 'b',
      name: 'Plan B',
      position: 'Post more, grow faster',
      target: 'For stepping up output to win new clients in earnest',
      monthly: 'A$900',
      recommended: true,
      features: [
        'Post planning (chat / meeting consults as needed)',
        '2 posts a week (8 a month)',
        'Monthly post analysis & shared report',
      ],
    },
    {
      id: 'c',
      name: 'Plan C',
      position: 'Full service, shoots included',
      target: 'For running in earnest, with photo/video shoots',
      monthly: 'A$1,500',
      recommended: false,
      features: [
        'On-site content shoots (travel billed separately)',
        '3 posts a week (15 a month)',
        'Monthly post analysis & shared report',
      ],
    },
  ],
};

// --- サイト制作・運用（パッケージプラン） ---
// 初期費用＋月額をまとめた1つのパッケージとして提供。下記の機能をすべて含む。
export type SitePackage = {
  name: string;
  tagline: string;
  setup: string; // 初期費用
  monthly: string; // 月額
  contractNote: string; // 契約期間の補足
  features: string[];
};

export const sitePackage: Record<Lang, SitePackage> = {
  ja: {
    name: 'Webサイト制作・運用パッケージ',
    tagline: '制作から保守・運用まで、ぜんぶ込み',
    setup: 'A$600',
    monthly: 'A$200',
    contractNote: '※ このプランは3か月契約が必須となります。',
    features: [
      'レスポンシブ対応のWebサイト制作',
      'お問い合わせフォーム設置',
      'SEO基本設定（meta、OGP）',
      'SSL証明書',
      'お問い合わせ管理画面（CRM）',
      'アナリティクスダッシュボード',
      'ホスティング・サーバー管理',
      '稼働監視',
    ],
  },
  en: {
    name: 'Website build & management package',
    tagline: 'From build to hosting and monitoring — all in one',
    setup: 'A$600',
    monthly: 'A$200',
    contractNote: '* This plan requires a minimum 3-month contract.',
    features: [
      'Responsive website build',
      'Contact form setup',
      'Basic SEO (meta, OGP)',
      'SSL certificate',
      'Enquiry management dashboard (CRM)',
      'Analytics dashboard',
      'Hosting & server management',
      'Uptime monitoring',
    ],
  },
};

export const planNotes: Record<Lang, string[]> = {
  ja: [
    '【創業キャンペーン】Webサイト制作をご依頼の方は、初月のInstagram運用（Plan A）を無料でご提供します。\nさらに別の事業者様をご紹介いただくと、もう1か月分を無料に。',
    '表示はすべてオーストラリアドル（A$）・税込です。', // TODO: 税・通貨の扱い確定後に文言調整
  ],
  en: [
    'Launch offer: build your website with us and your first month of Instagram management (Plan A) is free. Refer another business and we add a second free month.',
    'All prices are in Australian dollars (AUD), tax-inclusive.', // TODO: 税・通貨の扱い確定後に文言調整
  ],
};

export const options: Record<Lang, { name: string; price: string; note: string }[]> = {
  ja: [
    { name: 'ご紹介特典', price: '1か月無料', note: '別の事業者様をご紹介いただくと、Instagram運用を1か月分無料で追加します。' },
    { name: '撮影同行（ゴールドコースト）', price: '都度お見積もり', note: '別途交通費。商品・店内・人物の撮影に同行します（Plan Cには含まれます）。' },
    { name: '広告予算', price: '実費', note: 'Meta / Google 広告の媒体費はクライアント負担（実費）です。' },
    { name: '追加LP・Web改修', price: '都度お見積もり', note: 'キャンペーンLPの追加や既存サイトの改修。' },
    { name: '単発キャンペーン制作', price: '都度お見積もり', note: '季節キャンペーンのバナー・投稿セットなど。' },
  ],
  en: [
    { name: 'Referral bonus', price: '1 month free', note: 'Introduce another business and we add a free month of Instagram management.' },
    { name: 'On-site shoot (Gold Coast)', price: 'Quoted per job', note: 'Travel billed separately. We join you to shoot your products, space and people (included in Plan C).' },
    { name: 'Ad budget', price: 'At cost', note: 'Meta / Google media spend is paid by the client (at cost).' },
    { name: 'Extra landing pages / web changes', price: 'Quoted per job', note: 'Additional campaign landing pages or changes to your existing site.' },
    { name: 'One-off campaign creative', price: 'Quoted per job', note: 'Seasonal campaign banners, post sets and the like.' },
  ],
};

export const pricingFaq: Record<Lang, { q: string; a: string }[]> = {
  ja: [
    { q: '最低契約期間はありますか？', a: '成果は積み上げ型のため、まずは6か月のご継続を推奨しています。ただし状況に応じて柔軟にご相談に応じます。' }, // TODO: 契約条件確定後に修正
    { q: '解約はいつでもできますか？', a: '月末締めの前月通知でいつでも解約いただけます。違約金などはありません。' }, // TODO: 契約条件確定後に修正
    { q: 'SNS運用とサイト制作は別々に頼めますか？', a: 'はい。SNS運用は月額プラン、サイト制作は別料金として承っています。どちらか一方だけでも、両方あわせてでもご依頼いただけます。' },
    { q: '写真や動画の素材はどちらが用意しますか？', a: '日々のお仕事の写真などの素材はオーナー様にご提供いただきます。撮影の型・チェックリストはこちらでご用意し、Plan Cまたはオプションで撮影同行も承ります。' },
    { q: '広告費はどうなりますか？', a: '広告の媒体費（Meta / Google に支払う費用）は実費でクライアント様のご負担です。運用・改善はオプションで承ります。' },
    { q: '料金はどの通貨ですか？', a: 'オーストラリアドル（A$）です。表示はすべて税込価格です。' },
  ],
  en: [
    { q: 'Is there a minimum commitment?', a: 'Because growth compounds over time, we recommend starting with six months. We’re flexible and happy to discuss what fits your situation.' }, // TODO: 契約条件確定後に修正
    { q: 'Can I cancel anytime?', a: 'Yes — cancel anytime with one month’s notice before month-end. There are no exit fees.' }, // TODO: 契約条件確定後に修正
    { q: 'Can I order social media and a website separately?', a: 'Yes. Social media management is a monthly plan and website builds are priced separately. Take either on its own, or both together.' },
    { q: 'Who provides the photos and videos?', a: 'Day-to-day photos come from you. We provide the shooting templates and checklists, and on-site shoots are available in Plan C or as an add-on.' },
    { q: 'How does ad spend work?', a: 'Media costs paid to Meta / Google are billed at cost to you. Management and optimisation are available as an add-on.' },
    { q: 'What currency are prices in?', a: 'Australian dollars (A$). All prices shown are tax-inclusive.' },
  ],
};
