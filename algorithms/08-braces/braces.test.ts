import { braces } from './braces';

test('it should check if the braces are correctly matched - ["(([]){})"]', () => {
	const expressions = ['(([]){})'];

	expect(braces(expressions)).toEqual([1]);
});

test('it should check if the braces are correctly matched - ["("]', () => {
	const expressions = ['('];

	expect(braces(expressions)).toEqual([0]);
});

test('it should check if the braces are correctly matched - ["([)"]', () => {
	const expressions = ['([)'];

	expect(braces(expressions)).toEqual([0]);
});

test('it should check if the braces are correctly matched - ["()"]', () => {
	const expressions = ['()'];

	expect(braces(expressions)).toEqual([1]);
});

test('it should check if the braces are correctly matched - ["()[]{}"]', () => {
	const expressions = ['()[]{}'];

	expect(braces(expressions)).toEqual([1]);
});

test('it should check if the braces are correctly matched - ["(]"]', () => {
	const expressions = ['(]'];

	expect(braces(expressions)).toEqual([0]);
});

test('it should check if the braces are correctly matched - ["([)]"]', () => {
	const expressions = ['([)]'];

	expect(braces(expressions)).toEqual([0]);
});

test('it should check if the braces are correctly matched - ["{[]}"]', () => {
	const expressions = ['{[]}'];

	expect(braces(expressions)).toEqual([1]);
});

test("it should check if the braces are correctly matched - [')(){}', '[]({})', '([])', '{()[]}', '([)]]']", () => {
	const expressions = [')(){}', '[]({})', '([])', '{()[]}', '([)]]'];

	expect(braces(expressions)).toEqual([0, 1, 1, 1, 0]);
});

test('it should check if the braces are correctly matched - ]', () => {
	const expressions = [']'];

	expect(braces(expressions)).toEqual([0]);
});
