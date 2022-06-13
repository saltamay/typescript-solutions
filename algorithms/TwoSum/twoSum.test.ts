import { twoSum } from './twoSum';

describe('Given an array and a number "value", find two numbers from the array that sum to "value".', () => {
  test('arr = [2,7,11,15], target = 9 => [1, 0]', () => {
    const arr = [1, 21, 3, 14, 5, 60, 7, 6];
    const target = 81;

    expect(twoSum(arr, target)).toEqual([21, 60]);
  });

  test('arr = [3,2,4], target = 6 => [1, 2]', () => {
    const arr = [2, 7, 11, 15];
    const target = 9;

    expect(twoSum(arr, target)).toEqual([2, 7]);
  });

  test('arr = [3,3], target = 6 => [0, 1]', () => {
    const arr = [3, 3];
    const target = 6;

    expect(twoSum(arr, target)).toEqual([3, 3]);
  });
});
