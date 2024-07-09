import Image from "next/legacy/image";
import clsx from "clsx";
import { SEO } from "../../common/SEO";
import { Status } from "../Status/Status";

import styles from "./LandingPage.module.scss";

import me from "../../../public/me.jpg";
import GitHub from "../../../assets/icons/logos/github.svg";
import Twitter from "../../../assets/icons/logos/twitter.svg";
import LinkedIn from "../../../assets/icons/logos/linkedin.svg";
import At from "../../../assets/icons/at.svg";

import thatsme from "../../../public/thatsme.png";
import thatsmeleft from "../../../public/thatsmeleft.png";
import { getCurrentAge, getIndefiniteArticle } from "../../../lib/age";

export const LandingPage = () => {
  const age = getCurrentAge("2005-05-16");

  return (
    <div>
      <SEO />
      <div className={styles.hero}>
        <div>
          <h1 className={styles.name}>artur dudek</h1>
          <p className={styles.position}>frontend dev @ appunite</p>
          <p>
            Hello 👋! <br />
            My name is Artur and I'm {getIndefiniteArticle(age)} {age} year old web developer from
            Poland 🇵🇱. I&nbsp;mostly code in TypeScript and React but I've dabbled in just about
            everything. I&nbsp;work as a Frontend Developer at{" "}
            <a href="https://appunite.com" data-textlink="true">
              Appunite
            </a>
            . In my free time I host{" "}
            <a href="https://require.pl/" data-textlink="true">
              Require Podcast
            </a>{" "}
            together with my friend.
          </p>
          <a href="/github" className={clsx(styles.link, styles.gh)}>
            <span data-visually-hidden>My GitHub Profile</span>
            <span aria-hidden="true">
              <GitHub />
            </span>
          </a>
          <a href="/twitter" className={clsx(styles.link, styles.tw)}>
            <span data-visually-hidden>My Twitter Profile</span>
            <span aria-hidden="true">
              <Twitter />
            </span>
          </a>
          <a href="/linkedin" className={clsx(styles.link, styles.li)}>
            <span data-visually-hidden>My LinkedIn Profile</span>
            <span aria-hidden="true">
              <LinkedIn />
            </span>
          </a>
          <a href="mailto:artur@dudek.sh" className={clsx(styles.link, styles.gh)}>
            <span data-visually-hidden>Send me an email!</span>
            <span aria-hidden="true">
              <At />
            </span>
          </a>
        </div>
        <div className={styles.picture}>
          <div className={styles.pictureWrapper}>
            <Image
              src={me}
              alt="Blurry face of Artur Dudek"
              width={128}
              height={128}
              priority
              placeholder="blur"
              layout="fixed"
              className={styles.img}
            />
            <Status />
          </div>
          <div className={styles.thatsme}>
            <Image
              src={thatsme}
              alt="that's me"
              width={185}
              height={105}
              priority
              placeholder="blur"
              layout="fixed"
            />
          </div>
          <div className={styles.thatsmeleft}>
            <Image
              src={thatsmeleft}
              alt="that's me"
              width={158}
              height={111}
              priority
              placeholder="blur"
              layout="fixed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
