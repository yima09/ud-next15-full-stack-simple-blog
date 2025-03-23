import { prisma } from "@/lib/prisma";

// 記事一覧の取得
export async function getPosts() {
  // prisma.対象テーブル名.メソッド
  return await prisma.post.findMany({
    // where 条件 include リレーション(別テーブル) select 表示列
    where: { published: true },
    include: { author: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
  });
}
