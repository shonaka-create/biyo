// FAQ（§6.5）。カテゴリ別。トップページには featured: true の項目のみ抜粋表示。言語別（§10）。
import type { Lang } from '../i18n/config';

export type FaqItem = { q: string; a: string; featured?: boolean };
export type FaqCategory = { category: string; items: FaqItem[] };

export const faqCategories: Record<Lang, FaqCategory[]> = {
  ja: [
    {
      category: '料金・契約',
      items: [
        { q: '料金体系を教えてください。', a: 'すべてのプランが〈初期構築（一回）＋ 月額（継続）＋ オプション（都度）〉の三層です。詳しくは料金ページをご覧ください。', featured: true },
        { q: '最低契約期間はありますか？', a: '集客の仕組みは積み上げ型のため、まずは6か月のご継続を推奨しています。状況に応じて柔軟にご相談に応じます。' }, // TODO: 契約条件確定後に修正
        { q: '途中でプランを変更できますか？', a: 'はい。月次ミーティングで成果を見ながら、翌月からのプラン変更が可能です。' },
      ],
    },
    {
      category: '作業範囲',
      items: [
        { q: 'どこまでお任せできますか？', a: '集客の輪のうち「来店・施術（接客・技術）」以外——Web・Instagram・Google/MEO・予約導線・再来導線・レビュー獲得・月次の分析改善——を一貫してお任せいただけます。', featured: true },
        { q: '写真や動画は自分で撮る必要がありますか？', a: '日々の施術写真はオーナー様にお願いしていますが、撮り方の型とチェックリストをご用意します。ゴールドコーストでは撮影同行（オプション）も可能です。', featured: true },
      ],
    },
    {
      category: 'オーストラリア特有のこと',
      items: [
        { q: '日本のホットペッパーのようなサービスはありますか？', a: '一強のプラットフォームはありません。Googleマップ・Fresha・Instagram・口コミ・在豪日本人メディアと入口が分散しており、だからこそ全体を設計する“仕組み”が重要になります。', featured: true },
        { q: 'LINEでの再来案内はできますか？', a: 'オーストラリアではLINEはほぼ使われていません。SMS・メール・Freshaの自動通知・Instagram DMを組み合わせた再来導線を設計します。', featured: true },
        { q: 'Freshaとは何ですか？', a: '豪州で広く使われている美容系の予約プラットフォームです。予約管理・自動リマインド・レビュー機能があり、集客導線の重要な一部として設計に組み込みます。' },
      ],
    },
    {
      category: '進め方',
      items: [
        { q: '契約までの流れを教えてください。', a: 'まず30分の無料ヒアリング（オンラインまたは対面）で現状をお聞きし、プランをご提案します。ご納得いただけたら業務委託契約を結び、初期構築から始めます。', featured: true },
        { q: 'ゴールドコースト以外の美容サロンでも依頼できますか？', a: '私たちはゴールドコーストの美容サロンに専念しています。現地での撮影同行や対面での打ち合わせを強みにしているためです。市内・近郊のサロン様はお気軽にご相談ください。' },
      ],
    },
    {
      category: '成果の考え方',
      items: [
        { q: 'どのくらいで成果が出ますか？', a: '土台づくり（1〜2か月）→ 運用の定着（3か月前後）→ レビューと検索順位の積み上がり（半年〜）が目安です。毎月のレポートで進捗を数字でご確認いただけます。' },
        { q: '成果はどのように報告されますか？', a: 'フォロワー数や「いいね」ではなく、プロフィールアクセス・予約導線のクリック・レビュー数・検索表示など、予約につながる指標を月次レポートでご報告します。' },
      ],
    },
  ],

  en: [
    {
      category: 'Pricing & contract',
      items: [
        { q: 'How does pricing work?', a: 'Every plan is three layers: a one-off setup, an ongoing monthly fee, and optional add-ons. See the pricing page for details.', featured: true },
        { q: 'Is there a minimum commitment?', a: 'Because growth compounds, we recommend starting with six months. We stay flexible and adapt to your situation.' }, // TODO: 契約条件確定後に修正
        { q: 'Can I change plans later?', a: 'Yes. We review results in the monthly meeting and you can move plans from the following month.' },
      ],
    },
    {
      category: 'Scope of work',
      items: [
        { q: 'How much can I hand over?', a: 'Everything in the growth loop except the treatment and client care itself — your website, Instagram, Google/MEO, booking and rebooking flows, earning reviews, and monthly analysis and improvement.', featured: true },
        { q: 'Do I have to shoot the photos and videos myself?', a: 'Day-to-day treatment photos come from you, but we provide the templates and checklists for shooting them. On the Gold Coast, on-site shoots are available as an add-on.', featured: true },
      ],
    },
    {
      category: 'How Australia is different',
      items: [
        { q: 'Is there something like Japan’s Hot Pepper here?', a: 'There’s no single dominant platform. Discovery is scattered across Google Maps, Fresha, Instagram, word of mouth and Japanese-community media — which is exactly why a designed, end-to-end system matters.', featured: true },
        { q: 'Can you send rebooking reminders over LINE?', a: 'LINE is barely used in Australia. We design rebooking flows using SMS, email, Fresha’s automated notifications and Instagram DM.', featured: true },
        { q: 'What is Fresha?', a: 'A booking platform widely used by the beauty industry in Australia. It handles bookings, automated reminders and reviews, and we build it into the growth flow as a key piece.' },
      ],
    },
    {
      category: 'How we work',
      items: [
        { q: 'What does getting started look like?', a: 'First, a 30-minute free consult (online or in person) to understand where you are, then a plan recommendation. Once you’re happy, we put a service agreement in place and begin the initial setup.', featured: true },
        { q: 'Do you work with beauty salons outside the Gold Coast?', a: 'We focus on beauty salons on the Gold Coast — being local lets us join you for shoots and meet face to face. Salons in the city and surrounding area are very welcome to reach out.' },
      ],
    },
    {
      category: 'How we think about results',
      items: [
        { q: 'How long until I see results?', a: 'A rough guide: foundations (1–2 months) → operations settling in (around 3 months) → reviews and search ranking compounding (six months onward). You’ll see progress in numbers every month.' },
        { q: 'How are results reported?', a: 'Not follower counts or likes, but the metrics that lead to bookings — profile visits, booking-link clicks, review counts and search visibility — in a monthly report.' },
      ],
    },
  ],
};
