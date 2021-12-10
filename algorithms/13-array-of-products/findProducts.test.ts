import { findProducts } from './findProducts';

describe(`
  Given an array, return an array where each index stores 
  the product of all numbers in the array except the number 
  at the index itself
`, () => {
	test('[1,2,3,4] => [24,12,8,6]', () => {
		const arr = [1, 2, 3, 4];

		expect(findProducts(arr)).toEqual([24, 12, 8, 6]);
	});

	test('[1,2,3,-4] => [-24,-12,-8,6]', () => {
		const arr = [1, 2, 3, -4];

		expect(findProducts(arr)).toEqual([-24, -12, -8, 6]);
	});

	test('[2.5,2,1] => [2,2.5,5]', () => {
		const arr = [2.5, 2, 1];

		expect(findProducts(arr)).toEqual([2, 2.5, 5]);
	});
});
