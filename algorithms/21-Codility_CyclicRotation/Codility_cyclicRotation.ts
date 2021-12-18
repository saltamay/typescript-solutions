export const cyclicRotation = (
	A: number[],
	K: number
): (number | undefined)[] => {
	const size = A.length;

	if (size === 0 || K % size === 0) return A;

	let resultArr = Array(size);

	for (let i = 0; i < size; i++) {
		resultArr[(i + K) % size] = A[i];
	}

	return resultArr;
};
