import { maxSumSubarray } from './maxSumSubarray';

describe(`
Given an array of positive numbers and a positive number 
k find the maximum sum of any contiguous subarray of size k
`, () => {
	test('should Input: [2, 3, 4, 1, 5], k=2 return 7', () => {
		const arr = [2, 3, 4, 1, 5];
		const k = 2;

		expect(maxSumSubarray(arr, k)).toBe(7);
	});

	test('should Input: [2, 1, 5, 1, 3, 2], k=3 return 9', () => {
		const arr = [2, 1, 5, 1, 3, 2];
		const k = 3;

		expect(maxSumSubarray(arr, k)).toBe(9);
	});
});
