import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useTheme } from 'next-themes';

const Tilty = dynamic(() => import('react-tilty'), { ssr: false });

import styles from './PinnedRepos.module.scss';

export default function PinnedRepos() {
	const [pinned, setPinned] = useState(new Array(6).fill({}));
	const { theme } = useTheme();
	const [currentTheme, setCurrentTheme] = useState('dark');

	useEffect(() => {
		fetch('/api/pinned?username=datejer')
			.then(res => res.json())
			.then(data => setPinned(data));
	}, []);

	useEffect(() => {
		setCurrentTheme(theme);
	}, [theme]);

	return (
		<div className={styles.pinned}>
			<SkeletonTheme
				baseColor={currentTheme === 'dark' ? '#202020' : ''}
				highlightColor={currentTheme === 'dark' ? '#444' : ''}
			>
				{pinned.map((repo, index) => (
					<div key={repo.repo || index} className={styles.repoWrapper}>
						<Tilty
							style={{ height: '100%', borderRadius: '0.75rem' }}
							gyroscope={false}
						>
							<a href={repo.link}>
								<div
									className={styles.repo}
									style={{ borderColor: repo.color }}
								>
									<h2 className={styles.repoName}>
										{repo.repo ? `${repo.owner}/${repo.repo}` : <Skeleton />}
									</h2>

									<p className={styles.repoDescription}>
										{repo.description || <Skeleton count={2} />}
									</p>
									<div className={styles.repoStats}>
										<div>
											⭐{' '}
											{repo.stars || (
												<span style={{ fontFamily: 'NorumIpnum' }}>
													{Math.floor(Math.random() * 99)}
												</span>
											)}
										</div>
										<div>
											🍴{' '}
											{repo.forks || (
												<span style={{ fontFamily: 'NorumIpnum' }}>
													{Math.floor(Math.random() * 99)}
												</span>
											)}
										</div>
									</div>
								</div>
							</a>
						</Tilty>
					</div>
				))}
			</SkeletonTheme>
		</div>
	);
}
