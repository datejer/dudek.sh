import SEO from '../SEO';
import PinnedRepos from '../PinnedRepos/PinnedRepos';
import Technologies from '../Technologies/Technologies';

import styles from './StuffPage.module.scss';

import Require from '../../assets/icons/require.svg';

export default function StuffPage() {
	return (
		<div>
			<SEO title="stuff" description="stuff i made" />
			<a href="https://require.podcast.gq">
				<div className={styles.project} style={{ borderColor: '#ff5370' }}>
					<div>
						<h2 className={styles.projectName}>Require Podcast</h2>
						<p className={styles.projectDesc}>
							Polski podcast na temat JavaScriptu i nie tylko. "Na luzie" o
							technologiach frontendowych, przez nowości ze świata IT, po
							frameworki na backendzie!
						</p>
					</div>
					<div>
						<Require />
					</div>
				</div>
			</a>
			<div>
				<h1 className={styles.title}>stuff i made.</h1>
				<PinnedRepos />
			</div>
			<div>
				<h1 className={styles.title}>stuff i know.</h1>
				<Technologies />
			</div>
		</div>
	);
}
