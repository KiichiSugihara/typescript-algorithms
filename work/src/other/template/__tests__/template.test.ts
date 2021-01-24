import { templateIs0 } from "../template";

test("Is0", () => {
  expect(templateIs0(1)).toBe(false);
  expect(templateIs0(0)).toBe(true);
});
