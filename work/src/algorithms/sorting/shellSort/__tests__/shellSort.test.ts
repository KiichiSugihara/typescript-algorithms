import { shellSort } from "../shellSort";

describe("insertionSort", () => {
  it("should sort number in sorted array", () => {
    expect(shellSort([7, 2, 8, 3, 1, 9, 4, 5, 6])).toEqual([
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
