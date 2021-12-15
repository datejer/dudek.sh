import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import styles from "./Layout.module.scss";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Header />
				<main className={styles.main}>{children}</main>
				<Footer />
			</div>
		</div>
	);
}
