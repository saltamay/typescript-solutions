import { GraphNode } from "../../node/graph-node";
import { Graph } from "../graph";
import { dfsSearch } from "../dfsSearch";

test("DFS Search", () => {
  const nodeA = new GraphNode("A");
  const nodeB = new GraphNode("B");
  const nodeC = new GraphNode("C");
  const nodeList = [nodeA, nodeB, nodeC];

  const graph = new Graph(nodeList);

  expect(graph.vertices).toEqual(nodeList);

  graph.addEdge(nodeA, nodeB);
  graph.addEdge(nodeA, nodeC);

  expect(dfsSearch(nodeA, "A")).toEqual(nodeA);
  expect(dfsSearch(nodeA, "B")).toEqual(nodeB);
  expect(dfsSearch(nodeA, "C")).toEqual(nodeC);
  expect(dfsSearch(nodeA, "D")).toBe(undefined);

  graph.removeEdge(nodeA, nodeC)

  expect(dfsSearch(nodeA, "A")).toEqual(nodeA);
  expect(dfsSearch(nodeA, "B")).toEqual(nodeB);
  expect(dfsSearch(nodeA, "C")).toEqual(undefined);
});