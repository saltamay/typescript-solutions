export const isAnagram = (stringA: string, stringB: string): boolean => {
	// const stringASorted = stringA.split('').sort().join('');
	// const stringBSorted = stringB.split('').sort().join('');
	// return stringASorted === stringBSorted;
	if (stringA.length !== stringB.length) {
		return false;
	}

	const charMap: any = buildCharMap(stringA);
	let result = true;

	stringB.split('').forEach((char) => {
		if (charMap[char] === undefined) {
			result = false;
		} else {
			charMap[char]--;
			if (charMap[char] < 0) {
				result = false;
			}
		}
	});

	return result;
};

const buildCharMap = (str: string): object => {
	const charMap: any = {};
	str.split('').forEach((char: string) => {
		charMap[char] = charMap[char] + 1 || 1;
	});
	return charMap;
};
