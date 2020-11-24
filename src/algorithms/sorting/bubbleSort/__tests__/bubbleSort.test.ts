import { bubbleSort } from "../bubbleSort";

describe("bubbleSort", () => {
  it("should sort number in sorted array", () => {
    expect(bubbleSort([], 1)).toBe(1);
  });
});
