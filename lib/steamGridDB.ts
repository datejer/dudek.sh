const SGDB_PUBLIC_SEARCH_API_URL = "https://www.steamgriddb.com/api/public/search/main/games";

export const fetchGameIcon = async (gameName: string) => {
  let icon64URL: string | null = null;

  try {
    const response = await fetch(SGDB_PUBLIC_SEARCH_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        asset_type: "icon",
        term: gameName,
        offset: 0,
        filters: {
          styles: ["official"],
          dimensions: ["all"],
          type: ["all"],
          order: "score_desc",
        },
      }),
    });
    const json = await response.json();
    icon64URL = json.data.games[0].assets[0].extra_data["8"]["64"];
  } catch (error) {
    console.error(error);
  }

  return icon64URL;
};
