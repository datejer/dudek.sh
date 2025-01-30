"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./BoardInfoPage.module.scss";

import { ArrowLeft } from "@/assets/icons/ArrowLeft";
import { Board } from "@/app/boards/[name]/page";

export const BoardInfoPage = ({ name, description, image, info, gallery }: Board) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cover}>
        <Image
          alt={`Photo of ${name}`}
          src={require(`@/../public/keyboards/${image}`)}
          quality={100}
          placeholder="blur"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <Link href="/boards" className={styles.back}>
        <span aria-hidden="true">
          <ArrowLeft />
        </span>
        back to /boards
      </Link>
      <article className={styles.article}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.info}>
          {info.map((line, i) => (
            <span key={i} className={styles.line} style={{ animationDelay: `${i * 100}ms` }}>
              {line}
            </span>
          ))}
        </p>
        {!!gallery && (
          <ul className={styles.gallery}>
            {gallery.map((photo, i) => (
              <li key={i} className={styles.photoWrapper}>
                <Image
                  alt={`Photo of ${name}`}
                  src={require(`@/../public/keyboards/${photo}`)}
                  quality={100}
                  placeholder="blur"
                  className={styles.photo}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </article>
    </div>
  );
};
