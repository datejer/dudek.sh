import Image from "next/legacy/image";
import Link from "next/link";
import { SEO } from "../../common/SEO";
import type { Board } from "../../../pages/boards/[name]";

import styles from "./BoardInfoPage.module.scss";

import ChevronLeft from "../../../assets/icons/arrow-left.svg";

export const BoardInfoPage = ({ name, description, image, info, gallery }: Board) => {
  return (
    <div className={styles.wrapper}>
      <SEO
        title={name}
        description={description}
        image={`https://dudek.sh/keyboards/${image}`}
        bigImage
      />
      <div className={styles.cover}>
        <Image
          alt={`Photo of ${name}`}
          src={require(`../../../public/keyboards/${image}`)}
          quality={100}
          placeholder="blur"
        />
      </div>
      <Link href="/boards" className={styles.back}>
        <span aria-hidden="true">
          <ChevronLeft />
        </span>
        back to /boards
      </Link>
      <article className={styles.article}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.info}>
          {info.map((line, i) => (
            <div key={i} className={styles.line} style={{ animationDelay: `${i * 100}ms` }}>
              {line}
            </div>
          ))}
        </p>
        {!!gallery && (
          <ul className={styles.gallery}>
            {gallery.map((photo, i) => (
              <li key={i} className={styles.photoWrapper}>
                <Image
                  alt={`Photo of ${name}`}
                  src={require(`../../../public/keyboards/${photo}`)}
                  quality={100}
                  placeholder="blur"
                  className={styles.photo}
                />
              </li>
            ))}
          </ul>
        )}
      </article>
    </div>
  );
};
