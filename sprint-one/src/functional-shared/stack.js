var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Use the keyword this in your methods
  var instanceObj = {
    storage: {}
  };
  _.extend(instanceObj, stackMethods);
  return instanceObj;
};

var stackMethods = {

  push: function(value) {
    this.storage[this.size() + 1] = value;
  },

  pop: function() {
    var result = this.storage[this.size()];
    delete this.storage[this.size()];
    return result;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }

};


