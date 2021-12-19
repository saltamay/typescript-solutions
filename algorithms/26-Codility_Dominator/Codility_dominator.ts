export const dominator = (A: number[]): number => {
	const numsMap: any = {};

	for (let i = 0; i < A.length; i++) {
		const num = A[i];
		numsMap[num] = numsMap[num] ? numsMap[num] + 1 : 1;

		if (numsMap[num] > A.length / 2) {
			return i;
		}
	}

	return -1;
};
