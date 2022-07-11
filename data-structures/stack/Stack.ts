import { StackADT } from './StackADT';

export class Stack<T> extends StackADT<T> {
  constructor() {
    super();
  }

  push(val: T): void {
    this.data.push(val);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  peek(): T | undefined {
    return this.data.at(-1);
  }
}
