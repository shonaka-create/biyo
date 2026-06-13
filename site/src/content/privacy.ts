// プライバシーポリシー本文（§6.7 / §15）。日本（個人情報保護法）・豪（Privacy Act / APPs）双方を意識した汎用記載。
// TODO: 事業者情報（屋号・代表者・所在地）確定後に本文を最終化し、法務確認を行う。
import type { Lang } from '../i18n/config';

export type PrivacySection = { heading: string; body?: string; list?: string[]; bodyAfter?: string };

// {brand} と {email} はページ側で置換する
export const privacySections: Record<Lang, PrivacySection[]> = {
  ja: [
    {
      heading: '1. 基本方針',
      body: '{brand}（以下「当方」）は、日本の個人情報保護法およびオーストラリアの Privacy Act 1988（Australian Privacy Principles）の趣旨を踏まえ、お預かりした個人情報を適切に取り扱います。',
    },
    {
      heading: '2. 取得する情報',
      body: '当サイトでは、お問い合わせ・無料相談のお申し込みに際して、次の情報を取得します。',
      list: [
        'お名前、店舗名、メールアドレス',
        '店舗の所在地、Instagram・WebサイトのURL（任意でご提供いただいた場合）',
        'ご相談内容',
        'Cookie等によるアクセス情報（同意いただいた場合のみ。Google Analytics 4 を使用）',
      ],
    },
    {
      heading: '3. 利用目的',
      list: [
        'お問い合わせ・ご相談への対応、日程調整',
        'サービスのご提案・ご契約・提供に関する連絡',
        'サイトの利用状況の分析・改善（統計的な利用に限ります）',
      ],
    },
    {
      heading: '4. 第三者提供',
      body: '法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。フォーム送信・アクセス解析・予約管理のために利用する外部サービス（フォームサービス、Google Analytics、予約ツール等）には、各サービスのプライバシーポリシーが適用されます。',
    },
    {
      heading: '5. Cookieについて',
      body: '当サイトは、サイト改善のためのアクセス解析にCookieを使用します。Cookieの利用は同意バナーで管理でき、同意しない場合も当サイトの閲覧・お問い合わせには影響ありません。',
    },
    {
      heading: '6. 安全管理',
      body: '個人情報への不正アクセス、紛失、漏えい等を防止するため、合理的な安全管理措置を講じます。',
    },
    {
      heading: '7. 開示・訂正・削除のご請求',
      body: 'ご本人からの個人情報の開示・訂正・削除のご請求には、本人確認のうえ速やかに対応します。',
    },
    {
      heading: '8. お問い合わせ窓口',
      body: '本ポリシーに関するお問い合わせは、{email} までお願いいたします。',
    },
  ],

  en: [
    {
      heading: '1. Our approach',
      body: '{brand} (“we”, “us”) handles the personal information you entrust to us appropriately, in line with the spirit of Japan’s Act on the Protection of Personal Information and Australia’s Privacy Act 1988 (Australian Privacy Principles).',
    },
    {
      heading: '2. Information we collect',
      body: 'When you contact us or request a free consult, we collect the following:',
      list: [
        'Your name, salon name and email address',
        'Your salon location and Instagram / website URL (if you choose to provide them)',
        'The details of your enquiry',
        'Access information via cookies (only with your consent; we use Google Analytics 4)',
      ],
    },
    {
      heading: '3. How we use it',
      list: [
        'Responding to enquiries and scheduling',
        'Communication about proposing, contracting and delivering our services',
        'Analysing and improving site usage (in aggregate only)',
      ],
    },
    {
      heading: '4. Disclosure to third parties',
      body: 'Except as required by law, we do not disclose personal information to third parties without your consent. External services used for form submission, analytics and booking (form services, Google Analytics, booking tools, etc.) are governed by their own privacy policies.',
    },
    {
      heading: '5. Cookies',
      body: 'We use cookies for analytics to improve the site. Cookie use can be managed via the consent banner, and declining does not affect your ability to browse or contact us.',
    },
    {
      heading: '6. Security',
      body: 'We take reasonable measures to protect personal information against unauthorised access, loss and disclosure.',
    },
    {
      heading: '7. Access, correction and deletion',
      body: 'We respond promptly to requests from individuals to access, correct or delete their personal information, after verifying identity.',
    },
    {
      heading: '8. Contact',
      body: 'For questions about this policy, please contact us at {email}.',
    },
  ],
};

export const privacyIntro: Record<Lang, string> = {
  ja: '当サイトにおける個人情報の取り扱いについてご説明します。',
  en: 'How we handle personal information on this site.',
};
