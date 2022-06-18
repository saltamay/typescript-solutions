export const averageOfSubarrayOfSizeK = (
  k: number,
  nums: number[]
): number[] => {
  let start = 0;
  let subTotal = 0;
  let averages = [];

  for (let i = 0; i < nums.length; i++) {
    subTotal += nums[i];

    if (i >= k - 1) {
      averages.push(subTotal / k);
      subTotal -= nums[start];
      start++;
    }
  }

  return averages;
};
