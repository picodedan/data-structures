var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.storage = {};
  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {

  this.storage[this.size() + 1] = val;
};

queueMethods.dequeue = function() {

  var result = this.storage['1'];
  delete this.storage['1'];
  for (var keys in this.storage) {
    var newKey = keys - 1;
    this.storage[newKey] = this.storage[keys];
    delete this.storage[keys];
  }
  return result;
};

queueMethods.size = function() {

  return Object.keys(this.storage).length;
};
