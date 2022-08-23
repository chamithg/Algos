class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
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
}

let myQueue = new Queue();
console.log(myQueue);

myQueue.enqueue(5);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.enqueue(6);
console.log(myQueue);
myQueue.enqueue(7);
console.log(myQueue);
myQueue.enqueue(8);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.contains(10));
myQueue.seed([11, 12, 22, 1, 2, 3]);
console.log(myQueue);
