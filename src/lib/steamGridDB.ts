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
    const anyFirstExtraDataEntry = Object.values(json.data.games[0].assets[0].extra_data)[0] as any;
    const lastLargestIcon = Object.keys(anyFirstExtraDataEntry).reverse()[0];
    const icon64orAnyLastLargestEntry = anyFirstExtraDataEntry["64"] ?? lastLargestIcon;
    icon64URL = icon64orAnyLastLargestEntry;
  } catch (error) {
    console.error(error);
  }

  return icon64URL;
};
