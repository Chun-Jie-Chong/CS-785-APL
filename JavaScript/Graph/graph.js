class Graph {
    constructor() {
        this.vertices = new Map();
    }

    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, new Set());
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
            this.vertices.get(vertex1).add(vertex2);
            this.vertices.get(vertex2).add(vertex1);
        }
    }

    removeVertex(vertex) {
        if (this.vertices.has(vertex)) {
            this.vertices.delete(vertex);
            this.vertices.forEach((adjacentVertices) => {
                adjacentVertices.delete(vertex);
            });
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
            this.vertices.get(vertex1).delete(vertex2);
            this.vertices.get(vertex2).delete(vertex1);
        }
    }

    getAdjacentVertices(vertex) {
        if (this.vertices.has(vertex)) {
            return Array.from(this.vertices.get(vertex));
        }
        return [];
    }

    getVertices() {
        return Array.from(this.vertices.keys());
    }
}