export const findTwoSum = (
	arr: number[],
	target: number
): number[] | boolean => {
	let cache: any = {};

	for (let index = 0; index < arr.length; index++) {
		const currentEl = arr[index];
		const targetEl = Math.abs(target - currentEl);

		if (cache[targetEl] !== undefined) {
			return [targetEl, currentEl];
		} else {
			cache[currentEl] = index;
		}
	}

	return false;
};
