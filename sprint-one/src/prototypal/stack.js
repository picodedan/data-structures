var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);
  stackInstance.storage = {};
  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {

  this.storage[this.size() + 1] = val;
};

stackMethods.pop = function() {

  var result = this.storage[this.size()];
  delete this.storage[this.size()];
  return result;
};

stackMethods.size = function() {
  
  return Object.keys(this.storage).length;
};

