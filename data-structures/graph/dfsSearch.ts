import { GraphNode } from "../node/graph-node";

export function dfsSearch<T>(
  root: GraphNode<T>,
  target: T
): GraphNode<T> | undefined {
  let stack: GraphNode<T>[] = [root];
  const visited = new Set<GraphNode<T>>();

  while (stack.length > 0) {
    const current_node = stack.pop();

    if (!current_node) return;

    visited.add(current_node);

    if (current_node?.value === target) return current_node;

    stack = [
      ...stack,
      ...current_node.children.filter((child) => !visited.has(child)),
    ];
  }

  return;
}
