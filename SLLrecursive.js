class SLL {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  insertAtFront(valueInput) {
    //create a person/node with that valueInput
    let newPerson = new Node(valueInput);
    if (this.head === null) {
      this.head = newPerson;
    } else {
      newPerson.next = this.head;
      this.head = newPerson;
    }
  }

  removeFromFront() {
    let tobeRemoved = this.head;
    if (tobeRemoved.next) {
      this.head = tobeRemoved.next;
    } else {
      this.head = null;
    }
  }
  insertAtBack(data) {
    let newnode = new Node(data);
    if (this.isEmpty()) {
      this.head = newnode;
    } else {
      let listnode = this.head;
      while (listnode.next) {
        listnode = listnode.next;
      }
      listnode.next = newnode;
    }
  }

  display() {
    let toDisplay = this.head;
    while (toDisplay) {
      console.log(toDisplay.value);
      toDisplay = toDisplay.next;
    }
  }
  seedFromArr(vals) {
    for (let i = 0; i < vals.length; i++) {
      this.insertAtBack(vals[i]);
    }
  }

  toArr() {
    var newArr = [];
    let runner = this.head;
    while (runner) {
      newArr.push(runner.value);
      runner = runner.next;
    }
    return newArr;
  }

  insertAtBackRecursive(data, runner = this.head) {
    if (runner == null) {
      runner = new Node(data);
      return runner;
    } else if (runner.next == null) {
      runner.next = new Node(data);
      return runner.next;
    }
    this.insertAtBackRecursive(data, runner.next);
  }

  removeBack() {
    if (this.isEmpty()) {
      return [];
    }
    let removedNode;
    let runner = this.head;
    if (!runner.next) {
      removedNode = runner;
      runner = null;
      return removedNode;
    }
    if (!runner.next.next) {
      removedNode = runner.next;
      runner.next = null;
      return removedNode;
    }
    while (runner.next.next) {
      runner = runner.next;
    }
    removedNode = runner.next;
    runner.next = null;
    return removedNode;
  }

  contains(val) {
    let runner = this.head;
    while (runner.next) {
      if (runner.data === val) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }
  containsRecursive(val, current = this.head) {
    if (this.isEmpty()) {
      return false;
    }
    if (current.data == val) {
      return true;
    }
    if (!current.next) {
      return false;
    }
    return this.containsRecursive(val, current.next);
  }

  secondToLast() {
    if (this.isEmpty() || this.head.next == null) {
      return null;
    }
    let runner = this.head;
    while (runner.next.next) {
      runner = runner.next;
    }
    return runner.data;
  }

  removeVal(val) {
    if (this.isEmpty()) {
      return false;
    }
    if (this.head.data == val) {
      this.head = this.head.next;
      return true;
    }
    let runner = this.head;
    while (runner.next && runner.next.data != val) {
      runner = runner.next;
    }
    if (runner.next && runner.next.data == val) {
      runner.next = runner.next.next;
      return true;
    }
    return false;
  }

  /**
   * Concatenates the nodes of a given list onto the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {SinglyLinkedList} addList An instance of a different list whose
   *    whose nodes will be added to the back of this list.
   * @returns {SinglyLinkedList} This list with the added nodes.
   */
  concat(addList) {
    let tempArray = addList.toArr();
    for (let i = 0; i < tempArray.length; i++) {
      this.insertAtBack(tempArray[i]);
    }
    return this;
  }

  concat1(concatList) {
    if (this.isEmpty()) {
      this.head = concatList.head;
      return list;
    }

    let runner1 = this.head;
    while (runner1.next != null) {
      runner1 = runner1.next;
    }
    runner1.next = concatList.head;
    return list;
  }

  /**
   * Splits this list into two lists where the 2nd list starts with the node
   * that has the given value.
   * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
   * and the return value will be a new list containing (5=>2=>4)
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The value in the node that the list should be split on.
   * @returns {SinglyLinkedList} The split list containing the nodes that are
   *    no longer in this list.
   */
  splitOnVal(val) {
    if (this.isEmpty()) {
      return "List is empty";
    } else if (this.toArr().length == 1) {
      return "there is only one node in the list";
    } else {
      if (!this.contains(val)) {
        return "value is not in the list";
      } else {
      }
    }
  }

  splitOnVal1(value) {
    let newList = new SLL();
    let split = this.getItemAndPrevious(value);
    if (split == null) {
      return newList;
    }

    newList.head = split.node;
    if (split.previous != null) {
      split.previous.next = null;
    } else {
      this.head = null;
    }

    return newList;
  }

  /**
   * Recursively finds the maximum integer data of the nodes in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {ListNode} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @param {ListNode} maxNode Keeps track of the node that contains the current
   *    max integer as it's data.
   * @returns {?number} The max int or null if none.
   */
  recursiveMax(runner = this.head, maxNode = this.head) {
    if (this.isEmpty()) {
      return null;
    }
    if (runner == null) {
      return maxNode.value;
    }
    if (maxNode.value < runner.value) {
      return this.recursiveMax(runner.next, runner);
    } else return this.recursiveMax(runner.next, maxNode);
  }
}

//metaphor: node === each person in chipotle line
class Node {
  constructor(valueInput) {
    this.value = valueInput;
    this.next = null;
  }
}

let listA = new SLL();
let listB = new SLL();

console.log(listA.isEmpty());

listA.insertAtBack(2);
listA.insertAtBack(3);
listA.insertAtBack(4);
listA.insertAtBack(6);
listA.insertAtBack(5);

listB.insertAtBack(11);
listB.insertAtBack(13);
listB.insertAtBack(15);
// arr1 = ["James", "Austin", "Lorenzo"];
// chipotleLine.seedFromArr(arr1);
// chipotleLine.insertAtBackRecursive("diane");
// chipotleLine.display();
listA.concat(listB);

listA.display();
