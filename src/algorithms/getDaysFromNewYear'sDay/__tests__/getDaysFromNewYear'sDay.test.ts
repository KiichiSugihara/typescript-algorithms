import { getDaysFromNewYearDay } from "../getDaysFromNewYear'sDay";

test("CHECK getDaysFromNewYearDay", () => {
  // 4の倍数でないもの
  expect(getDaysFromNewYearDay(2003, 12, 31)).toBe(0);
});
