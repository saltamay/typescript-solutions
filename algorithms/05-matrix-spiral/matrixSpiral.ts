// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

export const matrixSpiral = (n: number): number[][] => {
	const results: any = [];

	for (let i = 0; i < n; i++) {
		results.push([]);
	}
	let counter = 1;
	let startRow = 0;
	let startColumn = 0;
	let endRow = n - 1;
	let endColumn = n - 1;
	while (startRow <= endRow && startColumn <= endColumn) {
		for (let i = startColumn; i <= endColumn; i++) {
			results[startRow][i] = counter;
			counter++;
		}
		startRow++;

		for (let i = startRow; i <= endRow; i++) {
			results[i][endColumn] = counter;
			counter++;
		}
		endColumn--;

		for (let i = endColumn; i >= startColumn; i--) {
			results[endRow][i] = counter;
			counter++;
		}
		endRow--;

		for (let i = endRow; i >= startRow; i--) {
			results[i][startColumn] = counter;
			counter++;
		}
		startColumn++;
	}
	return results;
};
