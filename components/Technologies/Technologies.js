import styles from './Technologies.module.scss';

import JavaScript from '../../assets/icons/javascript.svg';
import Node from '../../assets/icons/nodedotjs.svg';
import React from '../../assets/icons/react.svg';
import Next from '../../assets/icons/nextdotjs.svg';
import Gatsby from '../../assets/icons/gatsby.svg';
import Sass from '../../assets/icons/sass.svg';
import MongoDB from '../../assets/icons/mongodb.svg';
import Discord from '../../assets/icons/discord.svg';

export default function Technologies() {
	return (
		<div className={styles.technologies}>
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
				target="_blank"
				className={`${styles.tech} ${styles.js}`}
			>
				<JavaScript />
			</a>
			<a
				href="https://nodejs.org/"
				target="_blank"
				className={`${styles.tech} ${styles.node}`}
			>
				<Node />
			</a>
			<a
				href="https://reactjs.org/"
				target="_blank"
				className={`${styles.tech} ${styles.react}`}
			>
				<React />
			</a>
			<a
				href="https://nextjs.org/"
				target="_blank"
				className={`${styles.tech} ${styles.next}`}
			>
				<Next />
			</a>
			<a
				href="https://gatsbyjs.org/"
				target="_blank"
				className={`${styles.tech} ${styles.gatsby}`}
			>
				<Gatsby />
			</a>
			<a
				href="https://sass-lang.com/"
				target="_blank"
				className={`${styles.tech} ${styles.sass}`}
			>
				<Sass />
			</a>
			<a
				href="https://www.mongodb.com/"
				target="_blank"
				className={`${styles.tech} ${styles.mongo}`}
			>
				<MongoDB />
			</a>
			<a
				href="https://discord.js.org/"
				target="_blank"
				className={`${styles.tech} ${styles.discord}`}
			>
				<Discord />
			</a>
		</div>
	);
}
