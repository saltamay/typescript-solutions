import { maxProfit } from './Codility_maxProfit';

test(`
  maxProfit([23171, 21011, 21123, 21366, 21013, 21367]) 
  should return 354
`, () => {
	expect(maxProfit([23171, 21011, 21123, 21366, 21013, 21367])).toBe(356);
});

test(`
  maxProfit([23171, 21011, 21000, 20995, 20990, 20600]) 
  should return 0
`, () => {
	expect(maxProfit([23171, 21011, 21000, 20995, 20990, 20600])).toBe(0);
});

test('maxProfit([5]) should return 0', () => {
	expect(maxProfit([5])).toBe(0);
});

test('maxProfit([]) should return 0', () => {
	expect(maxProfit([])).toBe(0);
});
