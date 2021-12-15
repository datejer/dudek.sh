import SEO from "../SEO";

import styles from "./UsesPage.module.scss";

export default function UsesPage() {
	return (
		<div>
			<SEO title="uses" description="stuff i use" />
			<h1 className={styles.title}>stuff i use.</h1>
			<p>
				Inspired by Wes Bos'{" "}
				<a href="https://uses.tech/" data-textlink="true">
					uses.tech
				</a>
			</p>

			<h2 className={styles.title}>physical.</h2>
			<div className={styles.itemGrid}>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<div>
							🧠
							<h3>CPU</h3>
						</div>
						<p>Ryzen 7 3700X @3.6 GHz</p>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<div>
							🎨
							<h3>GPU</h3>
						</div>
						<p>Gigabyte RTX 2060 OC</p>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<div>
							📚
							<h3>RAM</h3>
						</div>
						<p>2x8GB Crucial Ballistix DDR4 @3200 MHz</p>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<div>
							📔
							<h3>Storage</h3>
						</div>
						<p>Samsung 970 EVO Plus 500GB; Seagate Barracuda 2TB</p>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<div>
							📺
							<h3>Monitor</h3>
						</div>
						<p>Samsung Odyssey G5</p>
					</div>
				</div>
			</div>
			<div className={styles.itemGrid}>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<div>
							💻
							<h3>Hyperbook N14S</h3>
						</div>
						<p>School & Code; i7-10510U; 16GB; 1TB</p>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<div>
							📱
							<h3> Huawei P10</h3>
						</div>
						<p>Android 9; 2x64GB</p>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<div>
							🎧
							<h3>JBL Tune 500BT</h3>
						</div>
						<p>Black</p>
					</div>
				</div>
			</div>

			<h2 className={styles.title}>digital.</h2>
			<div className={styles.itemGrid}>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<div>
							📝
							<h3>Visual Studio Code</h3>
						</div>
						<p>Synthwave '84</p>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<div>
							🧮
							<h3>Windows Terminal</h3>
						</div>
						<p>PowerShell; Ubuntu colors; posh-git</p>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<div>
							🌐
							<h3>Google Chrome</h3>
						</div>
						<p>I look at cats</p>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<div>
							▲<h3>Vercel</h3>
						</div>
						<p>Deploying apps (including this one)</p>
					</div>
				</div>
			</div>
		</div>
	);
}
