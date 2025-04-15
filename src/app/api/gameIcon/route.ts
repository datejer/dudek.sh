import { NextRequest, NextResponse } from "next/server";
import { fetchGameIcon } from "@/lib/steamGridDB";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const gameName = searchParams.get("gameName");

  if (!gameName || typeof gameName !== "string") {
    return NextResponse.json({ message: "Please input a game name!" }, { status: 400 });
  }

  try {
    const iconURL = await fetchGameIcon(gameName);

    // 2 weeks fresh, 31 days stale
    return NextResponse.json(
      { iconURL },
      {
        status: 200,
        headers: { "Cache-Control": "public, s-maxage=1210000 stale-while-revalidate=2678400" },
      },
    );
  } catch {
    return NextResponse.json({ message: "An error occured." }, { status: 500 });
  }
}
