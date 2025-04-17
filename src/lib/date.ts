import { Duration, format, formatISODuration, intervalToDuration } from "date-fns";
import { ReadingTime } from "@/types/blog";

export const formatBlogPostDate = (date: string) => {
  return format(new Date(date), "MMMM d, yyyy");
};

const createDurationFromMilliseconds = (milliseconds: number): Duration => {
  const interval = {
    start: new Date(0),
    end: new Date(milliseconds),
  };

  const duration = intervalToDuration(interval);

  return duration;
};

export const getReadingTimeISODuration = (readingTime: ReadingTime) => {
  const duration = createDurationFromMilliseconds(readingTime.ms);

  const formattedDuration = formatISODuration(duration);

  return formattedDuration;
};
