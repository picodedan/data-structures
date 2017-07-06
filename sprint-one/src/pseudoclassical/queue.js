var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.size() + 1] = val;
};

Queue.prototype.dequeue = function() {
  var result = this.storage['1'];
  delete this.storage['1'];
  for (var keys in this.storage) {
    var newKey = keys - 1;
    this.storage[newKey] = this.storage[keys];
    delete this.storage[keys];
  }
  return result;

};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
