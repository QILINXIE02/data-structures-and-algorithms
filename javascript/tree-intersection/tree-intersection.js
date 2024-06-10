class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

function treeIntersection(tree1, tree2) {
  const valuesInTree1 = new Set();
  const commonValues = new Set();

  function traverseTree1(node) {
      if (!node) return;
      valuesInTree1.add(node.value);
      traverseTree1(node.left);
      traverseTree1(node.right);
  }

  function traverseTree2(node) {
      if (!node) return;
      if (valuesInTree1.has(node.value)) {
          commonValues.add(node.value);
      }
      traverseTree2(node.left);
      traverseTree2(node.right);
  }

  traverseTree1(tree1);
  traverseTree2(tree2);

  return Array.from(commonValues);
}

module.exports = { TreeNode, treeIntersection };
