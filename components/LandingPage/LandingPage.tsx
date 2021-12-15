import Image from "next/image";
import SEO from "../SEO";

import styles from "./LandingPage.module.scss";

import me from "../../public/me.jpg";
import GitHub from "../../assets/icons/github.svg";
import Twitter from "../../assets/icons/twitter.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import At from "../../assets/icons/at.svg";

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
						also the Host of{" "}
						<a href="https://require.podcast.gq/" data-textlink="true">
							Require Podcast
						</a>
						.
					</p>
					<a
						href="https://github.com/datejer"
						className={`${styles.link} ${styles.gh}`}
					>
						<GitHub />
					</a>
					<a
						href="https://twitter.com/arturdudek_"
						className={`${styles.link} ${styles.tw}`}
					>
						<Twitter />
					</a>
					<a href="/linkedin" className={`${styles.link} ${styles.li}`}>
						<LinkedIn />
					</a>
					<a
						href="mailto:artur@dudek.ga"
						className={`${styles.link} ${styles.gh}`}
					>
						<At />
					</a>
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
