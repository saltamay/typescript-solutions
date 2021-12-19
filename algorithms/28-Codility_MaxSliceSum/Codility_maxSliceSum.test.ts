import { maxSliceSum } from './Codility_maxSliceSum';

test('maxSliceSum([1]) should return 1', () => {
	expect(maxSliceSum([1])).toBe(1);
});

test('maxSliceSum([-2, -7]) should return -2', () => {
	expect(maxSliceSum([-2, -7])).toBe(-2);
});

test('maxSliceSum([3, 2, -6, 4, 0]) should return 5', () => {
	expect(maxSliceSum([3, 2, -6, 4, 0])).toBe(5);
});
