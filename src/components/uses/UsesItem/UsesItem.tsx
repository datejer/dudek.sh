import Link from "next/link";

import styles from "./UsesItem.module.scss";

import uses from "../../../assets/data/uses.json";

const Item = ({ item }: { item: UsesItem }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemTitleWrapper}>
        <span aria-hidden="true">{item.icon}</span>
        <h3 className={styles.itemTitle}>{item.title}</h3>
      </div>
      <p className={styles.itemDesc}>{item.description}</p>
    </div>
  );
};

const ItemWithLink = ({ item }: { item: UsesItem }) => {
  return (
    <Link href={item.url || ""}>
      <Item item={item} />
    </Link>
  );
};

export type UsesItem = (typeof uses.physical)[number] & (typeof uses.digital)[number];

export const UsesItem = ({ item }: { item: UsesItem }) => {
  if (item.url) {
    return <ItemWithLink item={item} />;
  }

  return <Item item={item} />;
};
