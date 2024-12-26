class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    getEdges() {
        const edges = [];
        const seenEdges = new Set();
        for (let vertex in this.adjacencyList) {
            this.adjacencyList[vertex].forEach(neighbor => {
                const edge = [vertex, neighbor].sort().join('-');
                if (!seenEdges.has(edge)) {
                    edges.push({ from: vertex, to: neighbor });
                    seenEdges.add(edge);
                }
            });
        }
        return edges;
    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
        }
    }

}

modules.export = Graph;

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('E', 'A');
graph.addEdge('E', 'B');
graph.addEdge('E', 'C');
graph.addEdge('E', 'D');

const nodes = new vis.DataSet([
    { id: 'A', label: 'A' },
    { id: 'B', label: 'B' },
    { id: 'C', label: 'C' },
    { id: 'D', label: 'D' },
    { id: 'E', label: 'E' }
]);

const edges = new vis.DataSet(graph.getEdges());

const container = document.getElementById('mynetwork');
const data = {
    nodes: nodes,
    edges: edges
};
const options = {};
const network = new vis.Network(container, data, options);