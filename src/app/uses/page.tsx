import { UsesItem } from "../../components/uses/UsesItem/UsesItem";

import styles from "./page.module.scss";

import uses from "../../assets/data/uses.json";
import { getMetadata } from "@/app/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata({
  title: "uses",
  description: "stuff i use.",
});

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>stuff i use.</h1>
      <p>
        Inspired by Wes Bos'{" "}
        <a href="https://uses.tech/" data-textlink="true">
          uses.tech
        </a>
      </p>

      <h2 className={styles.title}>physical.</h2>
      <ul className={styles.itemGrid}>
        {uses.physical.map((item, i) => (
          <li key={i} className={styles.itemWrapper}>
            <UsesItem item={item} />
          </li>
        ))}
      </ul>

      <h2 className={styles.title}>digital.</h2>
      <ul className={styles.itemGrid}>
        {uses.digital.map((item, i) => (
          <li key={i} className={styles.itemWrapper}>
            <UsesItem item={item} />
          </li>
        ))}
      </ul>

      <h2 className={styles.title}>dotfiles.</h2>
      <p>
        You can find all my preferred configuration files right{" "}
        <a href="https://github.com/datejer/dotfiles" data-textlink="true">
          <span data-visually-hidden>My dotfiles GitHub repository</span>
          <span aria-hidden="true">here</span>
        </a>
        . This includes more detailed information and settings for software i use.
      </p>
    </div>
  );
}
