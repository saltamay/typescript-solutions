import { GraphNode } from "../../node/graph-node";
import { Graph } from "../graph";
import { dfsSearch } from "../dfsSearch";
import { dfsSearch as dfsSearchRecursion } from "../dfsSearchRecursion"

let nodeA: GraphNode<string>
let nodeB: GraphNode<string>
let nodeC: GraphNode<string>
let graph: Graph<string>;
let nodeList: GraphNode<string>[]

beforeEach(() => {
  nodeA = new GraphNode("A");
  nodeB = new GraphNode("B");
  nodeC = new GraphNode("C");
  nodeList = [nodeA, nodeB, nodeC];

  graph = new Graph(nodeList);
  graph.addEdge(nodeA, nodeB);
  graph.addEdge(nodeA, nodeC);
})

test("DFS Search", () => {
  expect(dfsSearch(nodeA, "A")).toEqual(nodeA);
  expect(dfsSearch(nodeA, "B")).toEqual(nodeB);
  expect(dfsSearch(nodeA, "C")).toEqual(nodeC);
  expect(dfsSearch(nodeA, "D")).toBe(undefined);

  graph.removeEdge(nodeA, nodeC)

  expect(dfsSearch(nodeA, "A")).toEqual(nodeA);
  expect(dfsSearch(nodeA, "B")).toEqual(nodeB);
  expect(dfsSearch(nodeA, "C")).toEqual(undefined);
});

test("DFS Search Recursive", () => {
  expect(dfsSearchRecursion(nodeA, "A")).toEqual(nodeA);
  expect(dfsSearchRecursion(nodeA, "B")).toEqual(nodeB);
  expect(dfsSearchRecursion(nodeA, "C")).toEqual(nodeC);
  expect(dfsSearchRecursion(nodeA, "D")).toBe(undefined);

  graph.removeEdge(nodeA, nodeC)

  expect(dfsSearchRecursion(nodeA, "A")).toEqual(nodeA);
  expect(dfsSearchRecursion(nodeA, "B")).toEqual(nodeB);
  expect(dfsSearchRecursion(nodeA, "C")).toEqual(undefined);
});