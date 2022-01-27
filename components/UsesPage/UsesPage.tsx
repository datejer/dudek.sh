import { SEO } from "../SEO";

import styles from "./UsesPage.module.scss";

export function UsesPage() {
  return (
    <div>
      <SEO title="uses" description="stuff i use." />
      <h1 className={styles.title}>stuff i use.</h1>
      <p>
        Inspired by Wes Bos'{" "}
        <a href="https://uses.tech/" data-textlink="true">
          uses.tech
        </a>
      </p>

      <h2 className={styles.title}>physical.</h2>
      <ul className={styles.itemGrid}>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">🧠</span>
              <h3 className={styles.itemTitle}>CPU</h3>
            </div>
            <p className={styles.itemDesc}>Ryzen 7 3700X @3.6 GHz</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">🎨</span>
              <h3 className={styles.itemTitle}>GPU</h3>
            </div>
            <p className={styles.itemDesc}>Gigabyte RTX 2060 OC</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">🧩</span>
              <h3 className={styles.itemTitle}>Motherboard</h3>
            </div>
            <p className={styles.itemDesc}>Gigabyte B450 AORUS ELITE V2</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">📚</span>
              <h3 className={styles.itemTitle}>RAM</h3>
            </div>
            <p className={styles.itemDesc}>2x8GB Crucial Ballistix DDR4 @3200 MHz</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">📔</span>
              <h3 className={styles.itemTitle}>Storage</h3>
            </div>
            <p className={styles.itemDesc}>Samsung 970 EVO Plus 500GB; Seagate Barracuda 2TB</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">📺</span>
              <h3 className={styles.itemTitle}>Monitor</h3>
            </div>
            <p className={styles.itemDesc}>Samsung Odyssey G5</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">🐭</span>
              <h3 className={styles.itemTitle}>Mouse</h3>
            </div>
            <p className={styles.itemDesc}>Roccat Kain 100 AIMO; HP Z3700 (laptop)</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">💻</span>
              <h3 className={styles.itemTitle}>Hyperbook N14S</h3>
            </div>
            <p className={styles.itemDesc}>School & Code; i7-10510U; 16GB; 1TB</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">📱</span>
              <h3 className={styles.itemTitle}> Huawei P10</h3>
            </div>
            <p className={styles.itemDesc}>Android 9; 2x64GB</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">🎧</span>
              <h3 className={styles.itemTitle}>JBL Tune 500BT</h3>
            </div>
            <p className={styles.itemDesc}>Black</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">⌚</span>
              <h3 className={styles.itemTitle}>Xiaomi Amazfit Bip</h3>
            </div>
            <p className={styles.itemDesc}>Black</p>
          </div>
        </li>
      </ul>

      <h2 className={styles.title}>digital.</h2>
      <ul className={styles.itemGrid}>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">📝</span>
              <h3 className={styles.itemTitle}>Visual Studio Code</h3>
            </div>
            <p className={styles.itemDesc}>
              Synthwave '84, Material Icon Theme, JetBrains Mono (13, ligatures)
            </p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">🧮</span>
              <h3 className={styles.itemTitle}>Windows Terminal</h3>
            </div>
            <p className={styles.itemDesc}>PowerShell; posh-git; Ubuntu colors and prompt</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">🌐</span>
              <h3 className={styles.itemTitle}>Google Chrome</h3>
            </div>
            <p className={styles.itemDesc}>I look at cats</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">▲</span>
              <h3 className={styles.itemTitle}>Vercel</h3>
            </div>
            <p className={styles.itemDesc}>Deploying apps (including this one)</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">📓</span>
              <h3 className={styles.itemTitle}>Notion</h3>
            </div>
            <p className={styles.itemDesc}>School, personal and podcast notes</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">🌋</span>
              <h3 className={styles.itemTitle}>paint.net</h3>
            </div>
            <p className={styles.itemDesc}>Favorite IMP</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">🎬</span>
              <h3 className={styles.itemTitle}>Adobe CC</h3>
            </div>
            <p className={styles.itemDesc}>Photoshop; Premiere Pro; Audition</p>
          </div>
        </li>
        <li className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitleWrapper}>
              <span aria-hidden="true">☕</span>
              <h3 className={styles.itemTitle}>IntelliJ IDEA</h3>
            </div>
            <p className={styles.itemDesc}>Kotlin / Java (mainly Minecraft)</p>
          </div>
        </li>
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
