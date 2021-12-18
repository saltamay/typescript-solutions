import { tapeEquilibrium } from './Codility_tapeEquilibrium';

test('tapeEquilibrium([3, 1, 2, 4, 3]) should return 3', () => {
	expect(tapeEquilibrium([3, 1, 2, 4, 3])).toBe(1);
});

test('tapeEquilibrium([1, 2]) should return 1', () => {
	expect(tapeEquilibrium([1, 2])).toBe(1);
});

test('tapeEquilibrium([1, 2, -3, -4]) should return 4', () => {
	expect(tapeEquilibrium([1, 2, -3, -4])).toBe(4);
});
