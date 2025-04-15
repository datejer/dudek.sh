import { NextResponse, type NextRequest } from "next/server";
import { getPins } from "@/lib/scrapePins";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get("username");

  if (!username || typeof username !== "string") {
    return NextResponse.json({ message: "Please input a username!" }, { status: 400 });
  }

  try {
    const pinned = await getPins(username as string);

    return NextResponse.json(pinned, {
      status: 200,
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120" },
    });
  } catch {
    return NextResponse.json({ message: "An error occured." }, { status: 500 });
  }
}
