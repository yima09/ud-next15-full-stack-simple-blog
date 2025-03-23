# Simple Blog

## 認証なし画面

```bash
% npx create-next-app@^15
% npm run dev
```

### ルーティンググループ作成

```bash
% mkdir src/app/\(auth\) src/app/\(public\) src/app/\(private\)
```

### Prisma Install Init

```bash
% npm instal prisma@^6 @prisma/client@^6
% npm instal -D ts-node@^10
% npm instal bcryptjs@^2
% npm instal @types/bcryptjs@^2
% npx prisma init # 生成 2ファイル編集。
% mkdir src/lib
% touch src/lib/prisma.ts # コピペ。
```

### Prisma スキーマ (User, Post)

リレーション User 1 : 多 Post

### Prisma 初期データ(ダミーデータ)

```bash
touch prisma/seed.ts
```

### Prisma マイグレーション実行・関連コマンド・Prisma Studio

```bash
% npx prisma migrate dev --name init # マイグレーション(テーブル作成)
# npx prisma db seed # シード実行(ダミーデータ)
% npx prisma studio # DBの内容を確認
# npx prisma migrate reset # DBリセット
```

### shadcn/uiの概要・インストール

https://ui.shadcn.com/

```bash
% npx shadcn@latest init
base color > Neutral
Use --force
% npx shadcn@latest add navigation-menu button input label alert dropdown-menu alert-dialog
Use --force # 各コンポーネントを src/components/ui にインストール。
```

### Header

https://ui.shadcn.com/docs/components/navigation-menu のUsage コピペ編集。

```bash
% mkdir src/components/layouts
% touch src/components/layouts/PublicHeader.tsx
```

### ヘッダー表示確認・不要ファイル削除

```bash
% cp src/app/layout.tsx src/app/\(public\)/layout.tsx
% rm src/app/page.tsx
% touch src/app/\(public\)/page.tsx
```

### 記事一覧の取得関数、Post型の作成など

```bash
% touch src/lib/post.ts
% npm i date-fns@^4 # 日付フォーマット
% npx shadcn@latest add card
% mkdir src/types
% touch src/types/post.ts
```

### 記事一覧向け カードコンポーネント

https://ui.shadcn.com/docs/components/card のUsage コピペ編集。

```bash
% mkdir src/components/post
% touch src/components/post/PostCard.tsx
```

### 画像最適化・記事一覧ページ

https://nextjs.org/docs/pages/api-reference/components/image

### 1記事の取得 準備

```bash
% mkdir src/app/\(public\)/posts/\[id\]
% touch src/app/\(public\)/posts/\[id\]/page.tsx
% touch src/app/\(public\)/posts/\[id\]/not-found.tsx
```




59. 記事詳細の表示
60. 記事検索機能 事前解説
61. 記事検索機能 クエリ・コンポーネント
62. 記事一覧ページで検索できるように対応する
63. このセクションのまとめ



