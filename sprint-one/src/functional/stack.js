var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //Add a string to the top of the stack
    // the key will size + 1;
    storage[someInstance.size() + 1] = value;
  };

  someInstance.pop = function() {
    // Remove and return the string on the top of the stack
    // return the last element && remove it
    var result = storage[someInstance.size()];
    delete storage[someInstance.size()];
    return result;

  };

  someInstance.size = function() {
    // Return the number of items on the stack
    // call the method keys on a objs => array;
    var sizeArray = Object.keys(storage);
    return sizeArray.length;

  };

  return someInstance;
};
