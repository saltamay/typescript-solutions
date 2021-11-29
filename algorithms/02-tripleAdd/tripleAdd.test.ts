import tripleAdd from './tripleAdd';

describe('Triple Add', () => {
	test('should return a function that memoize the initial value', () => {
		expect(typeof tripleAdd(10) === 'function').toBe(true);
		expect(tripleAdd(10)(20)(30)).toBe(60);
	});
});
