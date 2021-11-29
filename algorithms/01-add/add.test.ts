import add from './add';

describe('Add', () => {
	describe('Calculates the sum of two numbers', () => {
		it('should return 3 given the parameters 1 and 2', () => {
			expect(add(1, 2)).toBe(3);
		});

		it('should return 0 given the parameters 1 and -1', () => {
			expect(add(1, -1)).toBe(0);
		});
	});

	describe('Calculates the sum of all numbers regardless of # of params', () => {
		it('should return 15 given the parameters: 1, 2, 3, 4, 5', () => {
			// arrange
			const data = [1, 2, 3, 4, 5];

			// act
			const result = add(...data);

			// assert
			expect(result).toBe(15);
		});

		it('should return -3 given the parameters: 0, -1, -2', () => {
			const data = [0, -1, -2];
			const result = add(...data);
			expect(result).toBe(-3);
		});
	});
});
