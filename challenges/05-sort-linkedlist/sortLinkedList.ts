import LinkedList from '../../data-structures/LinkedList/LinkedList';

export const sortLinkedList = (
	list: LinkedList<number> | null
): LinkedList<number> | null => {
	if (list === null) return null;

	const list0 = new LinkedList<number>();
	const list1 = new LinkedList<number>();
	const list2 = new LinkedList<number>();

	let currentNode = list.head;

	while (currentNode) {
		switch (currentNode.data) {
			case 0:
				list0.append(currentNode.data);
				break;
			case 1:
				list1.append(currentNode.data);
				break;
			case 2:
				list2.append(currentNode.data);
				break;
			default:
				break;
		}
		currentNode = currentNode.next;
	}

	const result = new LinkedList<number>();
	appendLinkedList(list0, result);
	appendLinkedList(list1, result);
	appendLinkedList(list2, result);

	return result;
};

const appendLinkedList = (
	list: LinkedList<number>,
	originalList: LinkedList<number>
): void => {
	let currentNode = list.head;

	while (currentNode) {
		originalList.append(currentNode.data);
		currentNode = currentNode.next;
	}
};
