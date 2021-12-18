export const firstUnique = (A: number[]): number => {
	const numsMap: any = [];

	for (const num of A) {
		numsMap[num] = numsMap[num] ? numsMap[num] + 1 : 1;
	}

	for (const num of A) {
		if (numsMap[num] && numsMap[num] === 1) {
			return num;
		}
	}

	return -1;
};
