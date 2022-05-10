/**
 * Monotonic Array
 *
 * An array is monotonic if it is either monotone increasing or monotone decreasing,
 * meaning if all its elements from left to right non-decreasing or vice-versa.
 *
 * Input: [1,2,2,3]
 * Output: true
 *
 * Input: [6,5,4,4]
 * Output: true
 *
 * Input: [1,3,2]
 * Output: false
 */
export const monotonicArray = (nums: number[]): boolean => {
  if (nums.length < 2) return true; // Empty array or array with one item

  let prev: number;
  let current: number;

  if (nums[0] > nums[nums.length - 1]) {
    prev = nums.length - 1;
    current = nums.length - 2;
    for (current; current >= 0; current--) {
      if (nums[current] < nums[prev]) return false;
      prev--;
    }
  } else {
    prev = 0;
    current = 1;
    for (current; current < nums.length; current++) {
      if (nums[prev] > nums[current]) return false;
      prev++;
    }
  }

  return true;
};
