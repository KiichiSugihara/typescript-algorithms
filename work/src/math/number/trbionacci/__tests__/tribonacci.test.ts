import { tribonacciRecursion } from "../tribonacci";

test("n=1", () => {
  expect(tribonacciRecursion(1)).toEqual(0);
});

test("n=2", () => {
  expect(tribonacciRecursion(2)).toEqual(1);
});

test("n=3~~", () => {
  expect(tribonacciRecursion(3)).toEqual(1);
  expect(tribonacciRecursion(4)).toEqual(2);
  expect(tribonacciRecursion(5)).toEqual(4);
});

// 遅いのでコメント化
// test("n=50の時", () => {
//   expect(tribonacciRecursion(50)).toEqual(3122171529233);
// });
