export const binaryGap = (N: number) => {
	const binaryRep = N.toString(2);
	let binaryGap = 0;
	let maxBinaryGap = 0;

	for (let i = 0; i < binaryRep.length; i++) {
		const el = binaryRep.charAt(i);
		if (el === '1') {
			if (binaryGap > maxBinaryGap) maxBinaryGap = binaryGap;
			binaryGap = 0;
		} else {
			binaryGap++;
		}
	}

	return maxBinaryGap;
};
