import { averageOfSubarrayOfSizeK } from './averageOfSubarrayOfSizeK';

test('Average of Subarray of Size K', () => {
  let nums = [1, 3, 2, 6, -1, 4, 1, 8, 2];
  let k = 5;
  let expected = [2.2, 2.8, 2.4, 3.6, 2.8];

  expect(averageOfSubarrayOfSizeK(k, nums)).toEqual(expected);

  nums = [5];
  k = 1;
  expected = [5];

  expect(averageOfSubarrayOfSizeK(k, nums)).toEqual(expected);
});
