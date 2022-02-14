export const maxNonOverlappingSegments = (
	A: number[] | [],
	B: number[] | []
): number => {
	let count = 0;
	let lastSegment = 0;

	for (let i = 0; i < A.length; i++) {
		if (B[lastSegment] < A[i]) {
			count++;
			lastSegment = i;
		}
	}
	return count;
};

// const A = [1, 3, 7, 9, 9];
// const B = [5, 6, 8, 9, 10];

const A: [] = [];
const B: [] = [];

console.log(maxNonOverlappingSegments(A, B));
