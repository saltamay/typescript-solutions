export const isUniqe = (str: string): boolean => {
	const charMap: any = {};

	for (let i = 0; i < str.length; i++) {
		const thisChar = str[i];
		if (charMap[thisChar]) {
			return false;
		}
		charMap[thisChar] = true;
	}

	return true;
};
