import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Button from '../Button/Button';

import styles from './Header.module.scss';

export default function Header() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	return (
		<nav className={styles.container}>
			<div className={styles.left}>
				<Link href="/" passHref>
					<Button>/</Button>
				</Link>
				<Link href="/stuff">
					<Button>/stuff</Button>
				</Link>
				<Link href="/uses">
					<Button>/uses</Button>
				</Link>
			</div>
			<div className={styles.right}>
				{mounted ? (
					<Button
						style={{ padding: '0.5rem' }}
						onClick={() =>
							theme === 'dark' ? setTheme('light') : setTheme('dark')
						}
					>
						{theme === 'dark' ? '🌞' : '🌙'}
					</Button>
				) : (
					<Button style={{ padding: '0.5rem' }}>🌙</Button>
				)}
			</div>
		</nav>
	);
}
