# 焼肉らんぼ Webサイト

GitHub Pages / Cloudflare Pages / Netlify にそのまま公開できる静的サイトです。

## ファイル構成

```text
yakiniku-ranbo-site/
├─ index.html
├─ menu.html
├─ style.css
├─ script.js
└─ images/
   ├─ logo.png
   ├─ hero.jpg
   ├─ concept.jpg
   ├─ statement-1.jpg
   ├─ statement-2.jpg
   ├─ menu-beef.jpg
   ├─ menu-horumon.jpg
   ├─ menu-side.jpg
   ├─ store-1.jpg
   ├─ store-2.jpg
   └─ store-3.jpg
```

## 最初に変更する場所

`index.html` 内の以下を実際の情報に変更してください。

- `0000000000` → 店舗電話番号
- `000-0000-0000` → 表示用電話番号
- 店舗住所
- 営業時間
- Googleマップの埋め込み先
- メニュー内容と価格

## 画像

`images` フォルダ内に、上記ファイル名で写真を保存してください。
同じファイル名ならHTMLやCSSを変更せず差し替えできます。

## GitHub Pagesで公開

1. GitHubで新しいリポジトリを作成
2. このフォルダの中身をアップロード
3. `Settings` → `Pages`
4. `Deploy from a branch`
5. `main` / `/root` を選択
6. Save

## Cloudflare Pagesで公開

1. Cloudflareの `Workers & Pages` を開く
2. `Create` → `Pages` → `Connect to Git`
3. GitHubのリポジトリを選択
4. Framework preset: `None`
5. Build command: 空欄
6. Build output directory: `/`
7. Deploy
