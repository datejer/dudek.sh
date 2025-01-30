import { slugify } from "@/lib/slugify";
import { BoardPreview } from "@/components/boards/BoardPreview/BoardPreview";

import styles from "./page.module.scss";

import boards from "@/assets/data/boards.json";
import { getMetadata } from "@/app/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata({
  title: "boards",
  description: "keyboards i use.",
  image: `https://dudek.sh/keyboards/${boards[0].image}`,
});

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>keyboards i use.</h1>

      <ul className={styles.list}>
        {boards.map(({ name, description, image }, i) => (
          <li key={i}>
            <BoardPreview
              title={name}
              description={description}
              image={require(`@/../public/keyboards/${image}`)}
              url={`/boards/${slugify(name)}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
