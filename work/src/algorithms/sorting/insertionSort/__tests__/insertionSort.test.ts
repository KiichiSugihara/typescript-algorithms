import { insertionSort } from "../insertionSort";
// prettier-ignore
const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// prettier-ignore
const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// prettier-ignore
const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const negativeArr = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
const negativeArrSorted = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];

describe("insertionSort", () => {
  it("should sort number in sorted array", () => {
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([1])).toEqual([1]);
    expect(insertionSort([1, 2])).toEqual([1, 2]);
    expect(insertionSort([2, 1])).toEqual([1, 2]);
    // prettier-ignore
    expect(insertionSort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
    expect(insertionSort(sortedArr)).toEqual(sortedArr);
    expect(insertionSort(reverseArr)).toEqual(sortedArr);
    expect(insertionSort(notSortedArr)).toEqual(sortedArr);
    expect(insertionSort(equalArr)).toEqual(equalArr);
  });
  it("should sort number in sorted array", () => {
    expect(insertionSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
