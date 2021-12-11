import SEO from '../SEO';
import PinnedRepos from '../PinnedRepos/PinnedRepos';

import styles from './StuffPage.module.scss';

export default function StuffPage() {
	return (
		<div>
			<SEO title="stuff" description="stuff i made" />
			<div>
				<h1 className={styles.title}>stuff i made.</h1>
				<PinnedRepos />
			</div>
		</div>
	);
}
