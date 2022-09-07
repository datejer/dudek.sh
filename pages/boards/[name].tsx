import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import boards from "../../assets/data/boards.json";
import { BoardInfoPage } from "../../components/boards/BoardInfoPage/BoardInfoPage";
import { slugify } from "../../lib/slugify";

export type Board = typeof boards.data[number];

function Page(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BoardInfoPage {...props} />;
}

export async function getStaticPaths() {
  return {
    paths: [
      ...boards.data.map(({ name }) => {
        return { params: { name: slugify(name) } };
      }),
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  return {
    props: {
      ...(boards.data.find((board) => slugify(board.name) === params?.name) as Board),
    },
  };
}

export default Page;
