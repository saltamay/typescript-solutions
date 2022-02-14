import LinkedList from '../../data-structures/LinkedList/LinkedList';

export const getOddEvenLinkedList = (
	list: LinkedList<number>
): LinkedList<number>[] => {
	const odd = new LinkedList<number>();
	const even = new LinkedList<number>();

	let currentNode = list.head;

	while (currentNode) {
		const data = currentNode.data;
		data % 2 === 0 ? even.append(data) : odd.append(data);
		currentNode = currentNode.next;
	}

	return [odd, even];
};
