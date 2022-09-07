import Image from "next/image";
import Link from "next/link";
import { SEO } from "../../common/SEO";
import type { Board } from "../../../pages/boards/[name]";

import styles from "./BoardInfoPage.module.scss";

import ChevronLeft from "../../../assets/icons/arrow-left.svg";

export const BoardInfoPage = ({ name, description, image, info, gallery }: Board) => {
  return (
    <div className={styles.wrapper}>
      <SEO title={name} description={description} image={`https://dudek.ga/keyboards/${image}`} />
      <div className={styles.cover}>
        <Image
          alt={`Photo of ${name}`}
          src={require(`../../../public/keyboards/${image}`)}
          quality={100}
          placeholder="blur"
        />
      </div>
      <Link href="/boards">
        <a className={styles.back}>
          <span aria-hidden="true">
            <ChevronLeft />
          </span>
          back to /boards
        </a>
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
