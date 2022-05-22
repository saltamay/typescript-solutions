import { Graph } from "../graph";
import { GraphNode } from "../../node/graph-node";
import {bfsSearch} from "../bfsSearch";


test("BFS Search", () => {
  const nodeA = new GraphNode("A");
  const nodeB = new GraphNode("B");
  const nodeC = new GraphNode("C");
  const nodeList = [nodeA, nodeB, nodeC];

  const graph = new Graph(nodeList);
  graph.addEdge(nodeA, nodeB);
  graph.addEdge(nodeA, nodeC);

  expect(bfsSearch(nodeA, "A")).toEqual(nodeA);
  expect(bfsSearch(nodeA, "B")).toEqual(nodeB);
  expect(bfsSearch(nodeA, "C")).toEqual(nodeC);
  expect(bfsSearch(nodeA, "D")).toBe(undefined);

  graph.removeEdge(nodeA, nodeC);

  expect(bfsSearch(nodeA, "A")).toEqual(nodeA);
  expect(bfsSearch(nodeA, "B")).toEqual(nodeB);
  expect(bfsSearch(nodeA, "C")).toEqual(undefined);
});
