import { gcd } from "../gcd";

test("gcd", () => {
  expect(gcd(120, 360)).toBe(120);
  expect(gcd(2, 4)).toBe(2);
  expect(gcd(2, 12)).toBe(2);
  expect(gcd(7, 210)).toBe(7);
  expect(gcd(74, 54)).toBe(2);
});
