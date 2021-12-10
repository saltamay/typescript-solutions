import { anagrams } from './anagrams';

test('it check if string pairs are valid anagrams', () => {
	const arrA = ['cinema', 'host', 'aba', 'train'];
	const arrB = ['iceman', 'shot', 'bab', 'rain'];

	expect(anagrams(arrA, arrB)).toEqual([1, 1, 0, 0]);
});
