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

    return this;
  }

  /**
   * Remove an item from the end of the linked list.
   */
  pop() {
    if (this.length > 0) {
      --this.length;

      this.tail = this.tail.prev;
      this.tail.next = null;

      return this;
    }
    return this.printError(`There are no more nodes in your linked list`);
  }

  /**
   * Remove a node from the beginning of the list.
   */
  shift() {
    if (this.length > 0) {
      --this.length;

      this.head = this.head.next;
      this.head.prev = null;

      return this;
    }

    return this.printError(`There are no more nodes in your linked list`);
  }

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

    return this;
  }

  /**
   * Get a Node at a specific index
   */
  getNodeAtIndex(index, currentNode = this.head) {
    if (index < 1) return this.printError(`Enter an index greater that 0`);
    if (!currentNode) return this.printError(`There is no value at that index`);
    if (index === 1) return currentNode;

    return this.getNodeAtIndex(--index, currentNode.next);
  }

  /**
   * Set a node at a specific index.
   */
  setNodeAtIndex(index, value) {
    const changeNode = this.getNodeAtIndex(index);
    changeNode.value = value;
    return this;
  }

  /**
   *  Insert a node at a specific index.
   */
  insertAtIndex(index, value) {
    if (index === 1) return this.unshift(value);
    if (index === this.length + 1) return this.push(value);

    const currentNode = this.getNodeAtIndex(index);

    if (currentNode) {
      ++this.length;

      const prevNode = currentNode.prev;
      const node = new Node(value);
      prevNode.next = node;
      node.prev = prevNode;
      node.next = currentNode;
      currentNode.prev = node;
    }

    return this;
  }

  /**
   * Remove a node at a specific index.
   */
  removeAtIndex(index) {
    if (index === 1) return this.shift();
    if (index === this.length) return this.pop();

    const currentNode = this.getNodeAtIndex(index);
    if (currentNode) {
      --this.length;

      const prevNode = currentNode.prev;
      prevNode.next = currentNode.next;
    }

    return this;
  }

  toArray(currentNode = this.head, array = []) {
    if (!currentNode) return array;
    array.push(currentNode.value);
    return this.toArray(currentNode.next, array);
  }

  print() {
    console.log(this.toArray().join(" "));
  }

  printError(value) {
    console.log(value);
  }
}

const doubleLL = new DoubleLinkedList();

doubleLL.push("5");
doubleLL.push("10");
doubleLL.unshift("0");
doubleLL.getNodeAtIndex(1);
doubleLL.print();
doubleLL.setNodeAtIndex(1, 1).print();
doubleLL.insertAtIndex(2, 2).print();
doubleLL.pop().print();
doubleLL.shift().print();
doubleLL.push("15").print();
doubleLL.removeAtIndex(2).print();
doubleLL.removeAtIndex(3).print();
doubleLL.insertAtIndex(4);
