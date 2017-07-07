var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //method, takes a value and adds it to the end of the list
    // call node(value)
    //update list.tail with reference to new tail
    //update node.next on the previous tail to reference the new tail
    var value = Node(value);
    if (list.head === null) {
      list.head = value;
    }
    if (list.tail === null) {
      list.tail = value; 
    } else {
      list.tail.next = value;
      list.tail = value; 
    }
  };

  list.removeHead = function() {
    //removes the first node from the list and returns its value
    //update value of list.head to current head's .next value
    //return current head 
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target) {
    //returns boolean reflecting whether or not the passed-in value is in the linked list
    //recursively check nodes if node.value === target
      //if false call recursion function on node.next
    
    //start at list.head, check list.head.value ? === target
      // if true result = true
      // rreturn result
      //else start again at list.head.next
    //var result;
    var isTarger = function(node) {
      if (node.value === target) {
        return true;
      } 
      if (node.next) {
        isTarger(node.next);
      } 
      return false; 
    };
    
    return isTarger(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
