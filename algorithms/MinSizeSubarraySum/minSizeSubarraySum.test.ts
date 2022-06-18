import { minSizeSubarraySum } from './minSizeSubarraySum';

test('Smallest subarray with a given sum', () => {
  let nums = [2, 1, 5, 2, 8];
  let sum = 7;
  let expected = 1;

  expect(minSizeSubarraySum(nums, sum)).toBe(expected);

  nums = [2, 1, 5, 2, 3, 2];
  sum = 7;
  expected = 2;

  expect(minSizeSubarraySum(nums, sum)).toBe(expected);

  nums = [3, 4, 1, 1, 6];
  sum = 8;
  expected = 3;

  expect(minSizeSubarraySum(nums, sum)).toBe(expected);

  nums = [3, 4, 1, 1, 6];
  sum = 16;
  expected = 0;

  expect(minSizeSubarraySum(nums, sum)).toBe(expected);
});
