import { insertionSort } from "../insertionSort";

describe("insertionSort", () => {
  it("should sort number in sorted array", () => {
    expect(insertionSort([], 1)).toBe(1);
  });
});
