
/*
  Complexity: Constant
  Simple constructor
*/
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

/*
  Complexity: Linear
  getIndexBelowMaxForKey contains a for loop making the method linear.
*/
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var curr = this._storage.get(index);

  if(curr){
    curr.push([k,v]);
    this._storage.set(index, curr);
  }else{
    curr = [[k, v]];
    this._storage.set(index, curr);
  }
};

/*
  Complexity: Linear
  getIndexBelowMaxForKey contains a for loop making the method linear.
  Also there is a forEach loop that checks for hash collision
*/
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  var curr = this._storage.get(index);

  if(curr){
    curr.forEach(function(val) {
      if(val[0] === k){
        result =  val[1];
      }
    });
  }

  return result;
};

/*
  Complexity: Linear
  getIndexBelowMaxForKey contains a for loop making the method linear.
  Also there is loop in each
*/
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, i, storage){
    if (index === i) {
      storage.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


