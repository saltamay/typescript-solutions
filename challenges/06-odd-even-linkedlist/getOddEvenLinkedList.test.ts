import LinkedList from '../../data-structures/LinkedList/LinkedList';
import { getOddEvenLinkedList } from './getOddEvenLinkedLists';

test('Seperates a linkedlist two list that contain odd and even nodes respectively', () => {
	const list = new LinkedList<number>();
	list.append(1);
	list.append(2);
	list.append(3);
	list.append(4);
	list.append(5);

	const result = getOddEvenLinkedList(list);
	expect(result[0].toString()).toBe('1,3,5');
	expect(result[1].toString()).toBe('2,4');
});
