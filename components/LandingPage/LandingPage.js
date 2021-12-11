import Image from 'next/image';
import SEO from '../SEO';

import styles from './LandingPage.module.scss';
import me from '../../public/me.jpg';

export default function LandingPage() {
	return (
		<div>
			<SEO />
			<div className={styles.hero}>
				<div>
					<h1 className={styles.name}>artur dudek</h1>
					<h2 className={styles.position}>full stack dev</h2>
					<p>
						Hello 👋! <br />
						I'm a 16 year old web developer from Poland 🇵🇱. I'm currently
						studying at a High School, and enjoy making websites in React! I'm
						also the Host of{' '}
						<a href="https://require.podcast.gq/" textlink="true">
							Require Podcast
						</a>
						.
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src={me}
						alt="picture of my face."
						width={128}
						height={128}
						priority
						placeholder="blur"
						layout="fixed"
						className={styles.img}
					/>
				</div>
			</div>
		</div>
	);
}
