export default class LinkedListNode<T> {
	private _data: T;
	private _next: LinkedListNode<T> | null;

	constructor(data: T, next: LinkedListNode<T> | null = null) {
		this._data = data;
		this._next = next;
	}

	public get data(): T {
		return this._data;
	}

	public get next(): LinkedListNode<T> | null {
		return this._next;
	}

	public set next(next: LinkedListNode<T> | null) {
		this._next = next;
	}

	public toString(cb: Function | null = null): T {
		return cb ? cb(this._data) : `${this._data}`;
	}
}
