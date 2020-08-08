import { isPrimeNormal } from "../prime";

test("isPrimeNormal", () => {
  expect(isPrimeNormal(1)).toBe(false);
  expect(isPrimeNormal(2)).toBe(true);
  expect(isPrimeNormal(12)).toBe(false);
  expect(isPrimeNormal(13)).toBe(true);
});
