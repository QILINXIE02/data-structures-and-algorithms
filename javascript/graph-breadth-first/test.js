const Graph = require('./graph-breadth-first');

describe('Graph Breadth-First Traversal', () => {
    let graph;

    beforeEach(() => {
        graph = new Graph();
        graph.addVertex('Pandora');
        graph.addVertex('Arendelle');
        graph.addVertex('Metroville');
        graph.addVertex('Monstropolis');
        graph.addVertex('Narnia');
        graph.addVertex('Naboo');

        graph.addEdge('Pandora', 'Arendelle');
        graph.addEdge('Arendelle', 'Metroville');
        graph.addEdge('Metroville', 'Monstropolis');
        graph.addEdge('Monstropolis', 'Narnia');
        graph.addEdge('Narnia', 'Naboo');
    });

    it('should return nodes in breadth-first order starting from Pandora', () => {
        const result = graph.breadthFirst('Pandora');
        expect(result).toEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstropolis', 'Narnia', 'Naboo']);
    });

    it('should return an empty array for an empty graph', () => {
        const emptyGraph = new Graph();
        const result = emptyGraph.breadthFirst('A');
        expect(result).toEqual([]);
    });

    it('should return the single node for a graph with one node', () => {
        const singleNodeGraph = new Graph();
        singleNodeGraph.addVertex('A');
        const result = singleNodeGraph.breadthFirst('A');
        expect(result).toEqual(['A']);
    });

    it('should handle a disconnected graph', () => {
        const disconnectedGraph = new Graph();
        disconnectedGraph.addVertex('A');
        disconnectedGraph.addVertex('B');
        disconnectedGraph.addVertex('C');
        disconnectedGraph.addEdge('A', 'B');
        const result = disconnectedGraph.breadthFirst('A');
        expect(result).toEqual(['A', 'B']);
    });

    it('should return correct order for complex graph', () => {
        graph.addVertex('Elves');
        graph.addEdge('Naboo', 'Elves');
        const result = graph.breadthFirst('Pandora');
        expect(result).toEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstropolis', 'Narnia', 'Naboo', 'Elves']);
    });
});
