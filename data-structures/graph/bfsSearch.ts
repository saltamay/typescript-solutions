import { GraphNode } from "../node/graph-node";

export function bfsSearch<T>(
  root: GraphNode<T>,
  target: T
): GraphNode<T> | undefined {
  let queue = [root];
  const visited = new Set<GraphNode<T>>();

  while (queue.length > 0) {
    const current_node = queue.shift();

    if (!current_node) return;

    if (current_node.value === target) return current_node;

    visited.add(current_node);
    queue = [
      ...queue,
      ...current_node.children.filter((child) => !visited.has(child)),
    ];
  }

  return;
}
