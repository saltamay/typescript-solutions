import { isUniqe } from './isUnique';

describe(`
  Function that determines whether all characters 
  in a string are unique or not
`, () => {
	test("should input: 'abcdef' return true", () => {
		const str = 'abcdef';

		expect(isUniqe(str)).toBe(true);
	});

	test("should input: '89%df#$^a&x' return true", () => {
		const str = '89%df#$^a&x';

		expect(isUniqe(str)).toBe(true);
	});

	test("should input: 'abcAdef' return true", () => {
		const str = 'abcAdef';

		expect(isUniqe(str)).toBe(true);
	});

	test("should input: 'abcaef' return false", () => {
		const str = 'abcaef';

		expect(isUniqe(str)).toBe(false);
	});
});
