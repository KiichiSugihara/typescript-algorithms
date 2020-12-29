import { isPrimeNormal, isPrime } from "../graphVertex";

test("isPrimeNormal", () => {
  expect(isPrimeNormal(1)).toBe(false);
  expect(isPrimeNormal(2)).toBe(true);
  expect(isPrimeNormal(12)).toBe(false);
  expect(isPrimeNormal(13)).toBe(true);
  expect(isPrime(12000000000000)).toBe(false);
  expect(isPrime(5249287)).toBe(true);
});

test("isPrime", () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(12)).toBe(false);
  expect(isPrime(13)).toBe(true);
  expect(isPrime(12000000000000)).toBe(false);
  expect(isPrime(5249287)).toBe(true);
});
