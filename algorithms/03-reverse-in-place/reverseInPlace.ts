type arrayType = number[] | string[];

export const reverseInPlace = (arr: arrayType): arrayType => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const temp = arr[right];
		arr[right] = arr[left];
		arr[left] = temp;
		left++;
		right--;
	}

	return arr;
};
