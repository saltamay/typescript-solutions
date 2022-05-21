import { GraphNode } from "../node/graph-node";

export function dfsSearch<T>(
  root: GraphNode<T>,
  target: T
): GraphNode<T> | undefined {
  const visited = new Set<GraphNode<T>>();

  return dfsSearchRecursion(root, target, visited)
}

function dfsSearchRecursion<T>(
  node: GraphNode<T>,
  target: T,
  visited: Set<GraphNode<T>>
): GraphNode<T> | undefined {
  if (node.value === target) return node

  let result: GraphNode<T> | undefined;
  visited.add(node)

  for (const child of node.children) {
    if (!visited.has(child)) {
      result = dfsSearchRecursion(child, target, visited)

       // Once the match is found, no more recurse
      if (result) return result
    }
  }

  return result
}