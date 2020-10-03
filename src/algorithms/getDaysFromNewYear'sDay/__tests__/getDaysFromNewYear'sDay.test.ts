import { getDaysFromNewYearDay } from "../getDaysFromNewYear'sDay";

test("CHECK getDaysFromNewYearDay", () => {
  // YEAR
  // 4の倍数でないもの
  expect(getDaysFromNewYearDay(2003, 2, 29)).toBe(0);
  // 4の倍数
  expect(getDaysFromNewYearDay(2004, 2, 29)).toBe(0);
  // 100の倍数で400の倍数でない数
  expect(getDaysFromNewYearDay(2100, 2, 29)).toBe(0);
  // 100の倍数で400の倍数
  expect(getDaysFromNewYearDay(2400, 2, 29)).toBe(0);
  // MONTH
  // DAY
});
