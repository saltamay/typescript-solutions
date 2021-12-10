export const findSubarrayAverages = (arr: number[], k: number): number[] => {
	const results = [];
	let total = 0;
	let start = 0;
	let end = 0;

	for (end = 0; end < arr.length; end++) {
		total += arr[end];

		if (end >= k - 1) {
			results.push(total / k);
			total -= arr[start];
			start++;
		}
	}

	return results;
};
