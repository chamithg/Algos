class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
/**
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top and removed items are removed from the top.
 */
class Stack {
  /**
   * The constructor is executed when instantiating a new Stack() to construct
   * a new instance.
   * @returns {Stack} This new Stack instance is returned without having to
   *    explicitly write 'return' (implicit return).
   */
  constructor() {
    this.top = null;
    this.length = 0;
  }

  /**
   * Adds a new given item to the top of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top.
   * @returns {number} The new length of this stack.
   */
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

  /**
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed item or undefined if this stack was empty.
   */
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

  /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The top / last item of this stack.
   */
  peek() {
    if (this.top === null) {
      return null;
    }
    let top = this.top.data;
    let runner = this.top;
    while (runner.next) {
      runner = runner.next;
    }
    let last = runner.data;

    return "Top: " + top + ";" + " Last: " + last;
  }

  /**
   * Returns whether or not this stack is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    if (this.top === null) {
      return true;
    }
    return false;
  }

  /**
   * Returns the size of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.length;
  }
}

let myStack = new Stack();

console.log(myStack.isEmpty());
myStack.push(new StackNode(5));
console.log(myStack);
myStack.push(new StackNode(6));
console.log(myStack);

myStack.push(new StackNode(7));
console.log(myStack);
myStack.push(new StackNode(8));
console.log(myStack);
myStack.push(new StackNode(9));
console.log(myStack);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
