var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // takes any value, sets that as the target of a node, and adds that node as a child of the tree
  // call Tree passing the given value;
  //add newTree as child of partent treee(called obj)
  var value = Tree(value);
  this.children.push(value);
};

treeMethods.contains = function(target) {
// takes any input and returns a boolean reflecting whether it can be found as the value of the target node
// or any descendant node
  //store result intially false
  //check if 'base' tree.value is target
    // if true return true
    // else recursively loop through children 
  // return result 
  var result = false;
  var containsTarget = function(tree) {
    if (tree.value === target) {
      result = true;
    } else {
      for (var i = 0; i < tree.children.length; i++) {
        containsTarget(tree.children[i]);
      }
    } 
  };
  containsTarget(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
  .addChild: constant, O(1);
  .contains: lenear, O(n);
 */


