import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      copyright &copy; {new Date().getFullYear()} artur dudek.
    </footer>
  );
};
