export const flags = (A: number[]): number => {
	let lastPeekIdx = A.length;
	const peeks = Array(A.length);
	peeks[peeks.length - 1] = lastPeekIdx;

	for (let i = A.length - 2; i >= 0; i--) {
		const el = A[i];
		const left = A[i - 1];
		const right = A[i + 1];
		if (el > left && el > right) {
			lastPeekIdx = i;
		}
		peeks[i] = lastPeekIdx;
	}
	console.log(peeks);
	return 0;
};

console.log(flags([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
