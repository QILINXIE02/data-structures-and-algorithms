class Graph {
  constructor() {
      this.adjacencyList = new Map();
  }

  addVertex(vertex) {
      this.adjacencyList.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
      if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
          this.adjacencyList.get(vertex1).push(vertex2);
          this.adjacencyList.get(vertex2).push(vertex1); 
      }
  }

  breadthFirst(startNode) {
      const queue = [startNode];
      const visited = new Set();
      const result = [];

      if (!this.adjacencyList.has(startNode)) {
          return result;
      }

      while (queue.length > 0) {
          const currentNode = queue.shift();
          if (!visited.has(currentNode)) {
              visited.add(currentNode);
              result.push(currentNode);
              this.adjacencyList.get(currentNode).forEach(neighbor => {
                  if (!visited.has(neighbor)) {
                      queue.push(neighbor);
                  }
              });
          }
      }
      return result;
  }
}

module.exports = Graph;
