const PseudoQueue = require('./pseudoQ');

test('enqueue and dequeue operations', () => {
    const pq = new PseudoQueue();
    pq.enqueue(5);
    expect(pq.dequeue()).toBe(5);
});

test('enqueue multiple elements and dequeue all', () => {
    const pq = new PseudoQueue();
    pq.enqueue(10);
    pq.enqueue(20);
    pq.enqueue(30);
    expect(pq.dequeue()).toBe(10);
    expect(pq.dequeue()).toBe(20);
    expect(pq.dequeue()).toBe(30);
});

test('dequeue from an empty queue', () => {
    const pq = new PseudoQueue();
    expect(pq.dequeue()).toBe(null);
});
