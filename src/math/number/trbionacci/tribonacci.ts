/**
 * TribonacciRecursion
 * @param {number} x - the number order for tribonacci
 * @return {number} - Tribonacci number
 */
export function tribonacciRecursion(n: number): number {
  if (n < 3) return n === 2 ? 1 : 0;
  return (
    tribonacciRecursion(n - 3) +
    tribonacciRecursion(n - 2) +
    tribonacciRecursion(n - 1)
  );
}
