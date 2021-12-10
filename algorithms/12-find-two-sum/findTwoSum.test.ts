import { findTwoSum } from './findTwoSum';

describe('Given an array and a number "value", find two numbers from the array that sum to "value".', () => {
	test('arr = [1,21,3,14,5,60,7,6], target = 81 => [21,60]', () => {
		const arr = [1, 21, 3, 14, 5, 60, 7, 6];
		const target = 81;

		expect(findTwoSum(arr, target)).toEqual([21, 60]);
	});

	test('arr = [2,7,11,15], target = 9 => [2, 7]', () => {
		const arr = [2, 7, 11, 15];
		const target = 9;

		expect(findTwoSum(arr, target)).toEqual([2, 7]);
	});

	test('arr = [3,3], target = 6 => [3, 3]', () => {
		const arr = [3, 3];
		const target = 6;

		expect(findTwoSum(arr, target)).toEqual([3, 3]);
	});

	test('arr = [3,2,4], target = 6 => [2, 4]', () => {
		const arr = [3, 2, 4];
		const target = 6;

		expect(findTwoSum(arr, target)).toEqual([2, 4]);
	});

	test('arr = [1,2,3,4], target = 10 => false', () => {
		const arr = [1, 2, 3, 4];
		const target = 10;

		expect(findTwoSum(arr, target)).toBe(false);
	});
});
