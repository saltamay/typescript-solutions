import LinkedListNode from '../LinkedListNode/LinkedListNode';

export default class LinkedList<T> {
	private _head: LinkedListNode<T> | null;
	private _tail: LinkedListNode<T> | null;

	constructor() {
		this._head = null;
		this._tail = null;
	}

	public get head(): LinkedListNode<T> | null {
		return this._head;
	}

	private set head(value: LinkedListNode<T> | null) {
		this._head = value;
	}

	public get tail(): LinkedListNode<T> | null {
		return this._tail;
	}

	private set tail(value: LinkedListNode<T> | null) {
		this._tail = value;
	}

	/**
	 * Add a LinkedListNode object to the beginning of the LinkedList
	 */
	public prepend(value: T): LinkedListNode<T> {
		// Make new node to be a head.
		const newNode = new LinkedListNode(value, this.head);
		this.head = newNode;

		// If there is no tail yet let's make new node a tail
		if (!this.tail) {
			this.tail = newNode;
		}

		return newNode;
	}

	/**
	 * Add a LinkedListNode object to the end of the LinkedList.
	 */
	public append(value: T) {
		const newNode = new LinkedListNode(value);

		// If there is no tail yet let's make new node the head and tail.
		if (!this.tail) {
			this.head = newNode;
			this.tail = newNode;

			return newNode;
		}

		// Attach new node to the end of linked list.
		this.tail.next = newNode;
		this.tail = newNode;

		return newNode;
	}

	/**
	 * Get the nth element of the list. Return null if n is out of bound.
	 */
	public get(n: number): LinkedListNode<T> | null {
		let currentNode = this.head;

		for (let i = 0; i < n - 1; i++) {
			if (currentNode !== null) {
				currentNode = currentNode.next;
			} else {
				return null;
			}
		}

		if (currentNode === null) return null;

		return currentNode;
	}

	/**
	 *  Find and remove an item in the LinkedList.
	 */
	public delete(value: T): LinkedListNode<T> | null {
		// If the LinkedList is empty, return null.
		if (!this.head) {
			return null;
		}

		let deletedNode = null;

		if (this.head.data === value) {
			deletedNode = this.head;
			if (this.head === this.tail) {
				this.head = null;
				this.tail = null;
			} else {
				this.head = this.head.next;
			}
			return deletedNode;
		}

		let prevNode = this.head;
		let currentNode = this.head.next;

		while (currentNode) {
			if (currentNode.data === value) {
				deletedNode = currentNode;
				prevNode.next = currentNode.next;
				if (this.tail === currentNode) {
					this.tail = prevNode;
				}
				return deletedNode;
			}
			prevNode = currentNode;
			currentNode = currentNode.next;
		}

		return deletedNode;
	}

	/**
	 * Convert the LinkedList object into a string
	 */
	public toString(): string {
		if (!this.head) return '';

		let str = `${this.head.data}`;
		let currentNode = this.head.next;

		while (currentNode) {
			str += `,${currentNode.data}`;
			currentNode = currentNode.next;
		}

		return str;
	}
}
