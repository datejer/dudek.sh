import * as cheerio from "cheerio";

export type Holiday = {
  date: string; // YYYY-MM-DD format
  name: string;
};

const fetchHolidaysPage = async (year: number): Promise<string> => {
  const url = `https://www.kalendarzswiat.pl/swieta/wolne_od_pracy/${year}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; HolidayScraper/1.0)",
      },
      // Next.js fetch should handle SSL properly, but adding cache for reliability
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch holidays for year ${year}: ${response.status} ${response.statusText}`,
      );
    }

    return response.text();
  } catch (error) {
    // Re-throw with more context
    if (error instanceof Error) {
      // Check if it's an SSL certificate error
      if (
        error.message.includes("certificate") ||
        error.message.includes("UNABLE_TO_VERIFY_LEAF_SIGNATURE") ||
        (error as any).code === "UNABLE_TO_VERIFY_LEAF_SIGNATURE"
      ) {
        throw new Error(
          `SSL certificate verification failed for year ${year}. This is likely a development environment issue. ` +
            `The code should work in production. Error: ${error.message}`,
          { cause: error },
        );
      }
      throw new Error(`Network error fetching holidays for year ${year}: ${error.message}`, {
        cause: error,
      });
    }
    throw error;
  }
};

const parseHolidays = (html: string, year: number): Holiday[] => {
  const $ = cheerio.load(html);
  const holidays: Holiday[] = [];

  // Find the holidays table inside the .cbox container
  // This is more specific than just "table" and avoids the summary table
  $(".cbox table.tab_easy tr").each((_, element) => {
    const $row = $(element);

    // Look for the data-date attribute in the first column
    const dateAttr = $row.find("td:first-child a[data-date]").attr("data-date");

    if (!dateAttr) {
      return; // Skip rows without date
    }

    // Get the holiday name from the second column
    const $nameCell = $row.find("td:nth-child(2)");
    let name = $nameCell.find("a").first().text().trim();

    // If no link, get text directly
    if (!name) {
      name = $nameCell.text().trim();
    }

    if (!name) {
      return; // Skip rows without name
    }

    // Parse the date attribute (format: "YYYY-M-D" where M and D are not zero-padded)
    // Examples: "2026-1-1", "2026-5-24", "2026-11-1", "2026-12-25"
    // Convert to YYYY-MM-DD format with zero-padding
    const dateParts = dateAttr.split("-");
    if (dateParts.length === 3) {
      const yearPart = dateParts[0];
      const monthPart = dateParts[1].padStart(2, "0");
      const dayPart = dateParts[2].padStart(2, "0");
      const formattedDate = `${yearPart}-${monthPart}-${dayPart}`;

      holidays.push({
        date: formattedDate,
        name: name,
      });
    }
  });

  return holidays;
};

export const getHolidays = async (year: number): Promise<Holiday[]> => {
  const html = await fetchHolidaysPage(year);
  return parseHolidays(html, year);
};
