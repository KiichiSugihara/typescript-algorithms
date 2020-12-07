import { mergeSort } from "../mergeSort";

describe("insertionSort", () => {
  it("should sort number in sorted array", () => {
    expect(mergeSort([1, 4, 9, 6, 3, 0, 8, 5, 7, 2])).toEqual([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });
});
