var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Use the keyword this in your methods

  var instanceObj = {
    storage: {}
  };
  _.extend(instanceObj, queueMethods);
  return instanceObj;
};

var queueMethods = {

  enqueue: function(value) { this.storage[this.size() + 1] = value; },

  dequeue: function() {
    var result = this.storage['1'];
    delete this.storage['1'];
    for (var keys in this.storage) {
      var newKey = keys - 1;
      this.storage[newKey] = this.storage[keys];
      delete this.storage[keys];
    } 
    return result;
  },

  size: function() {
    return Object.keys(this.storage).length;
  },
};




