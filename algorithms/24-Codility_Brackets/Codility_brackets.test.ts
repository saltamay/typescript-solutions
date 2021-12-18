import { brackets } from './Codility_brackets';

test("brackets('({[()()]})') should return 1", () => {
	expect(brackets('({[()()]})')).toBe(1);
});

test("brackets('([)()]') should return 0", () => {
	expect(brackets('([)()]')).toBe(0);
});

test("brackets('') should return 1", () => {
	expect(brackets('')).toBe(1);
});

test("brackets('VW') should return 1", () => {
	expect(brackets('VW')).toBe(1);
});

test("brackets('[VW]') should return 1", () => {
	expect(brackets('[VW]')).toBe(1);
});
