import { tribonacciMemo } from "../tribonacciMemo";

test("n=1", () => {
  expect(tribonacciMemo(1)).toEqual(0);
});

test("n=2", () => {
  expect(tribonacciMemo(2)).toEqual(1);
});

test("n=3~~", () => {
  expect(tribonacciMemo(3)).toEqual(1);
  expect(tribonacciMemo(4)).toEqual(2);
  expect(tribonacciMemo(5)).toEqual(4);
});

test("n=50の時", () => {
  expect(tribonacciMemo(50)).toEqual(3122171529233);
});
