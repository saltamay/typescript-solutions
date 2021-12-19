import { dominator } from './Codility_dominator';

test('dominator([3, 4, 3, 2, 3, -1, 3, 3]) should return 5', () => {
	expect(dominator([3, 4, 3, 2, 3, -1, 3, 3])).toBe(7);
});

test('dominator([3, 4, 3, 2, 3, -1, 5, 5]) should return -1', () => {
	expect(dominator([3, 4, 3, 2, 3, -1, 5, 5])).toBe(-1);
});

test('dominator([]) should return -1', () => {
	expect(dominator([])).toBe(-1);
});

test('dominator([3, 3, 3, 3]) should return 2', () => {
	expect(dominator([3, 3, 3, 3])).toBe(2);
});
