export const countDistinctSlices = (A: number[]): number => {
	let left = 0;
	let right = 0;
	let count = 0;
	let cache: any = {};

	while (right < A.length && left < A.length) {
		if (!cache[A[right]]) {
			cache[A[right]] = true;
			count += right - left + 1;
			right++;
		} else {
			cache[A[left]] = false;
			left++;
		}
	}
	return count;
};
