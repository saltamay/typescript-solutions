export const maxCounters = (N: number, A: number[]): number[] => {
	let counters = Array(N).fill(0);
	let maxCounter = 0;
	let increaseBy = 0;

	A.forEach((operation) => {
		if (operation >= 1 && operation <= N) {
			const index = operation - 1;
			if (counters[index] < increaseBy) {
				counters[index] = 1 + increaseBy;
			} else {
				counters[index] += 1;
			}
			if (counters[index] > maxCounter) maxCounter = counters[index];
		} else {
			increaseBy = maxCounter;
		}
	});

	for (let i = 0; i < counters.length; i++) {
		const counter = counters[i];
		if (counter < increaseBy) counters[i] = increaseBy;
	}

	return counters;
};
