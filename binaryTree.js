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
    this.nodes = 0;
  }

  addFromArray(array) {
    if (array.length > 0) {
      array.forEach((value) => {
        this.add(value, false);
      });
    }
    return this.print(`must have values in array to add in tree`);
  }

  toArray(root = this.root, array = [], i = 0) {
    if (!root) return;

    if (root.left) i = this.toArray(root.left, array, i);
    if (root.right) i = this.toArray(root.right, array, i);

    array[i] = root.value;

    if (array.length === this.nodes) return array;

    return ++i;
  }

  sortArray() {
    const array = this.toArray();
    return array.sort((a, b) => a - b);
  }

  insert(value, array = this.toArray()) {
    if (array.find((e) => e === value)) return this.print(`node value of ${value} already exists`);
    this.add(value);
    this.balance();
    return this.print(`Binary Search with inserted value of ${value} re-balanced`);
  }

  balance(array = this.sortArray()) {
    if (array.length === 1) return new Node(array[0]);
    if (array.length === 0) return null;

    let center = Math.floor(array.length / 2);
    let tempRoot = new Node(array[center]);

    let left = array.slice(0, center);
    tempRoot.left = this.balance(left);

    let right = array.slice(center + 1, array.length);
    tempRoot.right = this.balance(right);

    this.root = tempRoot;

    return this.root;
  }

  add(value) {
    if (!value) return this.print(`must enter a value to add`);

    if (this.toArray()) {
      if (this.toArray().find((e) => e === value)) return this.print(`value ${value} has already been added to the tree`);
    }
    ++this.nodes;
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this.print(`added ${value} as the root`);
    }

    this.addHelper(node);
  }

  addHelper(node, current = this.root) {
    var direction = this.searchHelper(node.value, current.value);

    if (!current[direction]) {
      current[direction] = node;
      return this.print(`added ${node.value} to the tree`);
    }
    current = current[direction];

    return this.addHelper(node, current);
  }

  searchHelper(value, currentValue) {
    return value < currentValue ? "left" : "right";
  }

  find(value, current = this.root) {
    if (!current) return this.print(`could not find ${value} in the Binary Tree`);

    if (value === current.value) return this.print(`found ${value} in the Binary Tree`);

    var direction = this.searchHelper(value, current.value);

    current = current[direction];

    return this.find(value, current);
  }

  print(value) {
    console.log(value);
  }
}

var array = [17, 9, 3, 11, 25, 20, 31];

const BST = new BinarySearchTree();

BST.addFromArray(array);

BST.print(BST);

BST.find(20);

BST.find(50);

var array = BST.toArray();
BST.print(array);

BST.add(2);
BST.add(12);
BST.add(19);
BST.add(35);

BST.print(BST);

var array = BST.toArray();
BST.print(array);
BST.print(BST.sortArray());

BST.add(35);
BST.add(60);
BST.add(-10);
BST.add(-3);
BST.add(-25);

BST.print(BST.balance());
BST.print(BST);

BST.insert(105);

BST.print(BST);

BST.insert(105);

var array = [];

BST.addFromArray(array);
