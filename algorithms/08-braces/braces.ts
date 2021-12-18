const pairs: any = {
	'(': ')',
	'[': ']',
	'{': '}',
};

const openingBraces = '([{';
const closingBraces = ')]}';

export const braces = (arr: string[]): number[] => {
	let results: number[] = [];

	arr.forEach((str) => {
		const openStack = [];

		for (let i = 0; i < str.length; i++) {
			const char = str.charAt(i);
			if (openingBraces.includes(char)) {
				openStack.push(char);
			} else if (closingBraces.includes(char)) {
				const lastItem = openStack[openStack.length - 1];
				if (pairs[lastItem] !== char) {
					results.push(0);
					return;
				} else {
					openStack.pop();
				}
			}
		}

		if (!openStack.length) {
			results.push(1);
		} else {
			results.push(0);
		}
	});

	return results;
};

// const expressions = [']'];
// braces(expressions);
