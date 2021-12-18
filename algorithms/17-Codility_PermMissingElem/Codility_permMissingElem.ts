/*
  Sum of the first n Natural Numbers 1+ 2+ ... + n = n(n+1) / 2
*/
export const permMissingElement = (arr: number[]): number => {
	const n = arr.length + 1;
	let total = (n * (n + 1)) / 2;

	arr.forEach((el) => (total -= el));

	return total;
};
