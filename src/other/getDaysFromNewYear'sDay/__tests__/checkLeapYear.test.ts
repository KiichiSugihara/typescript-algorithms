import { checkLeapYear } from "../checkLeapYear";

test("CHECK checkLeapYear", () => {
  // 4の倍数でないもの
  expect(checkLeapYear(2003)).toBe(false);
  // 4の倍数
  expect(checkLeapYear(2004)).toBe(true);
  // 100の倍数で400の倍数でない数
  expect(checkLeapYear(2100)).toBe(false);
  // 100の倍数で400の倍数
  expect(checkLeapYear(2400)).toBe(true);
});
