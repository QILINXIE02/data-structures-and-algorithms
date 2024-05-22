class TreeNode {
  constructor(name) {
      this.name = name;
      this.left = null;
      this.right = null;
  }
}

function countFiles(root) {
  if (!root) {
      return 0;
  }
  if (!root.left && !root.right) {
      return 1; // Found an individual file
  }
  const leftCount = countFiles(root.left);
  const rightCount = countFiles(root.right);
  return leftCount + rightCount;
}

function compareTrees(tree1, tree2) {
  const count1 = countFiles(tree1);
  const count2 = countFiles(tree2);
  return count1 === count2;
}

// Example usage:
const fileA = new TreeNode('File A');
const folderX = new TreeNode('Folder X');
folderX.left = new TreeNode('File B');
const folderY = new TreeNode('Folder Y');
folderY.left = new TreeNode('File C');

const tree1 = new TreeNode('Root');
tree1.left = fileA;
tree1.right = folderX;
folderX.right = folderY;

const tree2 = new TreeNode('Root');
tree2.left = new TreeNode('File D');
tree2.right = new TreeNode('Folder P');

console.log(compareTrees(tree1, tree2)); // Output: false
