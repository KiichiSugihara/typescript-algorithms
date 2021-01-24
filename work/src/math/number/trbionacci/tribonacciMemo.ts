// /**
//  * TribonacciMemo
//  * @param {number} x - the number order for tribonacci
//  * @return {number} - Tribonacci number
//  */
export const tribonacciMemo = memorize(slowTri);

interface slowTriType {
  (n: number): number;
}

function slowTri(n: number): number {
  if (n < 3) return n === 2 ? 1 : 0;
  return tribonacciMemo(n - 3) + tribonacciMemo(n - 2) + tribonacciMemo(n - 1);
}

function memorize(fn: slowTriType) {
  const cache: Array<number> = [];
  return (args: number) => {
    if (cache[args]) return cache[args];
    const result = fn(args);
    cache[args] = result;
    return result;
  };
}
