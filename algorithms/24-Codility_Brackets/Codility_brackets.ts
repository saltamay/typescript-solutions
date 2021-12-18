const bracketPairs: any = {
	'{': '}',
	'[': ']',
	'(': ')',
};

const openingBrackests = '{[(';
const closingBrackets = ']})';

export const brackets = (S: string): number => {
	const bracketsStack = [];

	for (let i = 0; i < S.length; i++) {
		const char = S.charAt(i);
		if (openingBrackests.includes(char)) {
			bracketsStack.push(char);
		} else if (closingBrackets.includes(char)) {
			const charAtTop = bracketsStack[bracketsStack.length - 1];
			if (bracketPairs[charAtTop] !== char) {
				return 0;
			} else {
				bracketsStack.pop();
			}
		}
	}

	if (!bracketsStack.length) {
		return 1;
	}

	return 0;
};
