const pairs: any = {
	'(': ')',
	'[': ']',
	'{': '}',
};

export const braces = (arr: string[]): number[] => {
	let results: any = [];

	arr.forEach((item) => {
		let left = 0;
		let right = item.length - 1;
		let result = 1;

		if (item.length % 2 === 1) result = 0;

		while (left < right) {
			const leftEl = pairs[item[left]];
			const rightEl = item[right];

			if (leftEl !== rightEl) {
				const leftNeighbor = item[left + 1];
				if (leftEl === leftNeighbor) {
					left += 2;
				} else {
					result = 0;
					left++;
					right--;
				}
			} else {
				left++;
				right--;
			}
		}

		results.push(result);
	});

	return results;
};

// console.log(braces([')(){}', '[]({})', '([])', '{()[]}', '([)]]']));
