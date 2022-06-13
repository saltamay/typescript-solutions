/**
 * Two Sum
 * https://leetcode.com/problems/two-sum/
 */
export const twoSum = (nums: number[], target: number): number[] => {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const otherNum = target - nums[i];
    if (numsMap.has(otherNum)) return [i, numsMap.get(otherNum)];
    numsMap.set(nums[i], i);
  }

  throw new Error('No Two Sumtwo sum solution');
};
