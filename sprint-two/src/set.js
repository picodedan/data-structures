var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //takes any string and adds it to the set
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  //takes any string and returns a boolean reflecting whether it can be found in the set
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  //takes any string and removes it from the set, if present
  this._storage = this._storage.filter( elem => elem !== item );
};

/*
 * Complexity: What is the time complexity of the above functions?
 .add: constant O(1)
 .contains: linear O(n)
 .remove: linear O(n)
 */

