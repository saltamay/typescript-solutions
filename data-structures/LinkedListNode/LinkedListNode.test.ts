import LinkedListNode from './LinkedListNode';

describe('Linked List Node', () => {
	describe('It can be instanciated with valid number or string values', () => {
		it('can be instanciated with a valid "number" value', () => {
			const linkedListNode = new LinkedListNode(1);
			expect(linkedListNode.data).toBe(1);
		});

		it('can be instanciated with a valid "string" value', () => {
			const linkedListNode = new LinkedListNode('1');
			expect(linkedListNode.data).toBe('1');
		});
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

	it('adds a pointer to the next node', () => {
		const firstNode = new LinkedListNode(1);
		const secondNode = new LinkedListNode(2);

		firstNode.next = secondNode;

		expect(firstNode.next).toEqual(secondNode);
	});
});
