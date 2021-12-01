export class LRUCache {
	private _capacity: number;
	private _cache: any;
	private _leastRecentlyUsed: string | undefined = undefined;
	private _size: number = 0;

	constructor(capacity: number) {
		this._capacity = capacity;
		this._cache = {};
	}

	public get(key: number): number | unknown {
		if (this._cache[key] !== undefined) {
			this.updateLRU(key);
			return this._cache[key];
		}
		return -1;
	}

	public put(key: number, val: number): void {
		if (this._cache[key] !== undefined) {
			this._cache[key] = val;
			this.updateLRU(key);
			return;
		}
		if (this._size === this._capacity) {
			if (typeof this._leastRecentlyUsed === 'string') {
				delete this._cache[this._leastRecentlyUsed];
				this._size--;
			}
		}
		this._cache[key] = val;
		this.updateLRU(key);
		this._size++;
	}

	private updateLRU(key: number): void {
		if (Object.keys(this._cache).length === 1) {
			this._leastRecentlyUsed = Object.keys(this._cache)[0];
			return;
		}
		this._leastRecentlyUsed = Object.keys(this._cache).filter(
			(cacheKey) => key !== Number(cacheKey)
		)[0];
	}
}
