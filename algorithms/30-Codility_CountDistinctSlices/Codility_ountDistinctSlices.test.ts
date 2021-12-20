import { countDistinctSlices } from './Codility_countDistinctSlices';

test('countDistinctSlices([3, 4, 5, 5, 2]) should return 9', () => {
	expect(countDistinctSlices([3, 4, 5, 5, 2])).toBe(9);
});

test('countDistinctSlices([5, 5, 5]) should return 3', () => {
	expect(countDistinctSlices([5, 5, 5])).toBe(3);
});

test('countDistinctSlices([1]) should return 1', () => {
	expect(countDistinctSlices([1])).toBe(1);
});

test('countDistinctSlices([1, 2, 3]) should return 6', () => {
	expect(countDistinctSlices([1, 2, 3])).toBe(6);
});

test('countDistinctSlices([5, 4, 3]) should return 6', () => {
	expect(countDistinctSlices([5, 4, 3])).toBe(6);
});
