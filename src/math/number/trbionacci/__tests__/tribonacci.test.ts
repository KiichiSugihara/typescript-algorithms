import { templateIs0 } from "../tribonacci";

test("Is0", () => {
  expect(templateIs0(1)).toBe(false);
  expect(templateIs0(0)).toBe(true);
});
