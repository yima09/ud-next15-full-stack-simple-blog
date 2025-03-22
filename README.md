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

