# 成長パートナー事業 公式サイト

要件定義書「Webサイト要件定義書 ― 成長パートナー事業（仮）」（§1〜§18）に基づく、QLD（ゴールドコースト／ブリスベン）の日本人オーナーサロン向け集客パートナー事業のコーポレート／サービスサイト。

- **目的**：無料相談（30分ヒアリング）の予約獲得（§2.1）
- **スタック**：Astro 5 + Tailwind CSS 4（静的サイト・高速・SEO強）（§14）

## セットアップ

```bash
npm install
npm run dev      # http://localhost:4321 で開発サーバー
npm run build    # dist/ に静的サイトを生成
npm run preview  # ビルド結果をローカルで確認
```

### Windows（Dropbox配下）での注意点

このプロジェクトは Dropbox 同期フォルダ内にあるため、2点の対策を入れています。

1. **EBUSY（ファイルロック）対策**：Vite のキャッシュを Dropbox 外（OS の temp）に逃がしています（`astro.config.mjs` の `vite.cacheDir`）。
2. **ビルド時のメモリ不足（OOM）対策**：ビルドが `process out of memory` で落ちる場合、Node のヒープを増やしてください。

   ```powershell
   $env:NODE_OPTIONS = "--max-old-space-size=4096"; npm run build
   ```

## 設計の要点（AI駆動開発ガイド §16 準拠）

- **デザイントークン先行**：色・フォント・角丸・余白は `src/styles/global.css` の `@theme` に集約（§8.2–8.4）。直書き禁止、トークン参照。
- **コンテンツ分離**：全コピー・料金・FAQ・事例は `src/content/` に集約。ノンエンジニアはここの文字列を書き換えるだけで更新できる。
  - `site.ts` … ブランド名・連絡先・予約URL等の基本情報
  - `copy.ja.ts` … トップページ中心の文言
  - `plans.ts` … 料金プラン（松竹梅）・オプション・料金FAQ
  - `faq.ts` … FAQ（カテゴリ別。`featured: true` がトップ抜粋に出る）
  - `works.ts` … 実績・事例（配列に追記すれば `/works/[slug]` が自動生成）
- **画像はすべてプレースホルダー**：`ImagePlaceholder` コンポーネントで実装し `data-image-slot` を付与（§8.7）。実画像差し替え時はこの属性を目印に置換する。
- **図解はコード生成**：`DiscoveryFigure`（分散入口→Instagramハブ→予約）／`LoopFigure`（フライホイール）はSVG/HTMLで描画。テーマカラー連動・レスポンシブ・`role="img"`対応。
- **セクション順序**：トップは §6.1 の S1〜S15 をコンバージョン論理順で厳守。
- **計測フック**：`data-cta` / `data-plan` / scroll深度 / faq_open などを GA4 イベントとして発火（§13）。Cookie同意後のみGA4ロード（§15）。

## ディレクトリ構成

```
src/
  components/   Hero相当のセクションは index.astro 内。共通UI（Navbar, Footer, CTAButton,
                PlanCard, Stepper, Accordion, DiscoveryFigure, LoopFigure, ContactForm, ...）
  layouts/      BaseLayout.astro（SEO/OGP/JSON-LD/フォント/計測/リビール）
  pages/        index, service, pricing, works/[slug], about, faq, contact, thanks, privacy
  content/      site / copy.ja / plans / faq / works
  styles/       global.css（デザイントークン）
public/         favicon.svg, og-default.svg, robots.txt（いずれも仮・要差し替え）
```

## 公開前に必ず差し替える項目（TODO）

コード内は `TODO:` コメントで該当箇所を明示しています。

- [ ] **ブランド名・ロゴ**（`content/site.ts` の `brandName` ほか／`public/favicon.svg`）
- [ ] **連絡先メール**（`content/site.ts` `email`）
- [ ] **予約ツールURL**（Calendly/TimeRex/Spir → `content/site.ts` `bookingUrl`。設定すると `/contact` に予約ボタンが出る）
- [ ] **InstagramアカウントURL・表示名**（`content/site.ts` `instagramUrl`／`/contact` の `@アカウント名`）
- [ ] **独自ドメイン**（`astro.config.mjs` `site`／`public/robots.txt`／`content/site.ts` `siteUrl`）
- [ ] **GA4 測定ID**（`components/CookieConsent.astro` の `GA_MEASUREMENT_ID`。未設定の間はGAを読み込まない）
- [ ] **フォーム送信先**（Formspree/Basin等 → `components/ContactForm.astro` の `FORM_ENDPOINT`。+ サービス側で自動返信メール設定）
- [ ] **reCAPTCHA v3**（`ContactForm.astro` のコメント参照）
- [ ] **料金の最終確定値**（`content/plans.ts`）／通貨・税の扱い
- [ ] **実績の数値・掲載許可**（`content/works.ts` の Mai Lashes / Mimu）
- [ ] **お客様の声・チーム名/写真**（`content/copy.ja.ts` の `testimonials` / `team`）
- [ ] **実画像**（`data-image-slot` 付きの全プレースホルダー。一覧は §8.7）
- [ ] **OGP画像**（`public/og-default.svg` → 1200×630 のPNG/JPG）
- [ ] **事業者情報・プライバシーポリシー本文の法務確認**（`pages/privacy.astro`）

## フェーズ（§17）

- **Phase 1（実装済み）**：トークン・共通レイアウト・トップ全セクション・/contact（フォーム＋予約枠）・両図解・レスポンシブ・GA4/SEO・/privacy。
- **Phase 2（実装済みの骨格）**：/pricing 詳細・/works（テンプレ＋2件）・/about・/faq 全文。実画像とお客様の声は差し替え待ち。
- **Phase 3（未着手）**：英語版（`/en/`・i18n辞書化）、/blog・コラム、軽量CMS、A/Bテスト。
```
