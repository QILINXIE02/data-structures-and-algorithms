const { Node, BinaryTree, BinarySearchTree } = require('./maxTree');

describe('Binary Tree Traversal', () => {
    let tree;

    beforeEach(() => {
        /*
            Constructing binary tree:
                    1
                   / \
                  2   3
                 / \ / \
                4  5 6  7
        */
        tree = new BinaryTree();
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(5);
        tree.root.right.left = new Node(6);
        tree.root.right.right = new Node(7);
    });

    test('Pre-order traversal', () => {
        expect(tree.preOrder()).toEqual([1, 2, 4, 5, 3, 6, 7]);
    });

    test('In-order traversal', () => {
        expect(tree.inOrder()).toEqual([4, 2, 5, 1, 6, 3, 7]);
    });

    test('Post-order traversal', () => {
        expect(tree.postOrder()).toEqual([4, 5, 2, 6, 7, 3, 1]);
    });
});

describe('Binary Search Tree', () => {
    let bst;

    beforeEach(() => {
        /*
            Constructing binary search tree:
                    4
                   / \
                  2   6
                 / \ / \
                1  3 5  7
        */
        bst = new BinarySearchTree();
        bst.add(4);
        bst.add(2);
        bst.add(1);
        bst.add(3);
        bst.add(6);
        bst.add(5);
        bst.add(7);
    });

    test('Add nodes to BST', () => {
        expect(bst.root.value).toBe(4);
        expect(bst.root.left.value).toBe(2);
        expect(bst.root.left.left.value).toBe(1);
        expect(bst.root.left.right.value).toBe(3);
        expect(bst.root.right.value).toBe(6);
        expect(bst.root.right.left.value).toBe(5);
        expect(bst.root.right.right.value).toBe(7);
    });

    test('Check if value exists in BST', () => {
        expect(bst.contains(4)).toBe(true);
        expect(bst.contains(5)).toBe(true);
        expect(bst.contains(8)).toBe(false);
    });
});
