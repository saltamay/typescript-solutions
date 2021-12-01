import { sortMultiDimensionalArray } from './sortMultiDimensionalArray';

describe('Sort Multi-Dimensional Array', () => {
	test('is should sort hte array by one of the sub-elements', () => {
		expect(
			sortMultiDimensionalArray(
				[
					['G', 10],
					['A', 22],
					['S', 1],
					['P', 14],
					['V', 13],
					['T', 7],
					['C', 0],
					['I', 219],
				],
				1
			)
		).toEqual([
			['I', 219],
			['A', 22],
			['P', 14],
			['V', 13],
			['G', 10],
			['T', 7],
			['S', 1],
			['C', 0],
		]);
	});
});
