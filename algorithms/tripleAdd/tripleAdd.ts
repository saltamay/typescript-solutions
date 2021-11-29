/**
 * tripleAdd(10)(20)(30);
 * returns total of all 3 numbers added together
 */

export default function tripleAdd(num1: number): Function {
	return function (num2: number) {
		return function (num3: number) {
			return num1 + num2 + num3;
		};
	};
}
