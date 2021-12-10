export const maxDeviation = (arr: number[], k: number): number => {
	const deviations = [];
	let kStart = 0;
	let kEnd = 0;

	for (kEnd = 0; kEnd < arr.length; kEnd++) {
		if (kEnd >= k - 1) {
			const kArr: number[] = arr.slice(kStart, kEnd + 1);
			deviations.push(Math.max(...kArr) - Math.min(...kArr));
			kStart++;
		}
	}

	return Math.max(...deviations);
};
