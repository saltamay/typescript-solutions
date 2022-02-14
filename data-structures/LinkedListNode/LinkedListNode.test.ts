import LinkedListNode from './LinkedListNode';

describe('Linked List Node', () => {
	it('can be instanciated with a valid "number" value', () => {
		const linkedListNode = new LinkedListNode(1);
		expect(linkedListNode.data).toBe(1);
	});

	it('can be instanciated with a valid "string" value', () => {
		const linkedListNode = new LinkedListNode('1');
		expect(linkedListNode.data).toBe('1');
	});

	it('can be instanciated without providing the next value', () => {
		const linkedListNode = new LinkedListNode('1');
		expect(linkedListNode.next).toBe(null);
	});

	it('points to the next node when provided', () => {
		const secondNode = new LinkedListNode(1);
		const firstNode = new LinkedListNode(0, secondNode);

		expect(firstNode.next).toEqual(secondNode);
	});

	it('prints out the string representation of its value', () => {
		const node = new LinkedListNode(1);
		expect(node.toString()).toBe('1');
	});
});
