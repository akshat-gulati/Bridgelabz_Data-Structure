class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
        }
    }

    getEdges() {
        const edges = [];
        for (let vertex in this.adjacencyList) {
            this.adjacencyList[vertex].forEach(neighbor => {
                edges.push({ from: vertex, to: neighbor });
            });
        }
        return edges;
    }

    displayGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");


graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "E");
graph.addEdge("A", "D");
graph.addEdge("C", "E");
graph.addEdge("E", "D");
graph.addEdge("D", "B");
graph.addEdge("B", "C");


graph.displayGraph();

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
const options = {
    edges: {
        arrows: {
            to: { enabled: true, scaleFactor: 1 }
        }
    }
};
const network = new vis.Network(container, data, options);