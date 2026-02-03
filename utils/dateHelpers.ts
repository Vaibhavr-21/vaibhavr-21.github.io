
export const months: { [key: string]: number } = {
  'jan': 0, 'january': 0,
  'feb': 1, 'february': 1,
  'mar': 2, 'march': 2,
  'apr': 3, 'april': 3,
  'may': 4,
  'jun': 5, 'june': 5,
  'jul': 6, 'july': 6,
  'aug': 7, 'august': 7,
  'sep': 8, 'september': 8, 'sept': 8,
  'oct': 9, 'october': 9,
  'nov': 10, 'november': 10,
  'dec': 11, 'december': 11
};

export function parseDate(dateStr: string): Date {
  const cleanStr = dateStr.trim().toLowerCase();

  if (cleanStr === 'present') {
    return new Date();
  }

  // Handle "Month Year" e.g. "March 2024"
  const parts = cleanStr.split(' ');
  if (parts.length >= 2) {
    const monthStr = parts[0];
    const yearStr = parts[1];

    const month = months[monthStr];
    const year = parseInt(yearStr);

    if (month !== undefined && !isNaN(year)) {
      return new Date(year, month, 1);
    }
  }

  // Fallback
  return new Date();
}

export function getDurationStartEnd(duration: string): { start: Date, end: Date } | null {
  // Expected format: "Start - End" or "Start – End" (en-dash)
  // Check for different separators
  let parts = duration.split('–'); // en-dash
  if (parts.length !== 2) {
    parts = duration.split('-'); // hyphen
  }

  if (parts.length !== 2) return null;

  return {
    start: parseDate(parts[0]),
    end: parseDate(parts[1])
  };
}

export function getGapInMonths(currentJobDuration: string, nextJobDuration: string): number {
  const current = getDurationStartEnd(currentJobDuration);
  const next = getDurationStartEnd(nextJobDuration);

  if (!current || !next) return 0;

  // Current job is OLDER (lower in the list usually, but let's assume reverse chrono list)
  // If list is: [Job A (New), Job B (Old)]
  // We are processing Job B.
  // current = Job B. next = Job A.
  // Gap is between Job B End and Job A Start.

  // Wait, the dates are Month/Year.
  // Job B End: Aug 2023. Job A Start: March 2024.
  // Gap starts Sept 1, 2023. Gap ends March 1, 2024.
  // Diff in months.

  const gapStart = current.end;
  const gapEnd = next.start;

  if (gapEnd <= gapStart) return 0;

  const yearsDiff = gapEnd.getFullYear() - gapStart.getFullYear();
  const monthsDiff = gapEnd.getMonth() - gapStart.getMonth();

  // Calculate total months difference
  // e.g. Aug (7) to Mar (2) next year.
  // Year diff = 1. Month diff = -5.
  // 12 - 5 = 7 months?
  // Aug -> Sept(1), Oct(2), Nov(3), Dec(4), Jan(5), Feb(6), Mar(7).
  // Strictly speaking if I end Aug 31 and start Mar 1.
  // Sept, Oct, Nov, Dec, Jan, Feb are the FULL unemployed months. = 6 months.
  // Simple diff: (2024*12 + 2) - (2023*12 + 7) = 24288 + 2 - 24276 - 7 = 12 + 2 - 7 = 7.
  // But typically if you end in Aug and start in March, you are out for Sept, Oct, Nov, Dec, Jan, Feb.
  // So 7 months diff implies starting in the 7th month after?

  let totalMonths = (yearsDiff * 12) + monthsDiff;

  // We want the gap *between*.
  // End Aug (Month 7). Start March (Month 2).
  // 7 -> 8 (Sep), 9 (Oct), 10 (Nov), 11 (Dec), 0 (Jan), 1 (Feb).
  // Start is 2.
  // So the months strictly in between are 8,9,10,11,0,1. (6 months).
  // totalMonths calculated above is 7.
  // So gap is totalMonths - 1.

  // Edge case: End Aug, Start Sept. totalMonths = 1. Gap = 0. Correct.

  return Math.max(0, totalMonths - 1);
}
