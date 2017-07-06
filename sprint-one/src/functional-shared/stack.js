var Stack = function() {
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


