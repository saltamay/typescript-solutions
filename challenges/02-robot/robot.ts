/*
Make a robot take in directions move across a 3x3 grid. 
The directions were turn left, turn right, and move forward.
*/

export class Robot {
	private _coordinates: number[];
	private _grid: string[][];

	constructor(grid: string[][], initialCoordinates: number[]) {
		this._grid = grid;
		this._coordinates = initialCoordinates;
	}

	public get coordinates() {
		return this._coordinates;
	}

	private canMove(direction: string, step: number): boolean {
		const [x, y] = this._coordinates;
		switch (direction) {
			case 'n':
				return this._grid[x - step][y] !== undefined;
			case 's':
				return this._grid[x + step][y] !== undefined;
			case 'e':
				return this._grid[x][y + step] !== undefined;
			case 'w':
				return this._grid[x][y - step] !== undefined;
			default:
				return false;
		}
	}

	public move(direction: string, step: number): void {
		direction = direction.toLowerCase();

		if (!this.canMove(direction, step)) {
			console.log('Not allowed');
			return;
		}

		switch (direction) {
			case 'n':
				this._coordinates[0] = this._coordinates[0] - step;
				break;
			case 's':
				this._coordinates[0] = this._coordinates[0] + step;
				break;
			case 'e':
				this._coordinates[1] = this._coordinates[1] + step;
				break;
			case 'w':
				this._coordinates[1] = this._coordinates[1] - step;
			default:
				break;
		}
	}
}
