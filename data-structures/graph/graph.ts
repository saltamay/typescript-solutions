import {GraphNode} from "../node/graph-node";

export class Graph<T> {
    private readonly _nodes: GraphNode<T>[];

    constructor(nodes: GraphNode<T>[]) {
        this._nodes = nodes
    }

    get nodes(): GraphNode<T>[] {
        return this._nodes
    }

    addEdge(node1: GraphNode<T>, node2: GraphNode<T>): void {
        if (this.nodes.includes(node1) && this.nodes.includes(node2)) {
            node1.addChild(node2)
            node2.addChild(node1)
        }
    }

    removeEdge(node1: GraphNode<T>, node2: GraphNode<T>): void {
        if (this.nodes.includes(node1) && this.nodes.includes(node2)) {
            node1.removeChild(node2)
            node2.removeChild(node1)
        }
    }
}