export abstract class StackADT<T> {
  protected data: T[];

  constructor() {
    this.data = [];
  }

  abstract push(val: T): void;
  abstract pop(): T | undefined;
  abstract peek(): T | undefined;
}
