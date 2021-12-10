export const removeEven = (arr: number[]): number[] | [] => {
	return arr.filter((el) => el % 2 !== 0);
};
