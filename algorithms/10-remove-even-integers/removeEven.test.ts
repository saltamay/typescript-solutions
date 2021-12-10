import { removeEven } from './removeEven';

test('it should remove even numbers from an array - []', () => {
	const arr: [] = [];
	expect(removeEven(arr)).toEqual([]);
});

test('it should remove even numbers from an array - [1, 3, 5]', () => {
	const arr = [1, 3, 5];
	expect(removeEven(arr)).toEqual([1, 3, 5]);
});

test('it should remove even numbers from an array - [2, 4, 6]', () => {
	const arr = [2, 4, 6];
	expect(removeEven(arr)).toEqual([]);
});

test('it should remove even numbers from an array - [1, 2, 4, 5, 10, 6, 3]', () => {
	const arr = [1, 2, 4, 5, 10, 6, 3];

	expect(removeEven(arr)).toEqual([1, 5, 3]);
});
