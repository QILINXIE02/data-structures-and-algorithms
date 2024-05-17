// Node class representing a single node in the tree
class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

// Binary Tree class
class BinaryTree {
  constructor() {
      this.root = null;
  }

  // Pre-order traversal
  preOrder() {
      let result = [];

      function traverse(node) {
          if (!node) return;
          result.push(node.value);
          traverse(node.left);
          traverse(node.right);
      }

      traverse(this.root);
      return result;
  }

  // In-order traversal
  inOrder() {
      let result = [];

      function traverse(node) {
          if (!node) return;
          traverse(node.left);
          result.push(node.value);
          traverse(node.right);
      }

      traverse(this.root);
      return result;
  }

  // Post-order traversal
  postOrder() {
      let result = [];

      function traverse(node) {
          if (!node) return;
          traverse(node.left);
          traverse(node.right);
          result.push(node.value);
      }

      traverse(this.root);
      return result;
  }
}

// Binary Search Tree class
class BinarySearchTree extends BinaryTree {
  constructor() {
      super();
  }

  // Add a new node to the BST
  add(value) {
      const newNode = new Node(value);

      if (!this.root) {
          this.root = newNode;
          return;
      }

      let current = this.root;
      while (true) {
          if (value < current.value) {
              if (!current.left) {
                  current.left = newNode;
                  return;
              }
              current = current.left;
          } else {
              if (!current.right) {
                  current.right = newNode;
                  return;
              }
              current = current.right;
          }
      }
  }

  // Check if a value exists in the BST
  contains(value) {
      let current = this.root;
      while (current) {
          if (value === current.value) return true;
          if (value < current.value) {
              current = current.left;
          } else {
              current = current.right;
          }
      }
      return false;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
