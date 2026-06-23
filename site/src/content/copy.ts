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
    ctaPrimary: LinkRef;
    ctaSecondary: LinkRef;
  };
  concerns: { label: string; heading: string; items: string[]; closing: string };
  trustBar: { items: { label: string; value: string }[] };
  strengths: { label: string; heading: string; items: { title: string; body: string }[] };
  services: {
    label: string;
    heading: string;
    lead: string;
    pillars: { title: string; summary: string; items: string[] }[];
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
      eyebrow: 'ゴールドコースト × 日本品質のInstagram集客',
      heading: { lead: 'その技術を、', accent: 'もっと多くの人へ。' },
      sub: '美容サロンをはじめ、ゴールドコーストで腕一本でやってきたオーナーへ。技術で差がつきにくいいま、選ばれるかどうかはInstagramで決まります。「投稿しても伸びない」を、日本品質の運用でまるごと解決します。',
      micro: ['初月Instagram運用 無料', '日豪2か国体制', '日英対応', '成果は月次でご報告'],
      ctaPrimary: { label: 'Instagramで相談する', href: siteCommon.instagramUrl },
      ctaSecondary: { label: 'サービスを見る', href: '#service' },
    },
    concerns: {
      label: 'Concerns',
      heading: 'こんなお悩み、ありませんか？',
      items: [
        'Instagram、やった方がいいのは分かっているけど、手が回らない',
        '投稿しているのに、フォロワーも問い合わせも増えない',
        '周りに同業のお店が増えて、埋もれている気がする',
        '現地で伸びているお店と比べると、発信が見劣りする',
        '英語での発信や、ローカルのお客様への届け方が分からない',
        '誰に任せれば安心なのか分からない。外注は少し不安',
      ],
      closing: 'ひとつでも当てはまったら、InstagramとWebで解決できます。',
    },
    trustBar: {
      items: [
        { label: '対応エリア', value: 'ゴールドコースト（市内・近郊）' },
        { label: 'サービス', value: 'Webサイト制作 / Instagram' },
        { label: '対応業種', value: '業種は問いません' },
        { label: '体制', value: '日豪2拠点・日英バイリンガル' },
      ],
    },
    strengths: {
      label: 'Why us',
      heading: '日本の品質を、現地の信頼で届ける。',
      items: [
        { title: '日豪2か国体制', body: 'ゴールドコーストに現地担当、日本に制作・運用チーム。現地に足があり、日本に実行力があります。' },
        { title: '日英バイリンガル対応', body: '在豪日本人のお客様にも、ローカルのお客様にも届く発信とサイトを設計します。' },
        { title: '日本水準のデザインと運用品質', body: '日本で磨いた制作・運用ノウハウをそのまま持ち込み、細部まで丁寧に仕上げます。' },
        { title: 'SNSとWebを一気通貫', body: '発信からサイト・問い合わせ導線まで、バラバラにせず1つの流れとして設計します。' },
      ],
    },
    services: {
      label: 'Service',
      heading: 'サービス内容',
      lead: '私たちのサービスは大きく2つ。SNS運用と、Web制作・運用です。',
      pillars: [
        {
          title: 'SNS（Instagram）運用',
          summary: '発信を、成果につながる形に',
          items: [
            'アカウント設計・プロフィール最適化',
            'フィード／リール／ストーリーの企画・制作・投稿',
            '写真・動画素材のディレクション',
            '月次の分析レポートと改善',
          ],
        },
        {
          title: 'Web制作・運用',
          summary: '“見られて選ばれる”サイトを',
          items: [
            'Webサイトの企画・デザイン・制作',
            '問い合わせ・予約導線の設計',
            '公開後の更新・保守・改善',
            'スマホ最適化・表示速度・基本的なSEO',
          ],
        },
      ],
      note: '撮影同行や広告運用など、共同で進める範囲・オプションになる範囲は、事前にはっきりお伝えします。',
    },
    steps: {
      label: 'Flow',
      heading: '導入の流れ',
      items: [
        { title: '無料ヒアリング', body: '30分・オンラインまたは対面で、現状と目標をお聞きします。' },
        { title: 'プラン確定・ご契約', body: '最適なプランをご提案し、業務委託契約を結びます。' },
        { title: '初期構築', body: 'SNSの設計やサイトの土台など、運用に必要な準備を整えます。' },
        { title: '運用開始・月末レポート', body: '運用・制作をスタートし、毎月末に成果をご報告します。' },
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
        { name: 'K.T.', shop: 'カフェ経営・ゴールドコースト', comment: 'Instagramをお任せしてから投稿の世界観が整い、「投稿を見て来ました」というお客様が増えました。毎月数字で見せてもらえるので、安心して続けられています。' },
        { name: 'M.S.', shop: '小売店経営・ゴールドコースト', comment: '古くなっていたサイトを作り直してもらい、問い合わせが目に見えて増えました。公開後も気軽に更新を頼めるのが助かっています。' },
      ],
    },
    team: {
      label: 'Team',
      heading: '私たちのチーム',
      lead: '信頼が何より大切だからこそ、私たち自身のことをお見せします。',
      members: [
        { name: '[お名前]', role: 'ゴールドコースト担当（営業・お客様サポート）', location: 'ゴールドコースト在住7年', message: '現地で築いてきた信頼関係を大切に、オーナー様の一番近くで伴走します。', slot: 'team-portrait-au' },
        { name: 'SHOTARO', role: '日本担当（Web制作・SNS運用・分析改善）', location: '日本', message: '日本で磨いた制作と運用の品質を、そのままお届けします。', slot: 'team-portrait-jp' },
      ],
    },
  },

  en: {
    hero: {
      eyebrow: 'Gold Coast × Japanese-quality Instagram growth',
      heading: { lead: 'Your craft is world-class —', accent: 'your Instagram should be too.' },
      sub: 'For Gold Coast owners who’ve built their business on craft — beauty salons and beyond. When skill alone no longer sets you apart, Instagram decides who gets chosen. We turn “posting but not growing” into real results — managed to a Japanese standard.',
      micro: ['First month of Instagram free', 'Japan + Australia team', 'Bilingual (JP / EN)', 'Monthly results reporting'],
      ctaPrimary: { label: 'Contact us on Instagram', href: siteCommon.instagramUrl },
      ctaSecondary: { label: 'See our services', href: '#service' },
    },
    concerns: {
      label: 'Concerns',
      heading: 'Does any of this sound familiar?',
      items: [
        'You know Instagram matters, but there’s never time for it',
        'You keep posting, yet followers and enquiries don’t grow',
        'More competitors keep opening and you feel like you’re blending in',
        'Next to the local accounts that are thriving, your posts fall flat',
        'You’re not sure how to post in English or reach local customers',
        'You don’t know who to trust — outsourcing feels risky',
      ],
      closing: 'If even one rings true, Instagram and your website can fix it.',
    },
    trustBar: {
      items: [
        { label: 'Areas served', value: 'Gold Coast (city & surrounds)' },
        { label: 'Services', value: 'Social media / web build & operations' },
        { label: 'Industries', value: 'Any industry' },
        { label: 'Team', value: 'Two countries, fully bilingual' },
      ],
    },
    strengths: {
      label: 'Why us',
      heading: 'Japanese quality, delivered through local trust.',
      items: [
        { title: 'A team across two countries', body: 'A partner on the ground on the Gold Coast, a production and operations team in Japan. Local presence, Japanese execution.' },
        { title: 'Truly bilingual (JP / EN)', body: 'We craft content and websites that reach both Japanese expats and local Australian customers.' },
        { title: 'Japan-standard design & operations', body: 'We bring Japanese production and operations know-how directly to you, finished down to the last detail.' },
        { title: 'Social and web, end to end', body: 'From posts to your website and enquiry flow, we design it all as one connected journey — not separate pieces.' },
      ],
    },
    services: {
      label: 'Service',
      heading: 'What we do',
      lead: 'Our work comes down to two things: social media management, and building and running your website.',
      pillars: [
        {
          title: 'Social media (Instagram)',
          summary: 'Turn posting into real results',
          items: [
            'Account strategy & profile optimisation',
            'Feed / Reels / Stories — planned, produced and posted',
            'Direction for photo and video assets',
            'Monthly analytics report and improvement',
          ],
        },
        {
          title: 'Web build & operations',
          summary: 'A site that gets seen and chosen',
          items: [
            'Website planning, design and build',
            'Enquiry & booking flow design',
            'Post-launch updates, maintenance and improvement',
            'Mobile optimisation, performance and core SEO',
          ],
        },
      ],
      note: 'Anything shared or optional — such as on-site shoots or paid ad management — we make clear up front.',
    },
    steps: {
      label: 'Flow',
      heading: 'How we start',
      items: [
        { title: 'Free consult', body: 'A 30-minute call (online or in person) to understand where you are and where you want to go.' },
        { title: 'Plan & agreement', body: 'We recommend the right plan and put a simple service agreement in place.' },
        { title: 'Initial setup', body: 'We get the foundations ready — social strategy, the website base, whatever the work needs.' },
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
        { name: 'K.T.', shop: 'Café owner · Gold Coast', comment: 'Since handing over our Instagram, the feed finally looks like us and more customers say they came after seeing a post. Getting the numbers each month makes it easy to keep going.' },
        { name: 'M.S.', shop: 'Retail owner · Gold Coast', comment: 'They rebuilt our dated website and enquiries clearly went up. It helps that I can ask for updates easily even after launch.' },
      ],
    },
    team: {
      label: 'Team',
      heading: 'Our team',
      lead: 'Because trust matters most, we’d rather show you exactly who we are.',
      members: [
        { name: '[Name]', role: 'Sales · local liaison · client success', location: 'Gold Coast (7 years)', message: 'I draw on the trust I’ve built locally to stay right alongside each owner.', slot: 'team-portrait-au' },
        { name: 'SHOTARO', role: 'Web · social media · analytics', location: 'Japan', message: 'I bring the production and operations quality I’ve honed in Japan, unchanged.', slot: 'team-portrait-jp' },
      ],
    },
  },
};
