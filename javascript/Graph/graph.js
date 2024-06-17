class Graph {
  constructor() {
      this.adjacencyList = new Map();
  }

  addVertex(value) {
      if (!this.adjacencyList.has(value)) {
          this.adjacencyList.set(value, []);
      }
      return value;
  }

  addEdge(vertex1, vertex2, weight = 0) {
      if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
          throw new Error('Vertices not found in the graph.');
      }

      const neighbors1 = this.adjacencyList.get(vertex1);
      neighbors1.push({ vertex: vertex2, weight });
  }

  getVertices() {
      return [...this.adjacencyList.keys()];
  }

  getNeighbors(vertex) {
      if (!this.adjacencyList.has(vertex)) {
          throw new Error('Vertex not found in the graph.');
      }
      return this.adjacencyList.get(vertex);
  }

  size() {
      return this.adjacencyList.size;
  }
}

module.exports = Graph;
