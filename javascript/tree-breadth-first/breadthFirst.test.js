const { Node, BinaryTree, breadthFirst } = require('./breadthFirst');

// Helper function to build a binary tree from an array representation
function buildTree(values) {
    if (!values || values.length === 0) return null;
    let nodes = values.map(val => (val !== null ? new Node(val) : null));
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] !== null) {
            let leftIndex = 2 * i + 1;
            let rightIndex = 2 * i + 2;
            if (leftIndex < nodes.length) {
                nodes[i].left = nodes[leftIndex];
            }
            if (rightIndex < nodes.length) {
                nodes[i].right = nodes[rightIndex];
            }
        }
    }
    return nodes[0];
}

// Test cases
describe('BinaryTree breadthFirst', () => {
    test('Binary tree with multiple nodes', () => {
        const tree = new BinaryTree(buildTree([2, 7, 5, 2, 6, null, 9, null, null, 5, 11, null, null, null, 4]));
        expect(breadthFirst(tree)).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
    });

    test('Empty binary tree', () => {
        const tree = new BinaryTree(buildTree([]));
        expect(breadthFirst(tree)).toEqual([]);
    });

    test('Binary tree with a single node', () => {
        const tree = new BinaryTree(buildTree([1]));
        expect(breadthFirst(tree)).toEqual([1]);
    });

    test('Unbalanced binary tree', () => {
        const tree = new BinaryTree(buildTree([1, 2, null, 3, null, null, null, 4]));
        expect(breadthFirst(tree)).toEqual([1, 2, 3, 4]);
    });
});
