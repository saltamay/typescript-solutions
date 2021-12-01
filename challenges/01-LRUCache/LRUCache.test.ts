import { LRUCache } from './LRUCache';

describe('LRUCache', () => {
	test('01: it follows the constraints of a Least Recently Used (LRU) cache', () => {
		const lruCache = new LRUCache(2);

		lruCache.put(1, 1);
		lruCache.put(2, 2);
		expect(lruCache.get(1)).toBe(1);

		lruCache.put(3, 3);
		expect(lruCache.get(2)).toBe(-1);

		lruCache.put(4, 4);
		expect(lruCache.get(1)).toBe(-1);
		expect(lruCache.get(3)).toBe(3);
		expect(lruCache.get(4)).toBe(4);
	});

	test('02: it follows the constraints of a Least Recently Used (LRU) cache', () => {
		const lruCache = new LRUCache(2);

		lruCache.put(1, 0);
		lruCache.put(2, 2);
		expect(lruCache.get(1)).toBe(0);

		lruCache.put(3, 3);
		expect(lruCache.get(2)).toBe(-1);

		lruCache.put(4, 4);
		expect(lruCache.get(1)).toBe(-1);
		expect(lruCache.get(3)).toBe(3);
		expect(lruCache.get(4)).toBe(4);
	});

	test('03: it follows the constraints of a Least Recently Used (LRU) cache', () => {
		const lruCache = new LRUCache(1);

		lruCache.put(2, 1);
		expect(lruCache.get(2)).toBe(1);

		lruCache.put(3, 2);
		expect(lruCache.get(2)).toBe(-1);
		expect(lruCache.get(3)).toBe(2);
	});

	test('04: it follows the constraints of a Least Recently Used (LRU) cache', () => {
		const lruCache = new LRUCache(2);
		lruCache.put(2, 1);
		lruCache.put(1, 1);
		lruCache.put(2, 3);
		lruCache.put(4, 1);
		expect(lruCache.get(1)).toBe(-1);
		expect(lruCache.get(2)).toBe(3);
	});

	test('05: it follows the constraints of a Least Recently Used (LRU) cache', () => {
		const lruCache = new LRUCache(2);
		expect(lruCache.get(2)).toBe(-1);
		lruCache.put(2, 6);
		expect(lruCache.get(1)).toBe(-1);
		lruCache.put(1, 5);
		lruCache.put(1, 2);
		expect(lruCache.get(1)).toBe(2);
		expect(lruCache.get(2)).toBe(6);
	});
});
