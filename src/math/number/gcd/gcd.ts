/**
 * get CGD (Greatest common divisor) - O(n)
 * @param {number,number}  - the numbers to check CGD
 * @return {number} - return gcd
 */
export function gcd(x: number, y: number): number {
  let n: number;
  if (x <= y) {
    n = x;
  } else {
    n = y;
  }
  for (let i = n; i > 1; i--) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
  return 1;
}
