/**
 * checkLeapYear - O(1)
 * @param {year} x - the year for checkLeapYear
 * @return {boolean}
 */
export function checkLeapYear(year: number): boolean {
  if (year % 4 === 0 && (year % 100 != 0 || year % 400 == 0)) {
    return true;
  }
  return false;
}
