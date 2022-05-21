export class GraphNode<T> {
  private readonly _value: T;
  private _children: GraphNode<T>[];

  constructor(value: T) {
    this._value = value;
    this._children = [];
  }

  get value(): T {
    return this._value;
  }

  get children(): GraphNode<T>[] {
    return this._children;
  }

  private set children(new_children: GraphNode<T>[]) {
    this._children = new_children;
  }

  addChild(new_node: GraphNode<T>): void {
    if (this.isChild(new_node)) return;

    this.children.push(new_node);
  }

  removeChild(node: GraphNode<T>): void {
    if (!this.isChild(node)) return;

    this.children = this.children.filter((child) => child != node);
  }

  private isChild(node: GraphNode<T>): boolean {
    return this.children.includes(node);
  }
}
