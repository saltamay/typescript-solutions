import { isSequence } from './isSequence';

test('Is Sequence', () => {
  let s = 'abc';
  let t = 'ahbgdc';

  expect(isSequence(s, t)).toBe(true);

  s = 'axc';
  t = 'ahbgdc';

  expect(isSequence(s, t)).toBe(false);
});
