export const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
	// return [0];
	const arrOneLength = arr1.length;
	const arrTwoLength = arr2.length;
	let index = 0;
	while (index < arrOneLength || index < arrTwoLength) {
		console.log(arr1[index]);
		console.log(arr2[index]);
		index++;
	}

	return [];
};

const arr1 = [1, 3, 4, 5];
const arr2 = [2, 6, 7, 8];

mergeSortedArrays(arr1, arr2);
