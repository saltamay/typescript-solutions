import LinkedList from '../../data-structures/LinkedList/LinkedList';
import { sortLinkedList } from './sortLinkedList';

describe('Sort a linkedlist into 0, 1 or 2(s)', () => {
	it('returns null if the input list is null', () => {
		expect(sortLinkedList(null)).toBe(null);
	});

	it('sorts a linkedlist', () => {
		const list = new LinkedList<number>();
		list.append(0);
		list.append(2);
		list.append(0);
		list.append(1);
		list.append(0);
		list.append(2);
		list.append(1);

		const sortedList = sortLinkedList(list);
		expect(sortedList?.toString()).toBe('0,0,0,1,1,2,2');
	});
});
