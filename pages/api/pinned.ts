import * as cheerio from "cheerio";
import { NextApiRequest, NextApiResponse } from "next";

type Repository = {
	owner: string;
	repo: string;
	link: string;
	description: string;
	language: string;
	color: string;
	stars: number;
	forks: number;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { username } = req.query;

	if (!username || typeof username !== "string") {
		res.statusCode = 400;
		return res.json({ message: "Please input a username!" });
	}

	try {
		await fetch(`https://github.com/${username}`)
			.then((res) => res.text())
			.then((data) => {
				const $ = cheerio.load(data);

				let pinned: Repository[] = [];

				$(".js-pinned-items-reorder-list")
					.find(".pinned-item-list-item")
					.each((index, element) => {
						const owner =
							$(element).find(".owner").text() || (username as string);
						const repo = $(element).find(".repo").text() || "";
						const description =
							$(element).find(".pinned-item-desc").text().trim() || "";
						const language =
							$(element).find('[itemprop="programmingLanguage"]').text() || "";
						const color =
							$(element).find(".repo-language-color").css("background-color") ||
							"";
						const stars =
							parseInt(
								$(element).find('a[href$="/stargazers"]').text().trim()
							) || 0;
						const forks =
							parseInt(
								$(element).find('a[href$="/network/members"]').text().trim()
							) || 0;

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
					"Cache-Control",
					"public, s-maxage=60, stale-while-revalidate=120"
				);
				res.statusCode = 200;
				res.json(pinned);
			});
	} catch (e) {
		res.statusCode = 500;
		return res.json({ message: "An error occured!" });
	}
}
