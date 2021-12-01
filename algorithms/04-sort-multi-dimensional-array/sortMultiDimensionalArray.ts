export const sortMultiDimensionalArray = (
	arr: (string | number)[][],
	subIndex: number
): (string | number)[][] => {
	return arr.sort((a, b) => {
		return (b[subIndex] as number) - (a[subIndex] as number);
	});
};
