import { slugify } from "@/lib/slugify";
import { SEO } from "@/components/common/SEO";
import { BoardPreview } from "@/components/boards/BoardPreview/BoardPreview";

import styles from "./BoardsPage.module.scss";

import boards from "@/assets/data/boards.json";
import { useRouter } from "next/router";

export const BoardsPage = () => {
  const { asPath } = useRouter();

  return (
    <div>
      <SEO
        title="boards"
        description="keyboards i use."
        image={`https://dudek.sh/keyboards/${boards[0].image}`}
      />
      <h1 className={styles.title}>keyboards i use.</h1>

      <ul className={styles.list}>
        {boards.map(({ name, description, image }, i) => (
          <li key={i}>
            <BoardPreview
              title={name}
              description={description}
              image={require(`@/../public/keyboards/${image}`)}
              url={`${asPath}/${slugify(name)}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
