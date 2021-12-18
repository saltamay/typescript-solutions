export const frogRiverOne = (X: number, A: number[]): number => {
	const posMap: any = {};

	for (let i = 0; i < A.length; i++) {
		const pos = A[i];
		if (!posMap[pos]) {
			posMap[pos] = true;
			X--;
			if (X === 0) return i;
		}
	}

	return -1;
};
