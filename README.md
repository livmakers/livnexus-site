# リブネクサス株式会社 公式サイト（LIV NEXUS Co., Ltd.）

食品卸・水産卸を核に、産地・商品・取引先・消費者をつなぐ「結節点（NEXUS）」としての
次世代商社コーポレートサイト。

- **キャッチコピー**：つなぐ力で、商流を進化させる。
- **2つの事業の柱**：三河屋物産カンパニー（食品卸）／ ヤマツ水産卸カンパニー（水産卸）
- **将来像**：Local → Regional → National → Global の総合商社機能へ

---

## ⚡ いますぐ見たいとき（インストール不要）

ビルド不要で確認できる単体プレビューを同梱しています。

```
preview.html をダブルクリックしてブラウザで開くだけ
```

デザイン・構成・アニメーションはすべて本番版と同じです。
（Tailwind CDN を使った確認用。本番公開には下記の Next.js 版を使います）

---

## 🛠 本番版（Next.js + TypeScript + Tailwind CSS）

### 必要環境

- Node.js 18.17 以上

### セットアップ

```bash
cd livnexus-site
npm install        # 依存パッケージのインストール
npm run dev        # http://localhost:3000 で開発サーバー起動
```

### 本番ビルド／公開

```bash
npm run build
npm run start
```

> **公開のおすすめ**：このフォルダを GitHub に push し、[Vercel](https://vercel.com) と連携すると、
> 自分のPCに Node.js が無くても自動でビルド・公開できます（無料枠あり）。

---

## ✏️ 内容の修正方法（重要）

会社名・住所・電話番号・役員・各セクションの文言は、すべて
**`src/config/company.ts` の1ファイルに集約**しています。
ここを編集するだけでサイト全体に反映されます。

| 項目 | 編集箇所（company.ts） |
| --- | --- |
| 会社名・住所・電話番号 | `COMPANY` |
| キャッチコピー・CTA | `BRAND` |
| 役員 | `OFFICERS` |
| 事業所（豊橋の住所など） | `OFFICES` |
| 2事業の説明・取扱領域 | `BUSINESSES` |
| 商社機能 | `TRADING` |
| 強み4カード | `STRENGTHS` |
| 成長ビジョン | `VISION_STEPS` |
| 問い合わせ種別 | `CONTACT_SUBJECTS` |
| ナビゲーション | `NAV` |
| SEO（title/description/keywords） | `SEO` |

### 確定済みデータ

- **本社**：〒485-0016 愛知県小牧市間々原新田下新池987
- **設立**：2004年12月24日（平成16年12月24日）
- **ヤマツ水産卸カンパニー本部**：〒440-0091 愛知県豊橋市下五井町捨田12-1
- **問い合わせ送信先**：`satou.nobuhiro.bhd@gmail.com`（`COMPANY.contactEmail`）

### 要設定（プレースホルダー）

- **グループ各社のリンク先**：`GROUP_PARTNERS` の各 `url` は暫定で `"#"`。
  各社サイト/紹介ページのURLが決まり次第差し替えてください（`http`始まりにすると別タブで開きます）。
- **株式会社ヤマダ／リブリンク株式会社の説明文**：暫定の `field` を正式な事業内容に更新してください。

---

## 📁 構成

```
livnexus-site/
├─ preview.html              … インストール不要の確認用（CDN版）
├─ src/
│  ├─ config/company.ts      … ★全テキスト・会社情報の定数（ここを編集）
│  ├─ app/
│  │  ├─ layout.tsx          … SEOメタ情報・フォント
│  │  ├─ page.tsx            … セクションの組み立て
│  │  └─ globals.css         … デザイントークン・カスタムCSS
│  └─ components/
│     ├─ Header.tsx          … 固定ヘッダー＋ハンバーガー
│     ├─ Hero.tsx            … ファーストビュー
│     ├─ NetworkCanvas.tsx   … 結節点ネットワークアニメーション
│     ├─ Reveal.tsx          … スクロール表示演出
│     ├─ About / Business / Strength / Vision / Company
│     ├─ CtaBand.tsx         … 「新しい商流を、共につくる。」
│     ├─ Contact.tsx         … 問い合わせフォーム
│     └─ Footer.tsx
├─ tailwind.config.ts        … カラー・フォント定義
└─ package.json
```

---

## 🎨 デザイン（昼テーマ）

- 明るい青空 × 陽光（白基調）のクリーンなコーポレートデザイン
- ヒーローは「商流ネットワーク」＝青いルート上を荷（パルス）が流れる Canvas アニメ＋太陽グロー＋陽光のチリ（カーソル追従）
- 「産地→商品→取引先→消費者」が順に点灯して流れる演出、成長ステップのライン伸長、カウントアップ、商材マーキー、カードのホバーリフト
- 背景に薄く「NEXUS／CONNECT」ウォーターマーク、固定ヘッダー（スクロールでガラス化）、スマホはハンバーガー
- 四位一体監修（COPY/DESIGN/MOTION/法務・性能）を反映：WCAG AA可読性・青軸への配色集約・「機能を受け継ぎ」表現の徹底
- `prefers-reduced-motion` 対応／Canvas は画面外・タブ非表示で自動停止（省電力）

## 📝 注意（文言ポリシー）

- 旧会社名は「機能を受け継ぎ」「事業基盤を活かし」という事業承継の文脈で表現
- 「合併」「統合」等の法的表現は断定していません

---

## 📨 問い合わせフォームについて

「送信する」を押すと、**お客様のメールソフトが起動し、入力内容が `satou.nobuhiro.bhd@gmail.com` 宛のメールとして自動作成**されます（あとは送信ボタンを押すだけ）。送信先は `src/config/company.ts` の `COMPANY.contactEmail` で変更できます。

> サーバーを介さず確実に届く方式です。将来、フォームから直接サーバー送信したい場合は
> `src/components/Contact.tsx` の `onSubmit` を [Formspree](https://formspree.io/) /
> [Resend](https://resend.com/) 等のフォーム・メールAPIに差し替えてください。

© 2026 LIV NEXUS Co., Ltd.
