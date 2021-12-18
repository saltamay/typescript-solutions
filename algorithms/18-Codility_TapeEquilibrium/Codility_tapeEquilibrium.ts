export const tapeEquilibrium = (A: number[]): number => {
	let total = 0;
	A.forEach((num) => (total += num));

	let i = 1;
	let leftTotal = A[0];
	let minDelta = Number.MAX_VALUE;

	while (i < A.length) {
		const delta = Math.abs(2 * leftTotal - total);
		if (delta < minDelta) {
			minDelta = delta;
		}
		i++;
		leftTotal += A[i - 1];
	}

	return minDelta;
};
