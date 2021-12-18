import { maxCounters } from './Codility_maxCounters';

test('maxCounters(5, [3, 4, 4, 6, 1, 4, 4]) should return [3, 2, 2, 4, 2]', () => {
	expect(maxCounters(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);
});
