import { findSubarrayAverages } from './findSubarrayAverages';

describe(`
  Given an array, find the average of all 
  contiguous subarrays of size ‘K’ in it.
`, () => {
	test('arr = [1, 3, 2, 6, -1, 4, 1, 8, 2], k = 5 => [2.2, 2.8, 2.4, 3.6, 2.8]', () => {
		const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
		const k = 5;
		const expected = [2.2, 2.8, 2.4, 3.6, 2.8];
		expect(findSubarrayAverages(arr, k)).toEqual(expected);
	});
});
