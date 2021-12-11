import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	);
}
