// 実績・事例（§1.6 / §6.3）。事例の追加はこの配列にオブジェクトを足すだけ。

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

export const works: Work[] = [
  {
    slug: 'mai-lashes-brisbane',
    name: 'Mai Lashes Brisbane',
    industry: 'マツエクサロン（3店舗）',
    area: 'ブリスベン',
    services: ['Webサイト制作', '予約導線設計', 'レビュー埋め込み', 'MEO整備'],
    summary: '3店舗展開のマツエクサロンのWebサイトを制作。デザインから予約・レビュー導線まで一貫して構築しました。',
    challenge:
      '3店舗の情報が整理されておらず、ブランドの世界観と技術力がWeb上で伝わっていませんでした。予約への導線も分かりにくい状態でした。',
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
      { id: 'case-detail-mai-1', label: 'サイト トップページ キャプチャ', ratio: '16:9' },
      { id: 'case-detail-mai-2', label: '予約ポップアップ キャプチャ', ratio: '16:9' },
      { id: 'case-detail-mai-3', label: 'レビュー埋め込みセクション キャプチャ', ratio: '16:9' },
    ],
  },
  {
    slug: 'mimu-beauty-salon',
    name: 'Mimu Beauty Salon',
    industry: 'マツエク＋ネイル複合サロン',
    area: 'ゴールドコースト',
    services: ['Instagram運用'],
    summary: 'マツエクとネイルの複合サロンのInstagram運用。「両方通えるサロン」としての認知づくりを設計しています。',
    challenge:
      'マツエクとネイルの発信が分かれており、「両方通えるサロン」という強みが伝わっていませんでした。投稿が施術写真の羅列になり、世界観が確立していませんでした。',
    approach: [
      'アカウント全体の世界観・トーンを設計',
      'マツエク×ネイルを横断するコンテンツ企画',
      'リール・ストーリーを使った能動的な発信設計',
    ],
    result: 'ご提案進行中。運用開始後、成果を順次掲載します。', // TODO: 運用開始後に更新
    thumbSlot: 'case-thumb-mimu',
    detailSlots: [
      { id: 'case-detail-mimu-1', label: 'Instagram フィード設計イメージ', ratio: '1:1' },
    ],
  },
];
