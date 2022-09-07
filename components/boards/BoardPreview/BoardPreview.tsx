import Image from "next/image";
import Link from "next/link";

import styles from "./BoardPreview.module.scss";

type BoardPreview = {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
};

export const BoardPreview = ({ title, description, image, url }: BoardPreview) => {
  return (
    <Link href={url}>
      <a>
        <div className={styles.board}>
          <div className={styles.background}>
            <Image
              alt={title}
              src={image}
              layout="fill"
              objectFit="cover"
              quality={100}
              placeholder="blur"
              className={styles.image}
            />
          </div>
          <div className={styles.summary}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.description}>{description}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
};
