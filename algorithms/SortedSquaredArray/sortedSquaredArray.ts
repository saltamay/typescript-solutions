/**
 * Sorted Squared Array
 * https://leetcode.com/problems/squares-of-a-sorted-array/submissions/
 */
export const sortedSquaredArray = (nums: number[]): number[] => {
  const results: number[] = [];
  let l = 0;
  let r = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    const left = Math.pow(nums[l], 2);
    const right = Math.pow(nums[r], 2);
    if (left > right) {
      results[i] = left;
      l++;
    } else {
      results[i] = right;
      r--;
    }
  }

  return results;
};
