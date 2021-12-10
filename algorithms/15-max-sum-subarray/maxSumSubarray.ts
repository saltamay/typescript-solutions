export const maxSumSubarray = (arr: number[], k: number): number => {
	let maxSum = Number.MIN_VALUE;
	let kStart = 0;
	let kEnd = 0;
	let kTotal = 0;

	for (kEnd = 0; kEnd < arr.length; kEnd++) {
		kTotal += arr[kEnd];

		if (kEnd >= k - 1) {
			maxSum = Math.max(kTotal, maxSum);
			kTotal -= arr[kStart];
			kStart++;
		}
	}

	return maxSum;
};
