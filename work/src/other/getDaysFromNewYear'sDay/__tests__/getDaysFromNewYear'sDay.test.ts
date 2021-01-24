import { getDaysFromNewYearDay } from "../getDaysFromNewYear'sDay";

test("CHECK YEAR", () => {
  // 4の倍数でないもの
  expect(getDaysFromNewYearDay(2003, 2, 28)).toBe(58);
  // 4の倍数
  expect(getDaysFromNewYearDay(2004, 2, 29)).toBe(59);
  // 100の倍数で400の倍数でない数
  expect(getDaysFromNewYearDay(2100, 2, 28)).toBe(58);
  // 100の倍数で400の倍数
  expect(getDaysFromNewYearDay(2400, 2, 29)).toBe(59);
});

test("CHECK MONTH", () => {
  // 1月
  expect(getDaysFromNewYearDay(2004, 1, 15)).toBe(14);
  // 2月
  expect(getDaysFromNewYearDay(2004, 2, 15)).toBe(45);
  // 3月
  expect(getDaysFromNewYearDay(2004, 3, 15)).toBe(74);
  // 4月
  expect(getDaysFromNewYearDay(2004, 4, 15)).toBe(105);
  // 5月
  expect(getDaysFromNewYearDay(2004, 5, 15)).toBe(135);
  // 6月
  expect(getDaysFromNewYearDay(2004, 6, 15)).toBe(166);
  // 7月
  expect(getDaysFromNewYearDay(2004, 7, 15)).toBe(196);
  // 8月
  expect(getDaysFromNewYearDay(2004, 8, 15)).toBe(227);
  // 9月
  expect(getDaysFromNewYearDay(2004, 9, 15)).toBe(258);
  // 10月
  expect(getDaysFromNewYearDay(2004, 10, 15)).toBe(288);
  // 11月
  expect(getDaysFromNewYearDay(2004, 11, 15)).toBe(319);
  // 12月
  expect(getDaysFromNewYearDay(2004, 12, 15)).toBe(349);
});
