// トップページを中心とした全コピー（§6.1）。文言の差し替えはこのファイルだけで完結する。
// 言語別（§10）。英語は直訳ではなく、豪ローカル向けに自然な表現で調整している。
import type { Lang } from '../i18n/config';
import { siteCommon } from './site';

type LinkRef = { label: string; href: string };

export type Copy = {
  hero: {
    eyebrow: string;
    heading: { lead: string; accent: string };
    sub: string;
    micro: string[];
    proof: { value: string; label: string }[];
    ctaPrimary: LinkRef;
    ctaSecondary: LinkRef;
  };
  trustBar: { items: { label: string; value: string }[] };
  problem: {
    label: string;
    heading: string;
    lead: string;
    items: { title: string; body: string }[];
  };
  discovery: { label: string; heading: string; lead: string; points: string[] };
  loop: { label: string; heading: string; lead: string; note: string };
  strengths: { label: string; heading: string; items: { title: string; body: string }[] };
  services: {
    label: string;
    heading: string;
    lead: string;
    stages: { stage: string; summary: string; items: string[] }[];
    note: string;
  };
  steps: { label: string; heading: string; items: { title: string; body: string }[] };
  finalCta: { heading: string; sub: string; cta: LinkRef };
  testimonials: { label: string; heading: string; items: { name: string; shop: string; comment: string }[] };
  team: {
    label: string;
    heading: string;
    lead: string;
    members: { name: string; role: string; location: string; message: string; slot: string }[];
  };
};

export const copy: Record<Lang, Copy> = {
  ja: {
    hero: {
      eyebrow: 'ゴールドコースト × 日本品質の集客パートナー',
      heading: { lead: 'ゴールドコーストの美容サロンに、', accent: '日本品質の集客を。' },
      sub: 'ゴールドコーストで、ネイル・まつげ・眉・ヘア・エステを手がける日本人オーナーの美容サロンへ。Web・Instagram・Googleレビューまで、集客の“仕組み”を一貫してお任せいただけます。',
      micro: ['日豪2か国体制', '日英対応', '成果は月次でご報告'],
      proof: [
        { value: 'Instagram起点', label: '集客の“信頼ハブ”を一貫設計' },
        { value: '月次レポート', label: '成果を数字でご報告' },
      ],
      ctaPrimary: { label: 'Instagramで相談する', href: siteCommon.instagramUrl },
      ctaSecondary: { label: 'サービスを見る', href: '#service' },
    },
    trustBar: {
      items: [
        { label: '対応エリア', value: 'ゴールドコースト（市内・近郊）' },
        { label: '対応領域', value: 'Web / Instagram / Google・MEO / Fresha' },
        { label: 'サポート実績', value: '[N]店舗' }, // TODO: 実績件数確定後に差し替え
        { label: '体制', value: '日豪2拠点・日英バイリンガル' },
      ],
    },
    problem: {
      label: 'Problem',
      heading: '“投稿するだけ”では、予約は増えません。',
      lead: '技術力の高いサロンほど、その実力がSNSで伝わりきっていないことがあります。心当たりはありませんか。',
      items: [
        { title: '写真を並べるだけの投稿', body: '施術写真をただ載せるだけでは、世界観も技術の高さも伝わりません。' },
        { title: 'メニューごとにバラバラの発信', body: 'ネイルとマツエクが別々の発信になっていて、「両方通えるサロン」と認知されていません。' },
        { title: '日本品質が英語圏に届かない', body: 'せっかくの日本水準の技術が、英語圏のお客様の目に触れる形になっていません。' },
        { title: '“待ち”の運用', body: 'リールやストーリーを使った能動的な集客ができず、フォロワー任せになっています。' },
      ],
    },
    discovery: {
      label: 'Market',
      heading: 'ゴールドコーストでは、お店の“探され方”が日本と違います。',
      lead: '日本のホットペッパーのような一強プラットフォームがなく、お店の入口は分散しています。そして分散した入口は、最終的に Instagram という1点に集まります。',
      points: [
        'Googleやレビューで気になるお店を絞り込んだあと、Instagramで施術・雰囲気・人柄を確認して予約を決めます。',
        'だから Instagram は単なる「投稿の場」ではなく、認知から予約までを貫く“信頼のハブ”になります。',
      ],
    },
    loop: {
      label: 'Solution',
      heading: 'お客様が、次のお客様を連れてくる。',
      lead: '集客は、入口から予約までの一方通行ではありません。来店 → 満足 → レビュー・紹介 → 新しいお客様、とぐるぐる回り続ける“輪”です。中心の「来店・施術」だけに集中していただき、外側の輪はすべて私たちが回します。',
      note: '輪を回す軸はレビューです。良い施術がレビューを生み、レビューが検索順位と信頼を高め、次の新しいお客様につながります。',
    },
    strengths: {
      label: 'Why us',
      heading: '日本の品質を、現地の信頼で届ける。',
      items: [
        { title: '日豪2か国体制', body: 'ゴールドコーストに現地担当、日本に制作・運用チーム。現地に足があり、日本に実行力があります。' },
        { title: '日英バイリンガル対応', body: '在豪日本人のお客様にも、ローカルのお客様にも届く発信を設計します。' },
        { title: '日本水準のデザインと運用品質', body: '日本のマーケティング・制作ノウハウをそのまま持ち込み、細部まで丁寧に仕上げます。' },
        { title: '続けるほど磨かれる仕組み', body: '案件を重ねるごとにノウハウが積み上がり、改善のスピードと精度が上がっていきます。' },
      ],
    },
    services: {
      label: 'Service',
      heading: '集客の輪——どの段階で、何をするか。',
      lead: '輪の段階ごとに、担当範囲と主な施策をはっきりさせています。',
      stages: [
        { stage: '認知', summary: 'まず見つけてもらう', items: ['Instagram運用（フィード・リール・ストーリー）', 'Googleビジネス / MEO最適化', 'レビューの見せ方設計', '在豪日本人メディアへの展開（必要に応じて）'] },
        { stage: '検討・予約', summary: '「ここにしよう」を後押しする', items: ['Webサイト制作・保守', '予約導線設計（Instagram DM / Fresha）'] },
        { stage: 'リピート・再来', summary: 'もう一度来てもらう', items: ['SMS・メール・Fresha自動リマインドの設計', 'ギフト・紹介導線の設計'] },
        { stage: '紹介・レビュー', summary: '次のお客様を連れてくる', items: ['レビュー獲得の仕組みづくり', 'UGC（お客様の投稿）の活用', '紹介プログラムの設計'] },
        { stage: '横断', summary: '輪全体を回し続ける', items: ['月次の分析・改善・レポート（成長パートナーの本体）'] },
      ],
      note: '輪の中心「来店・施術（接客・技術）」はオーナー様の領分です。素材のご提供・広告予算・撮影同行など、共同またはオプションとなる範囲は事前に明確にお伝えします。',
    },
    steps: {
      label: 'Flow',
      heading: 'ご相談から運用開始まで、5つのステップ。',
      items: [
        { title: '無料ヒアリング', body: '30分・オンラインまたは対面で、現状と目標をお聞きします。' },
        { title: 'プラン確定・ご契約', body: '最適なプランをご提案し、業務委託契約を結びます。' },
        { title: '初期構築', body: 'ハッシュタグ設計・投稿テンプレート・予約導線などの土台を整えます。' },
        { title: '運用開始・月末レポート', body: '運用をスタートし、毎月末に成果をご報告します。' },
        { title: '月次ミーティング＆改善', body: '数字をもとに翌月の打ち手を一緒に決めていきます。' },
      ],
    },
    finalCta: {
      heading: 'まずは30分、無料でお話ししませんか。',
      sub: '現状のヒアリングと、できることのご提案だけでも。無理な営業は一切いたしません。',
      cta: { label: 'Instagramで相談する', href: siteCommon.instagramUrl },
    },
    testimonials: {
      label: 'Voice',
      heading: 'お客様の声',
      items: [
        // TODO: 掲載許可の取れた実際の声に差し替え（現在はサンプル）
        { name: 'Mai', shop: 'まつげサロン経営・サザンポート', comment: 'Instagramをお任せしてから、DMでのご予約が目に見えて増えました。投稿の世界観が整い、「写真を見て来ました」というお客様がほとんどです。毎月数字で見せてもらえるので、安心して続けられています。' },
        { name: 'Mimu', shop: 'ネイルサロン経営・サーファーズパラダイス', comment: '英語での発信に自信がなく後回しにしていましたが、日本人にもローカルのお客様にも届く内容にしてもらえました。Googleのレビューも自然に増え、新規のご予約が安定してきています。' },
      ],
    },
    team: {
      label: 'Team',
      heading: '顔の見える、2人のチームです。',
      lead: '信頼が何より大切な市場だからこそ、私たち自身のことをお見せします。',
      members: [
        { name: '[お名前]', role: 'ゴールドコースト担当（営業・お客様サポート）', location: 'ゴールドコースト在住7年', message: '現地で築いてきた信頼関係を大切に、オーナー様の一番近くで伴走します。', slot: 'team-portrait-au' },
        { name: '[お名前]', role: '日本担当（Web制作・Instagram運用・分析改善）', location: '日本', message: '日本で磨いたマーケティングと制作の品質を、そのままお届けします。', slot: 'team-portrait-jp' },
      ],
    },
  },

  en: {
    hero: {
      eyebrow: 'Gold Coast × Japanese-quality growth',
      heading: { lead: 'Japanese-quality marketing', accent: 'for Gold Coast beauty salons.' },
      sub: 'For Japanese-owned beauty salons on the Gold Coast — nails, lashes, brows, hair and skin. From your website and Instagram to Google reviews, we run the whole growth engine as one connected system.',
      micro: ['Japan + Australia team', 'Bilingual (JP / EN)', 'Monthly results reporting'],
      proof: [
        { value: 'Instagram-first', label: 'One connected trust hub' },
        { value: 'Monthly report', label: 'Results, shown in numbers' },
      ],
      ctaPrimary: { label: 'Contact us on Instagram', href: siteCommon.instagramUrl },
      ctaSecondary: { label: 'See our services', href: '#service' },
    },
    trustBar: {
      items: [
        { label: 'Areas served', value: 'Gold Coast (city & surrounds)' },
        { label: 'What we cover', value: 'Web / Instagram / Google & MEO / Fresha' },
        { label: 'Salons supported', value: '[N] salons' }, // TODO: 実績件数確定後に差し替え
        { label: 'Team', value: 'Two countries, fully bilingual' },
      ],
    },
    problem: {
      label: 'Problem',
      heading: 'Just posting won’t fill your booking calendar.',
      lead: 'The more skilled the salon, the more is often left on the table. Sound familiar?',
      items: [
        { title: 'Posts that are just photos', body: 'A feed of treatment photos alone doesn’t convey your atmosphere or the level of your craft.' },
        { title: 'Each service marketed on its own', body: 'When nails and lashes are posted in isolation, no one realises they can book both with you.' },
        { title: 'Japanese quality that doesn’t land', body: 'Your Japan-level skill isn’t reaching English-speaking clients in a form they actually see.' },
        { title: 'A “wait and see” account', body: 'Without intentional use of Reels and Stories, growth is left to chance.' },
      ],
    },
    discovery: {
      label: 'Market',
      heading: 'On the Gold Coast, salons get found differently.',
      lead: 'There’s no single dominant platform like Japan’s Hot Pepper — the ways people find you are scattered. And those scattered entry points all converge on one place: Instagram.',
      points: [
        'After shortlisting on Google or review sites, people open Instagram to check the work, the vibe and the person — then decide to book.',
        'So Instagram isn’t just a place to post — it’s the trust hub that carries someone from discovery to confidence to booking.',
      ],
    },
    loop: {
      label: 'Solution',
      heading: 'Every client brings the next one.',
      lead: 'Growth isn’t a one-way funnel. It’s a loop that keeps turning: visit → happy client → reviews & referrals → new clients. You focus on the treatment at the centre; we run the whole loop around it.',
      note: 'Reviews are the axle. Great work earns reviews; reviews lift your search ranking and trust; that brings in the next new client — and the loop turns again.',
    },
    strengths: {
      label: 'Why us',
      heading: 'Japanese quality, delivered through local trust.',
      items: [
        { title: 'A team across two countries', body: 'A partner on the ground on the Gold Coast, a production and operations team in Japan. Local presence, Japanese execution.' },
        { title: 'Truly bilingual (JP / EN)', body: 'We craft content that reaches both Japanese expats and local Australian clients.' },
        { title: 'Japan-standard design & operations', body: 'We bring Japanese marketing and production know-how directly to your salon, finished down to the last detail.' },
        { title: 'A system that compounds', body: 'Every engagement adds to our playbook, so improvements get faster and sharper over time.' },
      ],
    },
    services: {
      label: 'Service',
      heading: 'What we do at each stage of the loop.',
      lead: 'For every stage, we make the scope and the key activities clear.',
      stages: [
        { stage: 'Discovery', summary: 'Get found first', items: ['Instagram management (feed, Reels, Stories)', 'Google Business / MEO optimisation', 'Review presentation & display', 'Japanese-community media in Australia (as needed)'] },
        { stage: 'Consider & book', summary: 'Turn interest into “let’s go here”', items: ['Website build & maintenance', 'Booking flow design (Instagram DM / Fresha)'] },
        { stage: 'Repeat & rebook', summary: 'Bring them back', items: ['SMS, email & Fresha automated reminder design', 'Gift & referral pathways'] },
        { stage: 'Referrals & reviews', summary: 'Bring the next client in', items: ['Systems to earn reviews', 'Using client content (UGC)', 'Referral program design'] },
        { stage: 'Across it all', summary: 'Keep the whole loop turning', items: ['Monthly analysis, improvement & reporting (the heart of a growth partner)'] },
      ],
      note: 'The centre of the loop — the treatment and client care — is yours. Anything shared or optional, such as supplying photos, ad budget, or on-site shoots, we make clear up front.',
    },
    steps: {
      label: 'Flow',
      heading: 'From first chat to launch, in five steps.',
      items: [
        { title: 'Free consult', body: 'A 30-minute call (online or in person) to understand where you are and where you want to go.' },
        { title: 'Plan & agreement', body: 'We recommend the right plan and put a simple service agreement in place.' },
        { title: 'Initial setup', body: 'We build the foundations — hashtag strategy, post templates, booking flow.' },
        { title: 'Launch & monthly report', body: 'We go live and report on results at the end of each month.' },
        { title: 'Monthly review & improve', body: 'We decide next month’s moves together, based on the numbers.' },
      ],
    },
    finalCta: {
      heading: 'Let’s talk for 30 minutes — on us.',
      sub: 'Even just a look at where things stand and a few ideas. No hard sell, ever.',
      cta: { label: 'Contact us on Instagram', href: siteCommon.instagramUrl },
    },
    testimonials: {
      label: 'Voice',
      heading: 'What clients say',
      items: [
        // TODO: 掲載許可の取れた実際の声に差し替え（現在はサンプル）
        { name: 'Mai', shop: 'Lash salon owner · Southport', comment: 'Since handing over our Instagram, DM bookings have clearly gone up. The feed finally looks like us, and most new clients say they came after seeing the photos. Getting the numbers each month makes it easy to keep going.' },
        { name: 'Mimu', shop: 'Nail salon owner · Surfers Paradise', comment: 'I kept putting off posting in English, but they made content that reaches both Japanese and local clients. Our Google reviews grew naturally and new-client bookings have become much steadier.' },
      ],
    },
    team: {
      label: 'Team',
      heading: 'A two-person team you can put a face to.',
      lead: 'In a market built on trust, we’d rather show you exactly who we are.',
      members: [
        { name: '[Name]', role: 'Sales · local liaison · client success', location: 'Gold Coast (7 years)', message: 'I draw on the trust I’ve built locally to stay right alongside each owner.', slot: 'team-portrait-au' },
        { name: '[Name]', role: 'Web · Instagram · analytics', location: 'Japan', message: 'I bring the marketing and production quality I’ve honed in Japan, unchanged.', slot: 'team-portrait-jp' },
      ],
    },
  },
};
