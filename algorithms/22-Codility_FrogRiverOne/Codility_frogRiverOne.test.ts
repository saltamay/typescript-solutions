import { frogRiverOne } from './Codility_frogRiverOne';

test('frogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4] should return 6', () => {
	expect(frogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6);
});

test('frogRiverOne(3, [3, 2, 2, 2, 3, 1] should return 5', () => {
	expect(frogRiverOne(3, [3, 2, 2, 2, 3, 1])).toBe(5);
});

test('frogRiverOne(1, [1, 1, 1] should return 0', () => {
	expect(frogRiverOne(1, [1, 1, 1])).toBe(0);
});

test('frogRiverOne(3, [1, 2, 1] should return -1', () => {
	expect(frogRiverOne(3, [1, 2, 1])).toBe(-1);
});
