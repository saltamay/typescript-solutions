import { mergeSortedArrays } from './mergeSortedArrays';

describe('It should merge two sorted array into one sorted array', () => {
	test('Use case 01: ', () => {
		const arr1 = [1, 3, 4, 5];
		const arr2 = [2, 6, 7, 8];

		expect(mergeSortedArrays(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
	});
});
