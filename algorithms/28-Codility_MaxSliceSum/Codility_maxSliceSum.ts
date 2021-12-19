export const maxSliceSum = (A: number[]): number => {
	let maxSliceSum = A[0];
	let currentSliceSum = A[0];

	for (let i = 1; i < A.length; i++) {
		const currentVal = A[i];
		currentSliceSum = Math.max(currentVal, currentSliceSum + currentVal);
		maxSliceSum = Math.max(maxSliceSum, currentSliceSum);
	}

	return maxSliceSum;
};
