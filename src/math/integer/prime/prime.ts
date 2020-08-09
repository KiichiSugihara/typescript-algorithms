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

/**
 * PrimeCheckFunction use composite number - O(√n)
 * @param {number} x - the number for isPrime-check
 * @return {boolean}
 */
export function isPrime(x: number): boolean {
  if (x === 2) {
    return true;
  }
  // 2以外の偶数は素数でないことを利用し高速化
  if (x < 2 || x % 2 === 0) {
    return false;
  }
  // 合成数xは p<=√xを満たす素因子pを持つを利用し調べる範囲を最小化
  for (let i = 3; i < Math.sqrt(x); i += 2) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
