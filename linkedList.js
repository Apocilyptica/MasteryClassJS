class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Add to the front of the linked list.
  prepend(value) {
    // increase size by 1
    this.size += 1;

    // Create a new node
    const node = new Node(value, this.head);

    // assign new node to head
    this.head = node;

    // if the tail doesn't exist add new node to tail as well
    if (!this.tail) this.tail = node;
    return this;
  }

  // Add to the back of the linked list.
  append(value) {
    // increase size by 1
    this.size += 1;

    // create new node
    const node = new Node(value, null);

    // if tail exists change the tail to connect to new node
    if (this.tail) this.tail.next = node;

    // assign new tail to the new node
    this.tail = node;

    // if head doesn't exist assisign new node to head as well
    if (!this.head) this.head = node;
    return this;
  }

  // Build or add to linked list from an array of values
  fromArray(array) {
    // loop through each item of the array and for each element append to the linked list
    array.forEach((element) => {
      this.append(element);
    });
  }

  // convert all the values in linked list to an array
  toArray() {
    // start a new array with just the head value
    var array = [this.head.value];

    // loop thur each .next till null and rewrite the head to be able to grab the next value
    while (this.head.next !== null) {
      this.head = this.head.next;
      array.push(this.head.value);
    }

    // rebuild the LinkedList from the de-construction of the while loop
    this.head = null;
    this.tail = null;
    this.fromArray(array);

    // return the array to use it
    return array;
  }

  delete() {}

  deleteHead() {
    // decrease size by 1
    if (this.size > 0) this.size -= 1;
    // check both if there is a next item or head item, if not the head will be deleted and return tooltip to empty Linked list
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return `Your linked list is empty`;
    }
    // Reasign the head to the next item if there is one
    this.head = this.head.next;
  }

  deleteTail() {}

  includes() {}

  find() {}

  replace() {}

  print() {
    const print = this.toArray();
    console.log(print.join(" "));
  }
}

// Daniel is cool but Lance is not

const testArray = ["Daniel", "is", "cool", "but", "Lance", "is", "not"];

let newLinkedList = new LinkedList();
newLinkedList.fromArray(testArray);
newLinkedList.print();
newLinkedList.deleteHead();
newLinkedList.print();
newLinkedList.prepend("Naz");
newLinkedList.print();
