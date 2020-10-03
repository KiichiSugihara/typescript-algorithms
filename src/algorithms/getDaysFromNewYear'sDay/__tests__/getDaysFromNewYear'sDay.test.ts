import { getDaysFromNewYearDay } from "../getDaysFromNewYear'sDay";

test("CHECK YEAR", () => {
  // 4の倍数でないもの
  expect(getDaysFromNewYearDay(2003, 2, 29)).toBe(0);
  // 4の倍数
  expect(getDaysFromNewYearDay(2004, 2, 29)).toBe(0);
  // 100の倍数で400の倍数でない数
  expect(getDaysFromNewYearDay(2100, 2, 29)).toBe(0);
  // 100の倍数で400の倍数
  expect(getDaysFromNewYearDay(2400, 2, 29)).toBe(0);
});

test("CHECK MONTH", () => {
  // 1月
  expect(getDaysFromNewYearDay(2004, 1, 15)).toBe(0);
  // 2月
  expect(getDaysFromNewYearDay(2004, 2, 15)).toBe(0);
  // 3月
  expect(getDaysFromNewYearDay(2004, 3, 15)).toBe(0);
  // 4月
  expect(getDaysFromNewYearDay(2004, 4, 15)).toBe(0);
  // 5月
  expect(getDaysFromNewYearDay(2004, 5, 15)).toBe(0);
  // 6月
  expect(getDaysFromNewYearDay(2004, 6, 15)).toBe(0);
  // 7月
  expect(getDaysFromNewYearDay(2004, 7, 15)).toBe(0);
  // 8月
  expect(getDaysFromNewYearDay(2004, 8, 15)).toBe(0);
  // 9月
  expect(getDaysFromNewYearDay(2004, 9, 15)).toBe(0);
  // 10月
  expect(getDaysFromNewYearDay(2004, 10, 15)).toBe(0);
  // 11月
  expect(getDaysFromNewYearDay(2004, 11, 15)).toBe(0);
  // 12月
  expect(getDaysFromNewYearDay(2004, 12, 15)).toBe(0);
});
