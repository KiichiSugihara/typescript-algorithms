import { checkLeapYear } from "./checkLeapYear";
/**
 * getDaysFromNewYear'sDay - O(?)
 * @param {year,month,day} x - the number for isPrime-check
 * @return {number}
 */
export function getDaysFromNewYearDay(
  year: number,
  month: number,
  day: number
): number {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // check leap year
  if (checkLeapYear(year)) {
    days[1] = 29;
  }
  console.log(year, month, day, days);
  const countDay = 0;
  return countDay;
}
