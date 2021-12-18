import { binaryGap } from './Codility_binaryGap';

test('N = 561892 should return 3', () => {
	expect(binaryGap(561892)).toBe(3);
});

test('N = 74901729 should return 4', () => {
	expect(binaryGap(74901729)).toBe(4);
});

test('N = 1376796946 should return 5', () => {
	expect(binaryGap(1376796946)).toBe(5);
});
