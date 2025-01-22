import { NextApiRequest, NextApiResponse } from "next";
import { getPins } from "../../lib/scrapePins";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;

  if (!username || typeof username !== "string") {
    res.statusCode = 400;
    return res.json({ message: "Please input a username!" });
  }

  try {
    const pinned = await getPins(username as string);

    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=120");
    res.statusCode = 200;
    res.json(pinned);
  } catch (e) {
    res.statusCode = 500;
    return res.json({ message: "An error occured." });
  }
}
