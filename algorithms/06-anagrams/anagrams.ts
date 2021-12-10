import { isAnagram } from '../07-valid-anagram/isAnagram';

export const anagrams = (arrA: string[], arrB: string[]): number[] => {
	let result: any = [];

	arrA.forEach((word, idx) => {
		isAnagram(word, arrB[idx]) ? result.push(1) : result.push(0);
	});

	return result;
};
