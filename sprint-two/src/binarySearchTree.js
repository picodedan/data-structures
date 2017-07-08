var BinarySearchTree = function(value) {
  this.value = value;
  // depth => track number of steps from center
  this._depth;
  // left property  => specific position
  //.left property, a binary search tree (BST) where all values are lower than than it the current value.
  this.left;
  // .right property, a BST where all values are higher than than it the current value.
  // right property => specific position
  this.right;
};



// .insert() method, which accepts a value and places in the tree in the correct position.
BinarySearchTree.prototype.insert = function(value) {
  //if input value is greater than root value 
  if (value > this.value) {
    //if root right is not set
    if (!this.right) {
      //insert new node to the right
      this.right = new BinarySearchTree(value);
    } else {
    //else recurse to the right
      this.right.insert(value);
    }
  //else 
  } else {
    //if root left is not set
    if (!this.left) {
      // insert new node to the left
      this.left = new BinarySearchTree(value);
    } else {
      //else recurse to the left 
      this.left.insert(value);
    }
  }
};

// .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
BinarySearchTree.prototype.contains = function(value) {
  var result = false;
  if (value === this.value) {
    result = true;
  } else if (value > this.value) {
    result = this.right ? this.right.contains(value) : false;
  } else if (value < this.value) {
    result = this.left ? this.left.contains(value) : false;
  }
  return result;
};

// .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
BinarySearchTree.prototype.depthFirstLog = function(value) {
  //
};

// helper function
/*
var binaryRecursion = function(value, operator) {
  if (value > this.value) {
    if (!this.right) {
      return operator(value);
    } else {
      binaryRecursion()
    } 
  } 
};
*/


/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number 
in the list using your BST. Profile this against the same operation using an array.
*/

