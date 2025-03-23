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

// 1記事の取得
export async function getPost(id: string) {
  return await prisma.post.findUnique({
    where: { id },
    include: { author: { select: { name: true } } },
  });
}

export async function searchPosts(search: string) {
  // 全角スペースを半角スペースに変換しつつスペースで分割 (空文字などを除外)
  const decodedSearch = decodeURIComponent(search);
  const normalizedSearch = decodedSearch.replace(/[\s ]+/g, " ").trim();
  const searchWords = normalizedSearch.split(" ").filter(Boolean);

  const filters = searchWords.map((word) => ({
    OR: [{ title: { contains: word } }, { content: { contains: word } }],
  }));

  return await prisma.post.findMany({
    where: { AND: filters },
    include: { author: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
  });
}
