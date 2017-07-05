var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // Add a string to the back of the queue
    storage[someInstance.size() + 1] = value;
  };

  someInstance.dequeue = function() {
    // Remove and return the string at the front of the queue
    var result = storage['1'];
    delete storage['1'];
    for (var keys in storage) {
      var newKey = keys - 1;
      storage[newKey] = storage[keys];
      delete storage[keys];
    }
    return result;
  };

  someInstance.size = function() {
    // Return the number of items in the queue
    var sizeArray = Object.keys(storage);
    return sizeArray.length;

  };

  return someInstance;
};
