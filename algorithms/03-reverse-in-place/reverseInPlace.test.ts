import { reverseInPlace } from './reverseInPlace';

describe('Reverse In Place', () => {
	test('should reverse an array of numbers or strings in place', () => {
		expect(reverseInPlace(['h', 'e', 'l', 'l', 'o'])).toEqual([
			'o',
			'l',
			'l',
			'e',
			'h',
		]);

		expect(reverseInPlace(['H', 'a', 'n', 'n', 'a', 'h'])).toEqual([
			'h',
			'a',
			'n',
			'n',
			'a',
			'H',
		]);

		expect(reverseInPlace([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
	});
});
