import { NextApiRequest, NextApiResponse } from "next";
import { getPins } from "../../lib/scrapePins";
import { fetchGameIcon } from "../../lib/steamGridDB";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { gameName } = req.query;

  if (!gameName || typeof gameName !== "string") {
    res.statusCode = 400;
    return res.json({ message: "Please input a game name!" });
  }

  try {
    const iconURL = await fetchGameIcon(gameName);

    // 2 weeks fresh, 31 days stale
    res.setHeader("Cache-Control", "public, s-maxage=1210000 stale-while-revalidate=2678400");
    res.statusCode = 200;
    res.json({ iconURL });
  } catch (e) {
    res.statusCode = 500;
    return res.json({ message: "An error occured." });
  }
}
