import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import styles from "./Layout.module.scss";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <div className={styles.mainWrapper}>
          <main className={styles.main}>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};
