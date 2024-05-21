class Node {
  constructor(value = null, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
      this.root = root;
  }
}

function breadthFirst(tree) {
  if (!tree.root) return [];

  let result = [];
  let queue = [tree.root];

  while (queue.length > 0) {
      let current = queue.shift();
      result.push(current.value);

      if (current.left) {
          queue.push(current.left);
      }

      if (current.right) {
          queue.push(current.right);
      }
  }

  return result;
}

module.exports = { Node, BinaryTree, breadthFirst };
