// 料金プラン（§1.5 / §6.1 S8 / §6.2）
// TODO: 料金の最終確定値が出たらここを更新（数値は現行案）
// 英語版は豪ローカル向けに A$ 表記（§10）。TODO: A$の確定レート・確定額を反映（現状は ¥100≒A$1 の暫定換算）。
import type { Lang } from '../i18n/config';

export type Plan = {
  id: 'ume' | 'take' | 'matsu';
  name: string;
  position: string;
  target: string;
  setup: string;
  monthly: string;
  recommended: boolean;
  features: string[];
};

export const plans: Record<Lang, Plan[]> = {
  ja: [
    {
      id: 'ume',
      name: 'Launch',
      position: 'まずは見つけてもらう',
      target: '開業直後／まず存在を知ってもらいたい方',
      setup: '¥50,000',
      monthly: '¥40,000',
      recommended: false,
      features: [
        'Googleビジネスプロフィール整備（MEOの土台）',
        'Instagramプロフィール・ハイライト設計',
        '予約導線の整理（Instagram DM / Fresha）',
        '投稿テンプレート・ハッシュタグ設計',
        '月次の簡易レポート',
      ],
    },
    {
      id: 'take',
      name: 'Growth',
      position: '集客エンジンをフル回転させる',
      target: '新規もリピートも本格的に増やしたい方',
      setup: '¥100,000',
      monthly: '¥80,000',
      recommended: true,
      features: [
        'Launchプランのすべて',
        'Instagram運用代行（フィード・リール・ストーリー）',
        'レビュー獲得の仕組みづくり（Google / Fresha）',
        '再来導線の設計（SMS・メール・Fresha自動通知）',
        'Webサイトの保守・改善',
        '月次の分析レポート＆改善ミーティング',
      ],
    },
    {
      id: 'matsu',
      name: 'Elevate',
      position: 'ブランドを確立してスケールへ',
      target: '多店舗展開・ブランド強化を目指す方',
      setup: '¥150,000〜',
      monthly: '¥150,000',
      recommended: false,
      features: [
        'Growthプランのすべて',
        'ブランド世界観の設計・クリエイティブ強化',
        '多店舗のアカウント・MEO横断管理',
        '広告運用（Meta / Google ※広告費実費）',
        'キャンペーン企画・LP制作',
        '優先サポート・戦略ミーティング',
      ],
    },
  ],
  en: [
    {
      id: 'ume',
      name: 'Starter',
      position: 'Build the foundation',
      target: 'Just opened, or simply need to be found',
      setup: 'A$500',
      monthly: 'A$400',
      recommended: false,
      features: [
        'Google Business Profile setup (the MEO foundation)',
        'Instagram profile & highlights design',
        'Booking flow tidy-up (Instagram DM / Fresha)',
        'Post templates & hashtag strategy',
        'Simple monthly report',
      ],
    },
    {
      id: 'take',
      name: 'Growth',
      position: 'Run the growth engine',
      target: 'Ready to grow both new and repeat business in earnest',
      setup: 'A$1,000',
      monthly: 'A$800',
      recommended: true,
      features: [
        'Everything in Starter',
        'Instagram management (feed, Reels, Stories)',
        'Systems to earn reviews (Google / Fresha)',
        'Rebooking flow (SMS, email, Fresha auto-notifications)',
        'Website maintenance & improvement',
        'Monthly analytics report & review meeting',
      ],
    },
    {
      id: 'matsu',
      name: 'Brand',
      position: 'Define your brand & scale',
      target: 'Scaling to multiple locations or strengthening your brand',
      setup: 'A$1,500+',
      monthly: 'A$1,500',
      recommended: false,
      features: [
        'Everything in Growth',
        'Brand world & creative direction',
        'Multi-location account & MEO management',
        'Paid ads (Meta / Google — ad spend billed separately)',
        'Campaign planning & landing pages',
        'Priority support & strategy meetings',
      ],
    },
  ],
};

export const planNotes: Record<Lang, string[]> = {
  ja: [
    '料金はすべて〈初期構築（一回）＋ 月額（継続）＋ オプション（都度）〉の三層です。',
    '表示は日本円・税別です。オーストラリアドル（A$）でのご請求にも対応します。', // TODO: 税・通貨の扱い確定後に文言調整
  ],
  en: [
    'Every plan is three layers: a one-off setup, an ongoing monthly fee, and optional add-ons as needed.',
    'Prices shown are in AUD, excluding GST. Billing in Japanese yen is also available.', // TODO: 税・通貨の扱い確定後に文言調整
  ],
};

export const options: Record<Lang, { name: string; price: string; note: string }[]> = {
  ja: [
    { name: '撮影同行（ゴールドコースト）', price: '都度お見積もり', note: '別途交通費。施術・店内・人物の撮影に同行します。' },
    { name: '広告予算', price: '実費', note: 'Meta / Google 広告の媒体費はクライアント負担（実費）です。' },
    { name: '追加LP・Web改修', price: '都度お見積もり', note: 'キャンペーンLPの追加や既存サイトの改修。' },
    { name: '単発キャンペーン制作', price: '都度お見積もり', note: '季節キャンペーンのバナー・投稿セットなど。' },
  ],
  en: [
    { name: 'On-site shoot (Gold Coast)', price: 'Quoted per job', note: 'Travel billed separately. We join you to shoot treatments, the space and people.' },
    { name: 'Ad budget', price: 'At cost', note: 'Meta / Google media spend is paid by the client (at cost).' },
    { name: 'Extra landing pages / web changes', price: 'Quoted per job', note: 'Additional campaign landing pages or changes to your existing site.' },
    { name: 'One-off campaign creative', price: 'Quoted per job', note: 'Seasonal campaign banners, post sets and the like.' },
  ],
};

export const pricingFaq: Record<Lang, { q: string; a: string }[]> = {
  ja: [
    { q: '最低契約期間はありますか？', a: '集客の仕組みは積み上げ型のため、まずは6か月のご継続を推奨しています。ただし状況に応じて柔軟にご相談に応じます。' }, // TODO: 契約条件確定後に修正
    { q: '解約はいつでもできますか？', a: '月末締めの前月通知でいつでも解約いただけます。違約金などはありません。' }, // TODO: 契約条件確定後に修正
    { q: '写真や動画の素材はどちらが用意しますか？', a: '日々の施術写真などの素材はオーナー様にご提供いただきます。撮影の型・チェックリストはこちらでご用意し、オプションで撮影同行も承ります。' },
    { q: '広告費はどうなりますか？', a: '広告の媒体費（Meta / Google に支払う費用）は実費でクライアント様のご負担です。運用・改善は松プランまたはオプションで承ります。' },
    { q: '支払いは円とオーストラリアドルのどちらですか？', a: '料金は円建てで設計していますが、A$でのご請求にも対応可能です。ご相談時にご希望をお聞かせください。' },
  ],
  en: [
    { q: 'Is there a minimum commitment?', a: 'Because growth compounds over time, we recommend starting with six months. We’re flexible and happy to discuss what fits your situation.' }, // TODO: 契約条件確定後に修正
    { q: 'Can I cancel anytime?', a: 'Yes — cancel anytime with one month’s notice before month-end. There are no exit fees.' }, // TODO: 契約条件確定後に修正
    { q: 'Who provides the photos and videos?', a: 'Day-to-day treatment photos come from you. We provide the shooting templates and checklists, and on-site shoots are available as an add-on.' },
    { q: 'How does ad spend work?', a: 'Media costs paid to Meta / Google are billed at cost to you. The management and optimisation are covered in the Brand plan or as an add-on.' },
    { q: 'Do you bill in AUD or JPY?', a: 'Pricing is designed in yen but we can bill in AUD too. Just let us know your preference during the consult.' },
  ],
};
