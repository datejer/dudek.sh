import * as cheerio from 'cheerio';

export default async function handler(req, res) {
	if (!req.query.username) {
		res.statusCode = 400;
		return res.json({ message: 'Please input a username!' });
	}

	try {
		await fetch(`https://github.com/${req.query.username}`)
			.then(res => res.text())
			.then(data => {
				const $ = cheerio.load(data);
				let pinned = [];
				$('.js-pinned-items-reorder-list')
					.find('.pinned-item-list-item')
					.each((index, element) => {
						const owner =
							$(element).find('.owner').text() || req.query.username;
						const repo = $(element).find('.repo').text() || undefined;
						const description =
							$(element).find('.pinned-item-desc').text().trim() || undefined;
						const language =
							$(element).find('[itemprop="programmingLanguage"]').text() ||
							undefined;
						const color =
							$(element).find('.repo-language-color').css('background-color') ||
							undefined;
						const stars =
							$(element).find('a[href$="/stargazers"]').text().trim() || 0;
						const forks =
							$(element).find('a[href$="/network/members"]').text().trim() || 0;

						pinned[index] = {
							owner,
							repo,
							link: `https://github.com/${owner}/${repo}`,
							description,
							language,
							color,
							stars,
							forks,
						};
					});

				res.setHeader(
					'Cache-Control',
					'public, s-maxage=60, stale-while-revalidate=120'
				);
				res.statusCode = 200;
				res.json(pinned);
			});
	} catch (e) {
		console.log(e);
		res.statusCode = 500;
		return res.json({ message: 'An error occured!' });
	}
}
