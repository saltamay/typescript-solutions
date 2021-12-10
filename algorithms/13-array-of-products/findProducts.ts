export const findProducts = (arr: number[]): number[] => {
	const totalProducts = calculateProducts(arr);
	const result: any = [];

	arr.forEach((el) => result.push(totalProducts / el));

	return result;
};

function calculateProducts(arr: number[]): number {
	let totalProducts = 1;
	arr.forEach((el) => (totalProducts *= el));
	return totalProducts;
}
