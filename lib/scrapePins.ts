import * as cheerio from "cheerio";

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

const URL = "https://github.com/";

const fetchPins = async (username: string) => {
  const response = await fetch(URL + username);
  const text = await response.text();
  return text;
};

const parsePins = (html: string, username: string) => {
  const $ = cheerio.load(html);

  let pinned: Repository[] = [];

  $(".js-pinned-items-reorder-list")
    .find(".pinned-item-list-item")
    .each((index, element) => {
      const owner = $(element).find(".owner").text().replace(/\//g, "") || (username as string);
      const repo = $(element).find(".repo").text() || "";
      const description = $(element).find(".pinned-item-desc").text().trim() || "";
      const language = $(element).find('[itemprop="programmingLanguage"]').text() || "";
      const color = $(element).find(".repo-language-color").css("background-color") || "";
      const stars = parseInt($(element).find('a[href$="/stargazers"]').text().trim()) || 0;
      const forks = parseInt($(element).find('a[href$="/network/members"]').text().trim()) || 0;

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

  return pinned;
};

const getPins = async (username: string) => {
  const html = await fetchPins(username);
  const pinned = parsePins(html, username);
  return pinned;
};

export { URL, fetchPins, parsePins, getPins };
