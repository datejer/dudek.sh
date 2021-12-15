import clsx from "clsx";

import styles from "./Technologies.module.scss";

import JavaScript from "../../assets/icons/javascript.svg";
import Node from "../../assets/icons/nodedotjs.svg";
import React from "../../assets/icons/react.svg";
import Next from "../../assets/icons/nextdotjs.svg";
import Gatsby from "../../assets/icons/gatsby.svg";
import Sass from "../../assets/icons/sass.svg";
import MongoDB from "../../assets/icons/mongodb.svg";
import Discord from "../../assets/icons/discord.svg";

export function Technologies() {
	return (
		<div className={styles.technologies}>
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
				className={clsx(styles.tech, styles.js)}
			>
				<span data-visually-hidden>JavaScript</span>
				<span aria-hidden="true">
					<JavaScript />
				</span>
			</a>
			<a href="https://nodejs.org/" className={clsx(styles.tech, styles.node)}>
				<span data-visually-hidden>Node.js</span>
				<span aria-hidden="true">
					<Node />
				</span>
			</a>
			<a
				href="https://reactjs.org/"
				className={clsx(styles.tech, styles.react)}
			>
				<span data-visually-hidden>React.js</span>
				<span aria-hidden="true">
					<React />
				</span>
			</a>
			<a href="https://nextjs.org/" className={clsx(styles.tech, styles.next)}>
				<span data-visually-hidden>Next.js</span>
				<span aria-hidden="true">
					<Next />
				</span>
			</a>
			<a
				href="https://gatsbyjs.org/"
				className={clsx(styles.tech, styles.gatsby)}
			>
				<span data-visually-hidden>Gatsby.js</span>
				<span aria-hidden="true">
					<Gatsby />
				</span>
			</a>
			<a
				href="https://sass-lang.com/"
				className={clsx(styles.tech, styles.sass)}
			>
				<span data-visually-hidden>Sass and SCSS</span>
				<span aria-hidden="true">
					<Sass />
				</span>
			</a>
			<a
				href="https://www.mongodb.com/"
				className={clsx(styles.tech, styles.mongo)}
			>
				<span data-visually-hidden>MongoDB</span>
				<span aria-hidden="true">
					<MongoDB />
				</span>
			</a>
			<a
				href="https://discord.js.org/"
				className={clsx(styles.tech, styles.discord)}
			>
				<span data-visually-hidden>Discord.js</span>
				<span aria-hidden="true">
					<Discord />
				</span>
			</a>
		</div>
	);
}
