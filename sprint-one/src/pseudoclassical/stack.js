var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
};

Stack.prototype.push = function(val) {

  this.storage[this.size() + 1] = val;
};

Stack.prototype.pop = function() {

  var result = this.storage[this.size()];
  delete this.storage[this.size()];
  return result;
};

Stack.prototype.size = function() {

  return Object.keys(this.storage).length;
};


