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
  if (month > 1) {
    for (let i = 0; i < month - 1; i++) {
      countDay += days[i];
    }
  }
  console.log(year, month, day, days, countDay);

  return 0;
}
