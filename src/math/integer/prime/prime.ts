/**
 * PrimeCheckFunction slowly - O(n)
 * @param {number} x - the number for isPrime-check
 * @return {boolean}
 */
export function isPrimeNormal(x: number): boolean {
  if (x <= 1) {
    return false;
  }
  for (let i = 2; i < x - 1; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
