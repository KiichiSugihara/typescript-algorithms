/**
 * Sort Array
 * Returns sorted Array
 * @param {number[]} arr
 * @return {number[]}
 */
export function insertionSort(arr: Array<number>): Array<number> {
  for (let i = 1; i < arr.length; i++) {
    const tmp = arr[i];
    if (arr[i - 1] > tmp) {
      let j = i;

      while (j > 0 && arr[j - 1] > tmp) {
        arr[j] = arr[j - 1];
        j--;
      }
      arr[j] = tmp;
    }
  }
  return arr;
}
