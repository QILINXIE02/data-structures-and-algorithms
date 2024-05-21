// Node class representing each node in the binary tree
class Node {
  constructor(value = null, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

// BinaryTree class with the findMaximumValue method
class BinaryTree {
  constructor(root = null) {
      this.root = root;
  }

  findMaximumValue() {
      if (!this.root) return null;
      let maxValue = Number.NEGATIVE_INFINITY;

      const traverse = (node) => {
          if (node === null) return;
          if (node.value > maxValue) {
              maxValue = node.value;
          }
          traverse(node.left);
          traverse(node.right);
      };

      traverse(this.root);
      return maxValue;
  }
}

module.exports = { Node, BinaryTree };
