import { createEvents, type EventAttributes } from "ics";
import type { Holiday } from "./scrapeHolidays";

/**
 * Parses a date string (YYYY-MM-DD) into [year, month, day] array
 * Month is 1-indexed (1-12) as required by the ics library
 */
const parseDateToArray = (dateStr: string): [number, number, number] => {
  const [year, month, day] = dateStr.split("-").map(Number);
  return [year, month, day];
};

/**
 * Calculates the next day for all-day events
 * The ics library requires end date to be the day after for all-day events
 */
const getNextDay = (dateArray: [number, number, number]): [number, number, number] => {
  const [year, month, day] = dateArray;
  const date = new Date(year, month - 1, day); // month is 0-indexed in Date
  date.setDate(date.getDate() + 1);
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
};

/**
 * Transforms a holiday into an ICS event attribute
 */
const holidayToEvent = (holiday: Holiday): EventAttributes => {
  const start = parseDateToArray(holiday.date);
  const end = getNextDay(start);

  return {
    title: holiday.name,
    start,
    end,
    startInputType: "local",
    endInputType: "local",
    productId: "dudek.sh//Polish Holidays//EN",
  };
};

/**
 * Generates ICS calendar content from holidays using the ics library
 */
export const generateICS = (holidays: Holiday[]): string => {
  const events = holidays.map(holidayToEvent);

  const { error, value } = createEvents(events);

  if (error) {
    throw new Error(`Failed to generate ICS: ${error.message}`);
  }

  if (!value) {
    throw new Error("ICS generation returned no value");
  }

  return value;
};
