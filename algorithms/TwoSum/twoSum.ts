/**
 * Two Sum
 * https://leetcode.com/problems/two-sum/
 */
export const twoSum = (nums: number[], target: number): number[] | boolean => {
  let cache: any = {};

  for (let index = 0; index < nums.length; index++) {
    const currentEl = nums[index];
    const targetEl = Math.abs(target - currentEl);

    if (cache[targetEl] !== undefined) {
      return [targetEl, currentEl];
    } else {
      cache[currentEl] = index;
    }
  }

  return false;
};
