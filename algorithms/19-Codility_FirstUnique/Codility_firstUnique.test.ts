import { firstUnique } from './Codility_firstUnique';

test('firstUnique([4, 10, 5, 4, 2, 10]) returns 5', () => {
	expect(firstUnique([4, 10, 5, 4, 2, 10])).toBe(5);
});

test('firstUnique([6,4,4,6]) returns -1', () => {
	expect(firstUnique([6, 4, 4, 6])).toBe(-1);
});
