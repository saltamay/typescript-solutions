import { maxDeviation } from './maxDeviation';

describe('', () => {
	test('arr = [6, 9, 4, 7, 4, 1], k= 3 => 6', () => {
		const arr = [6, 9, 4, 7, 4, 1];
		const k = 3;
		expect(maxDeviation(arr, k)).toBe(6);
	});
});
