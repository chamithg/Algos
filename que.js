class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(item) {
    if (this.top === null) {
      this.top = item;
      this.length += 1;
    } else {
      item.next = this.top;
      this.top = item;
      this.length += 1;
    }
    return this.length;
  }

  pop() {
    if (this.top === null) {
      console.log("missed it");
      return null;
    }
    let tobeRemoved = this.top;
    this.top = tobeRemoved.next;
    this.length -= 1;
    return tobeRemoved;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if the list is empty.
   */
  isEmpty() {
    if (this.head == null) {
      return true;
    }
    return false;
  }

  /**
   * Adds a given val to the back of the queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} val
   * @returns {number} The new size of the queue.
   */
  enqueue(val) {
    let newData = new QueueNode(val);
    if (this.isEmpty()) {
      this.head = newData;
      this.tail = newData;
      this.size++;
      return this.size;
    }
    this.tail.next = newData;
    this.tail = newData;
    this.size++;
    return this.size;
  }

  /**
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed item.
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let tobeRemoved = this.head;
    this.head = this.head.next;
    this.size--;
    if (this.size == 0) {
      this.tail = null;
    }
    return tobeRemoved;
  }

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item.
   */
  front() {
    return this.head;
  }

  /**
   * Determines if the given item is in the queue.
   * - Time: O(n) linear.
   * - Space: O(1) constant.
   * @param {any} searchVal
   * @returns {boolean}
   */
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

  /**
   * Enqueues each of the given items.
   * - Time: O(n) linear since enqueue is O(1), n = vals.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals
   */
  seed(vals) {
    for (let i = 0; i < vals.length; i++) {
      this.enqueue(vals[i]);
    }
  }

  enqueueNode(newData) {
    if (this.isEmpty()) {
      this.head = newData;
      this.tail = newData;
      this.size++;
      return this.size;
    }
    this.tail.next = newData;
    this.tail = newData;
    this.size++;
    return this.size;
  }
  /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
  compareQueues(q2) {
    if (this.size != q2.size) {
      return false;
    }
    let runner1 = this.head;
    let runner2 = q2.head;

    while (runner1.next) {
      if (runner1.data != runner2.data) {
        return false;
      }
      runner1 = runner1.next;
      runner2 = runner2.next;
    }
    if (this.tail.data != q2.tail.data) {
      return false;
    }
    return true;
  }

  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isPalindrome() {
    // not working trymore
    let midPoint = Math.ceil(this.size / 2);
    let stack = new Stack();
    let runner = this.head;
    while (runner.next) {
      stack.push(runner);
      runner = runner.next;
    }

    let testRunner = this.head;
    for (let i = 0; i < this.size; i++) {
      let temp = stack.pop().data;
      console.log(testRunner.data + " and " + temp);
      if (testRunner.data != temp) {
        return false;
      }
      testRunner = testRunner.next;
    }
    return true;
  }

  /**
   * Find the intersection in between 2 queues
   * If there is no intersection return a null value
   * If the is an intersection return the node where the queues intersect
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue to find intersection.
   * @returns {QueueNode} Null in case of no intersection
   */
  findIntersection(q2) {}
}

let myQueue1 = new Queue();
let myQueue2 = new Queue();
myQueue1.seed([2, 3, 4, 5, 6]);
myQueue2.seed([2, 3, 4, 3, 3]);

console.log(myQueue2.isPalindrome());
