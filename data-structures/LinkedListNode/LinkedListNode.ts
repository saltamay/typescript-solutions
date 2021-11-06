export default class LinkedListNode<T> {
	private _data: T;
	private _next: LinkedListNode<T> | null;

	constructor(data: T, next: LinkedListNode<T> | null = null) {
		this._data = data;
		this._next = next;
	}

	get data(): T {
		return this._data;
	}

	get next(): LinkedListNode<T> | null {
		return this._next;
	}

	set next(next: LinkedListNode<T> | null) {
		this._next = next;
	}
}
