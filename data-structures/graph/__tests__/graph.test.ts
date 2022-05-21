import {GraphNode} from "../../node/graph-node";
import {Graph} from "../graph";


test("Graph", () => {
    const nodeA = new GraphNode("A")
    const nodeB = new GraphNode("B")
    const nodeC = new GraphNode("C")
    const nodeList = [nodeA, nodeB, nodeC]

    const graph = new Graph(nodeList)

    expect(graph.vertices).toEqual(nodeList)

    graph.addEdge(nodeA, nodeB)

    expect(nodeA.children.includes(nodeB)).toBe(true)
    expect(nodeB.children.includes(nodeA)).toBe(true)
    expect(nodeC.children.includes(nodeA)).toBe(false)
    expect(nodeC.children.includes(nodeB)).toBe(false)

    graph.removeEdge(nodeA, nodeB)

    expect(nodeA.children.includes(nodeB)).toBe(false)
    expect(nodeB.children.includes(nodeA)).toBe(false)
    expect(nodeC.children.includes(nodeA)).toBe(false)
    expect(nodeC.children.includes(nodeB)).toBe(false)
})
