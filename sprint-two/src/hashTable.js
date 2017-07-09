

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get bucket at index
  var bucket = this._storage.get(index) || [];
  var tuple = [k, v];
  //create tuple of k,v
  if (bucket.length > 0) {
    //iterate through bucket 
    for (var i = 0; i < bucket.length; i++) {
    //if k already exist
      if (bucket[i][0] === k) {
      //change the value to v
        bucket[i][1] = v;
      } else {
        //add  tuple to bucket
        bucket.push(tuple);
      }
    }
  } else { 
    //add  tuple to bucket
    bucket.push(tuple);
  }  
  //set bucket in storage
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get bucket at index
  var bucket = this._storage.get(index);
  // iterate through bucket to find k 
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      //return value 
      return bucket[i][1];
    }    
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get bucket by index
  var bucket = this._storage.get(index);
  // iterate through bucket to find k
  for (var i = 0; i < bucket.length; i++) {
    //if k is found
    if (bucket[i][0] === k) {
      //delete the bucket elemet (splice(i, 1))
      bucket.splice(i, 1);
    }
  }    
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

var obj = {
  some: value
};


