class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addFromArray(array) {
    array.forEach((value) => {
      this.add(value);
    });
  }

  add(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this.print(`added ${value} as the root`);
    }

    this.addHelper(node);
  }

  addHelper(node, current = this.root) {
    if (node.value === current.value) return this.print(`added ${current.value} to the tree`);

    if (node.value < current.value) {
      var direction = "left";
    } else {
      var direction = "right";
    }

    if (!current[direction]) current[direction] = node;
    current = current[direction];

    return this.addHelper(node, current);
  }

  print(value) {
    console.log(value);
  }
}

const array = [17, 9, 3, 11, 25, 20, 31];

const BST = new BinarySearchTree();

BST.addFromArray(array);

BST.print(BST);
