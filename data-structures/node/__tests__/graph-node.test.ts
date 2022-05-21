import { GraphNode } from "../graph-node";

test("GraphNode", () => {
  const graphNode = new GraphNode(1);

  expect(graphNode.value).toBe(1);
  expect(graphNode.children).toEqual([]);

  const firstChild = new GraphNode(2);
  graphNode.addChild(firstChild);

  expect(graphNode.children.includes(firstChild)).toBe(true);

  graphNode.removeChild(firstChild);

  expect(graphNode.children.includes(firstChild)).toBe(false);
});
