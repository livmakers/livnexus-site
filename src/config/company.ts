/**
 * リブネクサス株式会社 — サイト全体の定数（Single Source of Truth）
 *
 * 住所・役員名・電話番号・各セクションの文言はすべてここで管理します。
 * 内容を変更したい場合は、原則このファイルだけを編集してください。
 *
 * ※ ヤマツ水産卸カンパニー本部の住所は未確定のため仮表示です。
 *    確定後 `offices` の該当行を更新してください。
 */

export const COMPANY = {
  name: "リブネクサス株式会社",
  nameEn: "LIV nexus Co., Ltd.", // 英字表記は LIV を大文字・nexus を小文字
  nameShort: "LIV nexus",
  tel: "0568-713201",
  postal: "485-0016",
  address: "愛知県小牧市間々原新田下新池987",
  established: "2004年12月24日（平成16年12月24日）",
  contactEmail: "satou.nobuhiro.bhd@gmail.com", // 問い合わせフォームの送信先
  business:
    "食品卸／水産卸を核に、グループ各社と連携した商社機能（食品・水産・包装資材・生活用品・各種商材の調達・供給・卸売）",
  copyright: "© 2026 LIV nexus Co., Ltd. All Rights Reserved.",
} as const;

/** ブランドコンセプト・キャッチコピー */
export const BRAND = {
  concept: "産地、商品、取引先、消費者をつなぎ、新しい商流を創る。",
  heroTitleA: "つなぐ力で、",
  heroTitleB: "商流を進化させる。",
  heroSub:
    "食品卸（三河屋物産）と水産卸（ヤマツ水産卸）。性格の異なる二つの現場の機能を受け継ぎ、グループの調達網と販路で多様な商材をつなぐ——愛知から、商いの形を更新する商社です。",
  heroEn: "Connecting Markets. Creating New Value.",
  ctaBand: "新しい商流を、共につくる。",
} as const;

/** 役員 */
export const OFFICERS = [
  { title: "代表取締役会長", name: "佐藤修滉（伸宏）" },
  { title: "代表取締役社長", name: "武藤嘉幸" },
  { title: "取締役", name: "川口英樹" },
  { title: "取締役", name: "伊藤政則" },
] as const;

/** 事業所 */
export const OFFICES = [
  { label: "本社", value: "〒485-0016 愛知県小牧市間々原新田下新池987" },
  {
    label: "ヤマツ水産卸カンパニー本部",
    value: "〒440-0091 愛知県豊橋市下五井町捨田12-1",
  },
] as const;

/** 2つの事業の柱 */
export const BUSINESSES = [
  {
    id: "mikawaya",
    no: "COMPANY 01",
    badge: "食",
    accent: "earth" as const,
    name: "三河屋物産カンパニー",
    lead: "業務用食材卸の基盤を活かし、食の現場を支える。",
    body:
      "業者向けB2B食品卸を中心に、外食産業、給食、食品加工、小売など、幅広いお客様へ食材を供給します。地域に根差した営業力と、安定した調達・供給体制を強みに、食の現場に必要な商品を的確に届けます。",
    tags: ["業務用食材", "加工食品", "冷凍食品", "調味料", "外食・給食向け", "小売向け食品"],
  },
  {
    id: "yamatsu",
    no: "COMPANY 02",
    badge: "水",
    accent: "sea" as const,
    name: "ヤマツ水産卸カンパニー",
    lead: "豊橋魚市場を拠点に、水産流通の可能性を広げる。",
    body:
      "豊橋魚市場を拠点に、水産品を中心とした卸売事業を展開します。鮮魚、冷凍水産品、加工水産品などを通じて、産地、市場、販売先をつなぎ、より価値ある水産流通を実現します。",
    tags: ["鮮魚", "冷凍水産品", "加工水産品", "市場流通", "外食・量販向け", "水産関連商材"],
  },
] as const;

/** 商社機能（Trading Business） */
export const TRADING = {
  lead: "食品にとどまらない、グループ連携の商社機能へ。",
  body:
    "魚を運ぶ一台のトラックに、その箱（タナカ産業）も、店頭に並ぶ生活雑貨（アートナップ）も載せられる。グループだから、別々に発注していたものが一本の商流にまとまります。取引先の課題、産地の可能性、商品の価値、消費者のニーズをつなぎ、新しいビジネスモデルの創出を目指します。",
  flow: ["産地", "商品", "取引先", "消費者"],
} as const;

/**
 * グループ連携先（リブメーカーズグループ各社）
 * リブネクサスは単独の食品商社ではなく、グループ各社と連携し多様な商材を扱う。
 * ※ field（説明）と url（各社サイト/カードへのリンク）は確定後に編集してください。
 *   url は未確定のため暫定で "#"。各社の正式URLが決まり次第差し替え。
 */
export const GROUP_PARTNERS = [
  { name: "株式会社三河屋", field: "スーパーマーケットチェーン運営", initial: "三", url: "https://www.biglive.jp/" },
  { name: "アートナップ株式会社", field: "紙製食器・生活用品の製造販売", initial: "ア", url: "https://www.artnap.co.jp/" },
  { name: "タナカ産業株式会社", field: "パッケージ・包装資材メーカー", initial: "タ", url: "https://www.tnk-tanaka.co.jp/" },
  { name: "株式会社ヤマダ", field: "アパレル物流・肌着卸", initial: "ヤ", url: "https://www.web-yamada.co.jp/" },
  { name: "株式会社ロークスカレー本舗", field: "業務用カレー・調味料の製造", initial: "ロ", url: "https://rouxcurryhonpo.com/" },
  { name: "リブリンク株式会社", field: "グループ事業会社", initial: "リ", url: "#" }, // URL未確定
] as const;

/** 取扱商材の広がり（マーキー表示） */
export const MATERIALS = [
  "食品",
  "水産",
  "業務用食材",
  "冷凍・加工品",
  "調味料",
  "包装資材",
  "保存用品",
  "生活用品",
  "雑貨",
  "産業資材",
  "各種商材",
] as const;

/** 私たちの強み（4カード） */
export const STRENGTHS = [
  { no: "01", title: "調達力", body: "豊橋魚市場の現場仕入れから業務用食材まで、地域・市場・メーカー・グループ各社の網で一括調達。", color: "sky" as const },
  { no: "02", title: "提案力", body: "「この用途なら何が売れるか」を、外食・給食・量販の現場目線で提案。", color: "sky" as const },
  { no: "03", title: "流通ネットワーク", body: "食品・水産にグループの包装資材・生活用品も載せ、一括納品で発注の手間を削減。", color: "sky" as const },
  { no: "04", title: "成長戦略", body: "承継・M&A・新規商材で、卸から総合商社機能へ拡張。", color: "sky" as const },
] as const;

/** 成長ビジョン Local → Regional → National →（その先へ） */
export const VISION = {
  lead: "地域の結節点から、",
  leadAccent: "商いの次のステージへ。",
  body:
    "まずは地域の食と水産の商流を、止めない・絶やさない。その堅実さの上に、グループ連携で扱う商材を増やし、新たなパートナーシップで商いを太くしていきます。やがては全国、そしてその先へ——グループの成長を牽引する中核企業を目指します。",
} as const;

export const VISION_STEPS = [
  { no: "01", en: "LOCAL", jp: "地域", body: "地元の食・水産の商流を確実に支える。", color: "cyan" as const },
  { no: "02", en: "REGIONAL", jp: "広域", body: "調達網と販路を中部・近隣圏へ拡張。", color: "sky" as const },
  { no: "03", en: "NATIONAL", jp: "全国", body: "グループ連携と商材拡張で全国規模の商社機能へ。", color: "teal" as const },
  { no: "04", en: "BEYOND", jp: "その先へ", body: "やがては海外市場も視野に、商いの領域を広げる。", color: "primary" as const },
] as const;

/** お問い合わせ種別 */
export const CONTACT_SUBJECTS = [
  "食品卸について",
  "水産卸について",
  "仕入・取扱商品について",
  "事業提携について",
  "M&A・協業について",
  "その他",
] as const;

/** グローバルナビ */
export const NAV = [
  { href: "#about", label: "About", jp: "リブネクサスについて" },
  { href: "#business", label: "Business", jp: "事業内容" },
  { href: "#strength", label: "Strength", jp: "私たちの強み" },
  { href: "#vision", label: "Vision", jp: "成長ビジョン" },
  { href: "#company", label: "Company", jp: "会社情報" },
] as const;

/** SEO メタ情報 */
export const SEO = {
  title: "リブネクサス株式会社｜食品卸・水産卸・商社機能で商流をつなぐ",
  description:
    "リブネクサス株式会社は、旧三河屋物産と旧ヤマツ水産卸株式会社の機能を受け継ぎ、食品卸・水産卸を中心に、産地・商品・取引先・消費者をつなぐ商社機能を担う企業です。",
  keywords: [
    "リブネクサス",
    "食品卸",
    "水産卸",
    "三河屋物産",
    "ヤマツ水産卸",
    "豊橋魚市場",
    "商社",
    "業務用食材",
    "愛知県小牧市",
  ],
} as const;
