import { Stack } from './Stack';

export class MaxStack extends Stack<number> {
  private maxValues: number[];

  constructor() {
    super();
    this.maxValues = [];
  }

  push(val: number): void {
    this.data.push(val);

    const maxValue = this.maxValues.at(-1);
    if (maxValue !== undefined) {
      this.maxValues.push(Math.max(maxValue, val));
    }
  }

  pop(): number | undefined {
    if (this.maxValues.length) this.maxValues.pop();
    return this.data.pop();
  }

  max(): number | undefined {
    return this.maxValues.at(-1);
  }
}
