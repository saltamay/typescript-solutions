import {GraphNode} from "../node/graph-node";

export class Graph<T> {
    private readonly _vertices: GraphNode<T>[];

    constructor(nodes: GraphNode<T>[]) {
        this._vertices = nodes
    }

    get vertices(): GraphNode<T>[] {
        return this._vertices
    }

    addEdge(node1: GraphNode<T>, node2: GraphNode<T>): void {
        if (this.vertices.includes(node1) && this.vertices.includes(node2)) {
            node1.addChild(node2)
            node2.addChild(node1)
        }
    }

    removeEdge(node1: GraphNode<T>, node2: GraphNode<T>): void {
        if (this.vertices.includes(node1) && this.vertices.includes(node2)) {
            node1.removeChild(node2)
            node2.removeChild(node1)
        }
    }
}