import { cyclicRotation } from './Codility_cyclicRotation';

test('cyclicRotation([3, 8, 9, 7, 6], 3) should return [9, 7, 6, 3, 8]', () => {
	expect(cyclicRotation([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
});

test('cyclicRotation([3, 8, 9, 7, 6], 8) should return [9, 7, 6, 3, 8]', () => {
	expect(cyclicRotation([3, 8, 9, 7, 6], 8)).toEqual([9, 7, 6, 3, 8]);
});

test('cyclicRotation([3, 8, 9, 7, 6], 2) should return [9, 7, 6, 3, 8]', () => {
	expect(cyclicRotation([3, 8, 9, 7, 6], 2)).toEqual([7, 6, 3, 8, 9]);
});

test('cyclicRotation([0, 0, 0], 1) should return [0, 0, 0]', () => {
	expect(cyclicRotation([0, 0, 0], 1)).toEqual([0, 0, 0]);
});

test('cyclicRotation([0, 0, 0], 0) should return [0, 0, 0]', () => {
	expect(cyclicRotation([0, 0, 0], 0)).toEqual([0, 0, 0]);
});

test('cyclicRotation([1, 2, 3, 4], 4) should return [1, 2, 3, 4]', () => {
	expect(cyclicRotation([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
});

test('cyclicRotation([], 1) should return []', () => {
	expect(cyclicRotation([], 1)).toEqual([]);
});

test('cyclicRotation([], 0) should return []', () => {
	expect(cyclicRotation([], 0)).toEqual([]);
});
