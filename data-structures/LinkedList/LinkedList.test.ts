import LinkedList from './LinkedList';

describe('LinkedList', () => {
	let list: LinkedList<number>;

	beforeEach(() => {
		list = new LinkedList<number>();
	});

	it('starts empty', () => {
		expect(list.head).toBe(null);
		expect(list.tail).toBe(null);
	});

	it('inserts elements first position empty list', () => {
		list.prepend(1);
		expect(list.head).not.toBe(null);
		expect(list.head?.data).toBe(1);
		expect(list.head?.next).toBe(null);
		expect(list.tail?.data).toBe(1);
	});

	it('inserts elements first position not empty list', () => {
		list.prepend(1);
		list.prepend(0);
		expect(list.head?.data).toBe(0);
		expect(list.head?.next?.data).toBe(1);
		expect(list.tail?.data).toBe(1);
	});

	it('appends elements', () => {
		list.append(1);
		expect(list.head).not.toBe(null);
		expect(list.head?.data).toBe(1);

		list.append(2);
		expect(list.head?.data).toBe(1);
		expect(list.head?.next).not.toBe(null);
		expect(list.head?.next?.data).toBe(2);
	});

	it('returns nth element of the list', () => {
		list.append(10);
		list.append(20);
		list.append(30);

		expect(list.get(1)?.data).toBe(10);
		expect(list.get(2)?.data).toBe(20);
		expect(list.get(3)?.data).toBe(30);
	});

	it('returns null if n is out of bounds', () => {
		list.append(10);
		list.append(20);
		list.append(30);

		expect(list.get(4)).toBe(null);
	});

	it('deletes valid elements', () => {
		list.append(1);
		list.append(2);
		list.append(3);

		list.delete(3);
		expect(list.tail).not.toBe(null);
		expect(list.tail?.data).toBe(2);

		list.append(3);
		list.delete(2);
		expect(list.tail).not.toBe(null);
		expect(list.tail?.data).toBe(3);

		list.delete(1);
		expect(list.tail).not.toBe(null);
		expect(list.tail?.data).toBe(3);
		expect(list.head).not.toBe(null);
		expect(list.head?.data).toBe(3);

		list.delete(3);
		expect(list.head).toBe(null);
		expect(list.tail).toBe(null);
	});

	it('returns null when attempting to delete an invalid element', () => {
		list.append(1);
		list.append(2);
		list.append(3);

		const deletedNode = list.delete(4);
		expect(deletedNode).toBe(null);
	});
});
