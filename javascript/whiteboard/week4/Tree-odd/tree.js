class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

function sumOfOddNumbers(root) {
  if (root === null) {
      return 0;
  }
  const leftSum = sumOfOddNumbers(root.left);
  const rightSum = sumOfOddNumbers(root.right);
  if (root.value % 2 === 1) {  // Check if the value is odd
      return leftSum + rightSum + root.value;
  } else {
      return leftSum + rightSum;
  }
}

// Example usage:
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(18);

console.log(sumOfOddNumbers(root));  // Output: 30
