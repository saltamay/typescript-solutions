export const minSizeSubarraySum = (nums: number[], sum: number): number => {
  let start = 0;
  let minLength = Infinity;
  let subTotal = 0;
  let currentLength = 0;

  for (let i = 0; i < nums.length; i++) {
    subTotal += nums[i];

    while (subTotal >= sum) {
      currentLength = i - start + 1;
      if (currentLength < minLength) minLength = currentLength;
      subTotal -= nums[start];
      start++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
