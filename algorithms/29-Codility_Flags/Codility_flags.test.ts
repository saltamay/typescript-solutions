import { flags } from './Codility_flags';

test('flags([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]) should return 3', () => {
	expect(flags([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])).toBe(3);
});
