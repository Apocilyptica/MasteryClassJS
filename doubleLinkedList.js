class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push a new value to the tail of the linked list.
   */

  push(value) {
    ++this.length;

    const node = new Node(value);

    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;

    if (!this.head) this.head = node;
  }

  /**
   * Remove an item from the end of the linked list.
   */
  pop() {}

  /**
   * Remove a node from the beginning of the list.
   */
  shift() {}

  /**
   * Add a node to the head of the linked list.
   */
  unshift(value) {
    ++this.length;

    const node = new Node(value);

    if (this.head) {
      this.head.prev = node;
      node.next = this.head;
    }

    this.head = node;

    if (!this.tail) this.tail = node;
  }

  /**
   * Get a Node at a specific index
   */
  getNodeAtIndex(index, currentNode = this.head) {
    if (index < 1) return this.printResult(`Enter an index greater that 0`);
    if (!currentNode) return this.printResult(`There is no value at that index`);
    if (index === 1) return currentNode;

    return this.getNodeAtIndex(--index, currentNode.next);
  }

  /**
   * Set a node at a specific index.
   */
  setNodeAtIndex(index, value) {
    const changeNode = this.getNodeAtIndex(index);
    changeNode.value = value;
  }

  /**
   *  Insert a node at a specific index.
   */
  insertAtIndex(index, val) {}

  /**
   * Remove a node at a specific index.
   */
  removeAtIndex(index) {}

  toArray(currentNode = this.head, array = []) {
    if (!currentNode) return array;
    array.push(currentNode.value);
    return this.toArray(currentNode.next, array);
  }

  print() {
    console.log(this.toArray().join(" "));
  }

  printResult(value) {
    console.log(value);
  }
}

const doubleLL = new DoubleLinkedList();

doubleLL.push("1");
doubleLL.push("2");
doubleLL.unshift("0");
doubleLL.getNodeAtIndex(1);
doubleLL.print();
doubleLL.setNodeAtIndex(1, -1);
doubleLL.print();
