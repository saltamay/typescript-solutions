export const fish = (A: number[], B: number[]): number => {
	let aliveCount = 0;
	const fishStack: any = [];

	for (let i = 0; i < B.length; i++) {
		const direction = B[i];
		const size = A[i];

		if (direction === 1) {
			fishStack.push(size);
		} else {
			let upstreamSize = fishStack.length ? fishStack.pop() : -1;

			while (upstreamSize !== -1 && upstreamSize < size) {
				upstreamSize = fishStack.length ? fishStack.pop() : -1;
			}

			if (upstreamSize === -1) {
				aliveCount++;
			} else {
				fishStack.push(upstreamSize);
			}
		}
	}

	return aliveCount + fishStack.length;
};
