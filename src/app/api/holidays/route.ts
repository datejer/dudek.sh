import { NextRequest, NextResponse } from "next/server";
import { getHolidays, type Holiday } from "@/lib/scrapeHolidays";
import { generateICS } from "@/lib/generateICS";

// Cache configuration constants
const SECONDS_IN_DAY = 86400;
const SECONDS_IN_MONTH = 30 * SECONDS_IN_DAY; // 2,592,000 seconds
const SECONDS_IN_WEEK = 7 * SECONDS_IN_DAY; // 604,800 seconds

// Cache headers configuration
const CACHE_MAX_AGE = SECONDS_IN_DAY; // 1 day for browsers
const CACHE_S_MAXAGE = SECONDS_IN_MONTH; // 1 month for edge cache
const CACHE_STALE_WHILE_REVALIDATE = SECONDS_IN_WEEK; // 1 week stale-while-revalidate

// Month constants (1-indexed)
const MONTHS = {
  JANUARY: 1,
  FEBRUARY: 2,
  MARCH: 3,
  APRIL: 4,
  MAY: 5,
  JUNE: 6,
  JULY: 7,
  AUGUST: 8,
  SEPTEMBER: 9,
  OCTOBER: 10,
  NOVEMBER: 11,
  DECEMBER: 12,
} as const;

// We fetch next year's holidays when we're 1 month away from the new year
const MONTH_TO_START_FETCHING_NEXT_YEAR = MONTHS.NOVEMBER;

/**
 * Gets the current date information
 */
const getCurrentDateInfo = () => {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1, // Convert from 0-indexed to 1-indexed
  };
};

/**
 * Determines which years to fetch based on current date
 * If we're in November or December, also fetch next year's holidays
 * This ensures we have next year's data ready before the year transition
 */
const getYearsToFetch = (): number[] => {
  const { year, month } = getCurrentDateInfo();
  const years: number[] = [year];

  // If we're 1 month or less away from the new year, also fetch next year
  if (month >= MONTH_TO_START_FETCHING_NEXT_YEAR) {
    years.push(year + 1);
  }

  return years;
};

/**
 * Fetches holidays for a single year
 * Throws error if fetch fails (to preserve error context)
 */
const fetchHolidaysForYear = async (year: number): Promise<Holiday[]> => {
  return await getHolidays(year);
};

/**
 * Fetches holidays for multiple years, ensuring current year is always included
 */
const fetchHolidaysForYears = async (years: number[]): Promise<Holiday[]> => {
  const currentYear = getCurrentDateInfo().year;
  const allHolidays: Holiday[] = [];

  for (const year of years) {
    try {
      const holidays = await fetchHolidaysForYear(year);
      allHolidays.push(...holidays);
    } catch (error) {
      // If current year fails to fetch, re-throw the error
      if (year === currentYear) {
        throw error;
      }
      // For next year, log but continue (it might not be available yet)
      console.error(`Failed to fetch holidays for year ${year} (non-critical):`, error);
    }
  }

  return allHolidays;
};

/**
 * Sorts holidays by date in ascending order
 */
const sortHolidaysByDate = (holidays: Holiday[]): Holiday[] => {
  return [...holidays].sort((a, b) => a.date.localeCompare(b.date));
};

/**
 * Builds cache control header value
 */
const buildCacheControlHeader = (): string => {
  return `public, max-age=${CACHE_MAX_AGE}, s-maxage=${CACHE_S_MAXAGE}, stale-while-revalidate=${CACHE_STALE_WHILE_REVALIDATE}`;
};

/**
 * Builds response headers for ICS file
 */
const buildICSHeaders = (year: number) => {
  return {
    "Content-Type": "text/calendar; charset=utf-8",
    "Content-Disposition": `attachment; filename="polish-holidays-${year}.ics"`,
    "Cache-Control": buildCacheControlHeader(),
  };
};

/**
 * Creates a successful ICS response
 */
const createICSSuccessResponse = (holidays: Holiday[], year: number): NextResponse => {
  const icsContent = generateICS(holidays);
  return new NextResponse(icsContent, {
    status: 200,
    headers: buildICSHeaders(year),
  });
};

/**
 * Creates an error response
 */
const createErrorResponse = (message: string, status: number = 500): NextResponse => {
  return NextResponse.json({ message }, { status });
};

export async function GET(request: NextRequest) {
  try {
    const years = getYearsToFetch();
    const holidays = await fetchHolidaysForYears(years);
    const sortedHolidays = sortHolidaysByDate(holidays);
    const currentYear = getCurrentDateInfo().year;

    return createICSSuccessResponse(sortedHolidays, currentYear);
  } catch (error) {
    console.error("Error generating holidays ICS:", error);
    return createErrorResponse("Failed to generate holidays calendar", 500);
  }
}
