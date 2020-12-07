/**
 * Sort Array
 * Returns sorted Array
 * @param {number[]} arr
 * @return {number[]}
 */
export function mergeSort(arr: Array<number>): Array<number> {
  // No need to sort the array if the array only has one element or empty
  if (arr.length <= 1) {
    return arr;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(arr.length / 2);

  // This is where we will be dividing the array into left and right
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Using recursion to combine the left and right
  const sorted = merge(mergeSort(left), mergeSort(right));
  console.log(sorted);
  return sorted;
}

// Merge the two arrays: left and right
function merge(left: Array<number>, right: Array<number>) {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
