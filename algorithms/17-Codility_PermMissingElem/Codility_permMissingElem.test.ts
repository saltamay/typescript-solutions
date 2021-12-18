import { permMissingElement } from './Codility_permMissingElem';

test('permMissingElement([1, 2, 3, 5]) returns 4', () => {
	expect(permMissingElement([1, 2, 3, 5])).toBe(4);
});

test('permMissingElement([1, 2, 3, 4]) returns 5', () => {
	expect(permMissingElement([1, 2, 3, 4])).toBe(5);
});

test('permMissingElement([]) returns 1', () => {
	expect(permMissingElement([])).toBe(1);
});

test('permMissingElement([1]) returns 2', () => {
	expect(permMissingElement([1])).toBe(2);
});
