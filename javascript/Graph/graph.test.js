// graph.test.js

const Graph = require('./graph');

test('vertex can be successfully added to the graph', () => {
    const graph = new Graph();
    const vertex = graph.addVertex("A");
    expect(vertex).toBe("A");
});

test('an edge can be successfully added to the graph', () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B", 5);
    const neighborsA = graph.getNeighbors("A");
    expect(neighborsA).toEqual([{ vertex: "B", weight: 5 }]);
});

test('a collection of all vertices can be properly retrieved from the graph', () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    const vertices = graph.getVertices();
    expect(vertices).toEqual(["A", "B"]);
});

test('all appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B", 5);
    const neighborsA = graph.getNeighbors("A");
    expect(neighborsA).toEqual([{ vertex: "B", weight: 5 }]);
});

test('neighbors are returned with the weight between vertices included', () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B", 5);
    const neighborsA = graph.getNeighbors("A");
    expect(neighborsA[0].weight).toBe(5);
});

test('the proper size is returned, representing the number of vertices in the graph', () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    expect(graph.size()).toBe(2);
});

test('a graph with only one vertex and edge can be properly returned', () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addEdge("A", "A", 10);
    const neighborsA = graph.getNeighbors("A");
    expect(neighborsA).toEqual([{ vertex: "A", weight: 10 }]);
});
