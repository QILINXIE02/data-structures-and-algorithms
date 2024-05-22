class KaryNode {
  constructor(value) {
      this.value = value;
      this.children = [];
  }
}

class KaryTree {
  constructor(root = null) {
      this.root = root;
  }

  fizzBuzzTree() {
      if (!this.root) return new KaryTree();
      const newRoot = new KaryNode(this.fizzBuzz(this.root.value));
      const newTree = new KaryTree(newRoot);
      this.traverseAndCopy(this.root, newRoot);
      return newTree;
  }

  fizzBuzz(value) {
      if (value % 3 === 0 && value % 5 === 0) {
          return "FizzBuzz";
      } else if (value % 3 === 0) {
          return "Fizz";
      } else if (value % 5 === 0) {
          return "Buzz";
      } else {
          return value.toString();
      }
  }

  traverseAndCopy(node, newNode) {
      for (let child of node.children) {
          const newChild = new KaryNode(this.fizzBuzz(child.value));
          newNode.children.push(newChild);
          this.traverseAndCopy(child, newChild);
      }
  }
}

module.exports = { KaryNode, KaryTree };
