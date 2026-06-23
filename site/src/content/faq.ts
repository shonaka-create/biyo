// FAQ（§6.5）。カテゴリ別。トップページには featured: true の項目のみ抜粋表示。言語別（§10）。
import type { Lang } from '../i18n/config';

export type FaqItem = { q: string; a: string; featured?: boolean };
export type FaqCategory = { category: string; items: FaqItem[] };

export const faqCategories: Record<Lang, FaqCategory[]> = {
  ja: [
    {
      category: '料金・契約',
      items: [
        { q: '料金体系を教えてください。', a: 'SNS運用は月額プラン（Plan A/B/C）、Webサイト制作は別料金です。必要なときだけ追加できるオプションも含め、追加費用は契約前にすべてお伝えします。詳しくは料金ページをご覧ください。', featured: true },
        { q: '最低契約期間はありますか？', a: '成果は積み上げ型のため、まずは6か月のご継続を推奨しています。状況に応じて柔軟にご相談に応じます。' }, // TODO: 契約条件確定後に修正
        { q: '途中でプランを変更できますか？', a: 'はい。月次ミーティングで成果を見ながら、翌月からのプラン変更が可能です。' },
      ],
    },
    {
      category: '作業範囲',
      items: [
        { q: 'どこまでお任せできますか？', a: 'SNS（Instagram）運用——アカウント設計・投稿の企画／制作／投稿・分析改善——と、Webサイトの制作・運用——制作・問い合わせ導線・公開後の更新／保守——を一貫してお任せいただけます。業種は問いません。', featured: true },
        { q: 'SNS運用とサイト制作は別々に頼めますか？', a: 'はい。SNS運用は月額プラン、サイト制作は別料金です。どちらか一方だけでも、両方あわせてでもご依頼いただけます。', featured: true },
        { q: '写真や動画は自分で用意する必要がありますか？', a: '日々の素材はオーナー様にご提供いただきますが、撮り方の型とチェックリストをご用意します。ゴールドコーストでは撮影同行も可能です（Plan Cに含まれるほか、オプションでも承ります）。', featured: true },
      ],
    },
    {
      category: '進め方',
      items: [
        { q: '契約までの流れを教えてください。', a: 'まず30分の無料ヒアリング（オンラインまたは対面）で現状をお聞きし、プランをご提案します。ご納得いただけたら業務委託契約を結び、初期構築から始めます。', featured: true },
        { q: '英語が苦手でも大丈夫ですか？', a: 'はい。日英バイリンガル体制なので、やり取りは日本語だけで問題ありません。発信やサイトは、在豪日本人にもローカルのお客様にも届く形で設計します。', featured: true },
        { q: 'ゴールドコースト以外でも依頼できますか？', a: '撮影同行や対面での打ち合わせを強みにしているため、基本はゴールドコースト市内・近郊を中心にしています。オンライン中心のご依頼であれば、エリア外でもまずはご相談ください。' },
      ],
    },
    {
      category: '成果の考え方',
      items: [
        { q: 'どのくらいで成果が出ますか？', a: '土台づくり（1〜2か月）→ 運用の定着（3か月前後）→ 積み上がり（半年〜）が目安です。毎月のレポートで進捗を数字でご確認いただけます。' },
        { q: '成果はどのように報告されますか？', a: 'フォロワー数や「いいね」だけでなく、プロフィールアクセス・サイトへの流入・問い合わせなど、ビジネスにつながる指標を月次レポートでご報告します。' },
      ],
    },
  ],

  en: [
    {
      category: 'Pricing & contract',
      items: [
        { q: 'How does pricing work?', a: 'Social media management is a monthly plan (Plan A/B/C) and website builds are priced separately. Optional add-ons are available only when needed, and we share every extra cost before you sign. See the pricing page for details.', featured: true },
        { q: 'Is there a minimum commitment?', a: 'Because results compound, we recommend starting with six months. We stay flexible and adapt to your situation.' }, // TODO: 契約条件確定後に修正
        { q: 'Can I change plans later?', a: 'Yes. We review results in the monthly meeting and you can move plans from the following month.' },
      ],
    },
    {
      category: 'Scope of work',
      items: [
        { q: 'How much can I hand over?', a: 'Social media (Instagram) — account strategy, planning, production, posting and analysis — and your website — build, enquiry flow, and post-launch updates and maintenance. Any industry.', featured: true },
        { q: 'Can I order social media and a website separately?', a: 'Yes. Social media is a monthly plan and website builds are priced separately. Take either on its own, or both together.', featured: true },
        { q: 'Do I have to provide the photos and videos myself?', a: 'Day-to-day assets come from you, but we provide the templates and checklists for shooting them. On the Gold Coast, on-site shoots are included in Plan C, or available as an add-on.', featured: true },
      ],
    },
    {
      category: 'How we work',
      items: [
        { q: 'What does getting started look like?', a: 'First, a 30-minute free consult (online or in person) to understand where you are, then a plan recommendation. Once you’re happy, we put a service agreement in place and begin the initial setup.', featured: true },
        { q: 'What if my English isn’t strong?', a: 'No problem — we’re fully bilingual, so everything can be handled in Japanese. We design content and websites that reach both Japanese expats and local Australian customers.', featured: true },
        { q: 'Do you work with businesses outside the Gold Coast?', a: 'Being local lets us join you for shoots and meet face to face, so we focus on the Gold Coast and surrounds. For mostly-online engagements, businesses further afield are welcome to reach out.' },
      ],
    },
    {
      category: 'How we think about results',
      items: [
        { q: 'How long until I see results?', a: 'A rough guide: foundations (1–2 months) → operations settling in (around 3 months) → compounding (six months onward). You’ll see progress in numbers every month.' },
        { q: 'How are results reported?', a: 'Not just follower counts or likes, but the metrics that move your business — profile visits, website traffic and enquiries — in a monthly report.' },
      ],
    },
  ],
};
