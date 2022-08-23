/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data;
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     *
     * @type {BSTNode|null}
     */
    this.left = null;
    /** @type {BSTNode|null} */
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     *
     * @type {BSTNode|null}
     */
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    if (this.root == null) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */

  insert(newVal) {
    let newNode = new BSTNode(newVal);
    if (this.isEmpty()) {
      this.root = newNode;
      return this;
    }
    let runner = this.root;
    while (runner) {
      if (newVal === runner.data) {
        runner.count++;
        return this;
      }
      if (newVal > runner.data) {
        if (runner.right) {
          runner = runner.right;
        } else {
          runner.right = newNode;
          return this;
        }
      } else {
        if (runner.left) {
          runner = runner.left;
        } else {
          runner.left = newNode;
          return this;
        }
      }
    }
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    if (this.isEmpty()) {
      return null;
    }
    while (current) {
      if (current.left) {
        current = current.left;
      } else {
        return current.data;
      }
    }
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    if (this.isEmpty()) {
      return null;
    }

    if (!current.left) {
      return current.data;
    }

    return this.minRecursive(current.left);
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  contains(searchVal) {
    // if root is null
    if (this.isEmpty()) {
      return false;
    }

    let runner = this.root;

    // while runner is not null
    while (runner) {
      // If searchVal equal runner.data
      if (searchVal === runner.data) {
        return true;
      }

      // If searchVal equal runner.data
      if (searchVal > runner.data) {
        runner = runner.right;
      } else {
        runner = runner.left;
      }
    }

    return false;
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  containsRecursive(searchVal, current = this.root) {
    if (current == null) {
      return false;
    }

    if (searchVal == current.data) {
      return true;
    }

    if (searchVal > current.data) {
      return this.containsRecursive(searchVal, current.right);
    } else {
      return this.containsRecursive(searchVal, current.left);
    }
  }

  /**
   * DFS Inorder: (Left, CurrNode, Right)
   * Converts this BST into an array following Depth First Search inorder.
   * See debugger call stack to help understand the recursion.
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrayInorder(node = this.root, vals = []) {
    if (this.isEmpty()) {
      return false;
    }

    if (node.left) {
      this.toArrayInorder(node.left, vals);
    }
    vals.push(node.data);
    if (node.right) {
      this.toArrayInorder(node.right, vals);
    }

    return vals;
  }

  /**
   * DFS Preorder: (CurrNode, Left, Right)
   * Converts this BST into an array following Depth First Search preorder.
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrayPreOrder(node = this.root, values = []) {
    if (this.isEmpty()) {
      return [];
    }

    values.push(node.data);
    if (node.left) {
      this.toArrayPreOrder(node.left, values);
    }
    if (node.right) {
      this.toArrayPreOrder(node.right, values);
    }
    return values;
  }

  /**
   * DFS Postorder (Left, Right, CurrNode)
   * Converts this BST into an array following Depth First Search postorder.
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrayPostOrder(node = this.root, values = []) {
    if (this.isEmpty()) {
      return [];
    }

    if (node.left) {
      this.toArrayPostOrder(node.left, values);
    }
    if (node.right) {
      this.toArrayPostOrder(node.right, values);
    }
    values.push(node.data);

    return values;
  }

  /**
   * BFS order: horizontal rows top-down left-to-right.
   * Converts this BST into an array following Breadth First Search order.
   * Example on the fullTree var:
   * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
   * @param {Node} current The current node during the traversal of this tree.
   * @returns {Array<number>} The data of all nodes in BFS order.
   */

  //          50
  //      25      75
  //   10   40  60   90

  // [50, 25, 75, 10, 40, 60, 90]
  toArrLevelorder(current = this.root, arr = []) {
    if (this.isEmpty()) {
      return [];
    }

    if (current == this.root) {
      arr.push(this.root.data);
    }

    if (current.left) {
      arr.push(current.left.data);
    }
    if (current.right) {
      arr.push(current.right.data);
    }

    if (current.left) {
      this.toArrLevelorder(current.left, arr);
    }
    if (current.right) {
      this.toArrLevelorder(current.right, arr);
    }

    return arr;
  }

  toArrLevelorder1(current = this.root) {
    var outputArray = [];
    var nodeList = [];
    if (this.isEmpty()) {
      return outputArray;
    }
    nodeList.push(current);
    while (nodeList.length != 0) {
      let tempNode = nodeList.shift();
      outputArray.push(tempNode.data);
      if (tempNode.left) {
        nodeList.push(tempNode.left);
      }
      if (tempNode.right) {
        nodeList.push(tempNode.right);
      }
    }
    return outputArray;
  }
  toArrLevelorderRecursive(nodeList = [this.root], results = []) {
    if (nodeList.length === 0) {
      return results;
    }

    const node = nodeList.shift();
    results.push(node.data);

    if (node.left) {
      nodeList.push(node.left);
    }
    if (node.right) {
      nodeList.push(node.right);
    }

    return this.toArrLevelorderRecursive(nodeList, results);
  }

  /**
   * Recursively counts the total number of nodes in this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during the traversal of this tree.
   * @returns {number} The total number of nodes.
   */
  size(node = this.root) {
    if (current === null) {
      return 0;
    }
    return this.size(current.left) + this.size(current.right) + 1;
  }

  /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {number} The height of the tree.
   */
  height(node = this.root) {
    if (!node) {
      return 0;
    }

    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);

    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    }
    return rightHeight + 1;
  }

  /**
   * Determines if this tree is a full tree. A full tree is a tree where every
   * node has both a left and a right except for the leaf nodes (last nodes)
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {boolean} Indicates if this tree is full.
   */
  isFull(node = this.root) {
    if (!node) {
      return true;
    }
    if ((!node.left && node.right) || (node.left && !node.right)) {
      //if( !((!!node.left)*(!!node.right))){
      return false;
    }

    let leftBool = this.isFull(node.left);
    let rightBool = this.isFull(node.right);

    if (leftBool && rightBool) {
      return true;
    }
    return false;
  }

  /**
   * Removes the node that has the matching given val as its data
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} The value to compare to the node's data to find the
   *    node to be removed.
   * @returns {boolean} Indicates if the node was removed or not.
   */
  removeVal(searchVal) {
    if (this.isEmpty()) {
      return false;
    }
    let runner = this.root;
    while (runner) {
      if (runner.right) {
        if (runner.right.data == searchVal) {
          let tempArr = this.toArrLevelorder1(runner.right);
          runner.right = null;
          tempArr.shift();
          for (let i = 0; i < tempArr.length; i++) {
            this.insert(tempArr[i]);
          }

          return true;
        }
      }

      if (runner.left) {
        if (runner.left.data == searchVal) {
          let tempArr = this.toArrLevelorder1(runner.left);
          runner.left = null;
          tempArr.shift();
          for (let i = 0; i < tempArr.length; i++) {
            this.insert(tempArr[i]);
          }

          return true;
        }
      }

      if (searchVal > runner.data) {
        runner = runner.right;
      } else {
        runner = runner.left;
      }
    }

    return false;
  }

  /**
   * Finds all the values that are repeated in the binary search tree
   * - Time: O(?).
   * - Space: O(?).
   * @returns {Array<Number>} The values that are repeated in the binary search tree
   */
  findDuplicates() {}
}

let tree = new BinarySearchTree();

// insert random numbers to the binary tree.
let BST = new BinarySearchTree();
// for (let i = 0; i < 9; i++) {
//   BST.insert(Math.floor(Math.random() * 1000) + 1);
// }

// console.log(BST);

// console.log(BST.toArrayInorder());
// console.log(BST.toArrayPreOrder());
// console.log(BST.toArrayPostOrder());

// [50, 25, 75, 10, 40, 60, 90]

//          50
//      25      75
//   10   40  60   90

// [50, 25, 75, 10, 40, 60, 90]
BST.insert(50);
BST.insert(25);
BST.insert(75);
BST.insert(10);
BST.insert(40);
BST.insert(60);
BST.insert(90);

// console.log(BST.toArrLevelorder());
console.log(BST.toArrLevelorder1());
// console.log(BST.toArrLevelorderRecursive());
console.log(BST.removeVal(75));

console.log(BST.toArrLevelorder1());
