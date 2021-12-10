import { isAnagram } from './isAnagram';

test('it is a valid anagram', () => {
	const str1 = 'anagram';
	const str2 = 'nagaram';

	expect(isAnagram(str1, str2)).toBe(true);
});

test('it is a valid anagram', () => {
	const str1 = 'a';
	const str2 = 'a';

	expect(isAnagram(str1, str2)).toBe(true);
});

test('inputs should have the same length to be a valid anagram', () => {
	const str1 = 'ab';
	const str2 = 'b';

	expect(isAnagram(str1, str2)).toBe(false);
});

test('it is not a valid anagram', () => {
	const str1 = 'rat';
	const str2 = 'car';

	expect(isAnagram(str1, str2)).toBe(false);
});

test('it is not a valid anagram', () => {
	const str1 = 'a';
	const str2 = 'b';

	expect(isAnagram(str1, str2)).toBe(false);
});
