import boards from "@/assets/data/boards.json";
import { slugify } from "@/lib/slugify";
import { BoardInfoPage } from "@/components/boards/BoardInfoPage/BoardInfoPage";
import { notFound } from "next/navigation";
import { getMetadata } from "@/app/metadata";

export type Board = typeof boards[number];

export async function generateStaticParams() {
  return boards.map(({ name }) => {
    return { name: slugify(name) };
  });
}

export async function generateMetadata({ params }: { params: { name: string } }) {
  const board = boards.find((board) => slugify(board.name) === params?.name);

  return getMetadata({
    title: board?.name,
    description: board?.description,
    image: `https://dudek.sh/keyboards/${board?.image}`,
    bigImage: true,
  });
}

export default function Page({ params }: { params: { name: string } }) {
  const board = boards.find((board) => slugify(board.name) === params?.name);

  if (!board) {
    return notFound();
  }

  return <BoardInfoPage {...board} />;
}
