import { tally } from './tallyWithBundles';

describe('Tally with bundles', () => {
	test('01 it should calculate the total with bundle prices', () => {
		expect(tally(['2022-06-01,soda'])).toBe(2.5);
	});

	test('02 it should calculate the total with bundle prices', () => {
		expect(
			tally([
				'2021-11-15,popcorn',
				'2021-11-15,popcorn',
				'2021-11-15,soda',
				'2021-11-15,soda',
			])
		).toBe(18);
	});

	test('03 it should calculate the total with bundle prices', () => {
		expect(
			tally([
				'2019-12-29,popcorn',
				'2020-01-03,popcorn',
				'2020-01-03,soda',
				'2020-01-03,soda',
				'2020-02-22,popcorn',
				'2020-02-22,soda',
			])
		).toBe(27.5);
	});

	test('03 it should calculate the total with bundle prices', () => {
		expect(
			tally([
				'2019-12-29,soda',
				'2020-01-03,popcorn',
				'2020-01-03,soda',
				'2020-01-03,soda',
				'2020-02-22,popcorn',
				'2020-02-22,soda',
			])
		).toBe(23);
	});
});
