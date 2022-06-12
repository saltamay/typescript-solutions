import { isSubsequence } from './isSubsequence';

test('Is Sequence', () => {
  let s = 'abc';
  let t = 'ahbgdc';

  expect(isSubsequence(s, t)).toBe(true);

  s = 'axc';
  t = 'ahbgdc';

  expect(isSubsequence(s, t)).toBe(false);
});
