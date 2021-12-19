export const maxProfit = (A: number[]): number => {
	let maxProfit = 0;
	let currentMax = 0;

	for (let i = 1; i < A.length; i++) {
		const delta = A[i] - A[i - 1];
		currentMax = Math.max(delta, currentMax + delta);
		maxProfit = Math.max(maxProfit, currentMax);
	}

	return maxProfit;
};
