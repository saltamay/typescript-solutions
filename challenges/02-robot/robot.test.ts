import { Robot } from './robot';

describe('Robot', () => {
	test('it can move N/S/E/W', () => {
		const grid = Array(3).fill(Array(3).fill('X'));
		const codie = new Robot(grid, [1, 1]);

		codie.move('N', 1);
		expect(codie.coordinates).toEqual([0, 1]);

		codie.move('W', 1);
		expect(codie.coordinates).toEqual([0, 0]);

		codie.move('W', 1);
		expect(codie.coordinates).toEqual([0, 0]);

		codie.move('S', 1);
		expect(codie.coordinates).toEqual([1, 0]);

		codie.move('E', 2);
		expect(codie.coordinates).toEqual([1, 2]);

		codie.move('E', 1);
		expect(codie.coordinates).toEqual([1, 2]);
	});
});
