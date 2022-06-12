/**
 * Is Subsequence
 * https://leetcode.com/problems/is-subsequence/
 */

export function isSubsequence(s: string, t: string): boolean {
  let idx = 0;

  for (const char of t) {
    if (char === s[idx]) idx++;
  }

  return idx === s.length;
}
