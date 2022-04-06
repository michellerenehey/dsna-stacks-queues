class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // takes in a node

    // first try
    // if (node < this.value && this.left === undefined) {
    //   this.left.add(node);
    // } else if (node < this.value) {
    //   this.left = new BinaryTreeNode(node);
    // }

    // if (node > this.value && this.right === undefined) {
    //   this.right.add(node);
    // } else if (node > this.value) {
    //   this.right = new BinaryTreeNode(node);
    // }

    if (node.value < this.value) {
      if (!this.left) this.left = node;
      else this.left.add(node);
    } else {
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}

// if the node < this.value it goes left
// if the node > this.value it goes right

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);

console.log(B);
