export function isSequence(s: string, t: string): boolean {
  let idx = 0;

  for (const char of t) {
    if (char === s[idx]) idx++;
  }

  return idx === s.length;
}
