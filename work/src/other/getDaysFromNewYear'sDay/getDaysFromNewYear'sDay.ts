import { checkLeapYear } from "./checkLeapYear";
/**
 * getDaysFromNewYear'sDay - O(?)
 *
 * @param year - the number for year
 * @param month - the number for month
 * @param day  - the number for day
 * @return number from newYearDay
 */
export function getDaysFromNewYearDay(
  year: number,
  month: number,
  day: number
): number {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const newYearDay = [1, 1];
  let countDay = 0;
  // year,month ,dayのエラー処理
  // year 1以上
  // month 1~12
  // day 該当月の所有日を超えているか？
  // day うるう年でない際の2/29エラー

  // check leap year
  if (checkLeapYear(year)) {
    days[1] = 29;
  }
  // 2月以降なら超えている月分カウンター足す
  if (month > newYearDay[0]) {
    for (let i = 0; i < month - 1; i++) {
      countDay += days[i];
    }
  }
  countDay += day - newYearDay[1];

  return countDay;
}
