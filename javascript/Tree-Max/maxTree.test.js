const { Node, BinaryTree } = require('./maxTree');

// Helper function to build a binary tree from an array representation
function buildTree(values) {
    if (!values || values.length === 0) return null;
    let nodes = values.map(val => (val !== null ? new Node(val) : null));
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] !== null) {
            nodes[i].left = nodes[2 * i + 1] || null;
            nodes[i].right = nodes[2 * i + 2] || null;
        }
    }
    return nodes[0];
}

// Test cases
describe('BinaryTree findMaximumValue', () => {
    test('Binary tree with multiple nodes', () => {
        const tree = new BinaryTree(buildTree([2, 3, 1, 7, 4, 6, 5]));
        expect(tree.findMaximumValue()).toBe(7);
    });

    test('Empty binary tree', () => {
        const tree = new BinaryTree(buildTree([]));
        expect(tree.findMaximumValue()).toBeNull();
    });

    test('Binary tree with a single node', () => {
        const tree = new BinaryTree(buildTree([10]));
        expect(tree.findMaximumValue()).toBe(10);
    });

    test('Binary tree with negative values', () => {
        const tree = new BinaryTree(buildTree([-3, -1, -7, -4]));
        expect(tree.findMaximumValue()).toBe(-1);
    });
});
