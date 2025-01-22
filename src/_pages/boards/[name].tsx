import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import boards from "@/assets/data/boards.json";
import { slugify } from "@/lib/slugify";
import { BoardInfoPage } from "@/components/boards/BoardInfoPage/BoardInfoPage";

export type Board = typeof boards[number];

function Page(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BoardInfoPage {...props} />;
}

export async function getStaticPaths() {
  return {
    paths: [
      ...boards.map(({ name }) => {
        return { params: { name: slugify(name) } };
      }),
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  return {
    props: {
      ...(boards.find((board) => slugify(board.name) === params?.name) as Board),
    },
  };
}

export default Page;
