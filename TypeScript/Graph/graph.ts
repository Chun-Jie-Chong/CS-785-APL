class Graph<T> {
    private vertices: Map<T, Set<T>>;

    constructor() {
        this.vertices = new Map();
    }

    addVertex(vertex: T): void {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, new Set());
        }
    }

    addEdge(from: T, to: T): void {
        if (!this.vertices.has(from) || !this.vertices.has(to)) {
            throw new Error('Vertex does not exist');
        }

        const neighbors = this.vertices.get(from);
        neighbors.add(to);
    }

    getNeighbors(vertex: T): Set<T> {
        if (!this.vertices.has(vertex)) {
            throw new Error('Vertex does not exist');
        }

        return this.vertices.get(vertex);
    }

    hasVertex(vertex: T): boolean {
        return this.vertices.has(vertex);
    }

    hasEdge(from: T, to: T): boolean {
        if (!this.vertices.has(from) || !this.vertices.has(to)) {
            return false;
        }

        const neighbors = this.vertices.get(from);
        return neighbors.has(to);
    }

    removeVertex(vertex: T): void {
        if (!this.vertices.has(vertex)) {
            throw new Error('Vertex does not exist');
        }

        this.vertices.delete(vertex);

        for (const neighbors of this.vertices.values()) {
            neighbors.delete(vertex);
        }
    }

    removeEdge(from: T, to: T): void {
        if (!this.vertices.has(from) || !this.vertices.has(to)) {
            throw new Error('Vertex does not exist');
        }

        const neighbors = this.vertices.get(from);
        neighbors.delete(to);
    }
}