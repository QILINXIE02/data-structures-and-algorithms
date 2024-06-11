const { TreeNode, treeIntersection } = require('./tree-intersection');

test('should return common values between two trees', () => {
    const tree1 = new TreeNode(100);
    tree1.left = new TreeNode(160);
    tree1.right = new TreeNode(200);
    tree1.left.left = new TreeNode(125);
    tree1.left.right = new TreeNode(175);
    tree1.right.right = new TreeNode(350);
    tree1.right.right.right = new TreeNode(500);

    const tree2 = new TreeNode(100);
    tree2.left = new TreeNode(160);
    tree2.right = new TreeNode(500);
    tree2.left.left = new TreeNode(125);
    tree2.left.right = new TreeNode(175);
    tree2.right.right = new TreeNode(350);
    tree2.right.right.right = new TreeNode(200);

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual(expect.arrayContaining([100, 160, 125, 175, 200, 350, 500]));
});

test('should handle case with no common values', () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);

    const tree2 = new TreeNode(4);
    tree2.left = new TreeNode(5);
    tree2.right = new TreeNode(6);

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([]);
});

test('should handle case with identical trees', () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);

    const tree2 = new TreeNode(1);
    tree2.left = new TreeNode(2);
    tree2.right = new TreeNode(3);

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
});

test('should handle case with one empty tree', () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);

    const result = treeIntersection(tree1, null);
    expect(result).toEqual([]);
});
