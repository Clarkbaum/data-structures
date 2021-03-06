/*
  Complexity: Constant
  Simple constructor
*/
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

/*
  Complexity: Constant
  We thought initially that .hasOwnProperty would cause it to be linear since it is looping
  over a set of keys, but a Google search proved that .hasOwnProperty is in fact Constant (O(1))
*/
setPrototype.add = function(item) {
  //stringified version of item : [item value, counter];
  if(this._storage.hasOwnProperty(item)){
    this._storage[item]++;
  }else{
    this._storage[item] = 1;
  }
};

/*
  Complexity: Constant
  We thought initially that .hasOwnProperty would cause it to be linear since it is looping
  over a set of keys, but a Google search proved that .hasOwnProperty is in fact Constant (O(1))
*/
setPrototype.contains = function(item) {
  //check if this._storage has item
  if(this._storage.hasOwnProperty(item)){
    return true;
  }else{
    return false;
  }
};

/*
  Complexity: Constant
  We thought initially that .hasOwnProperty would cause it to be linear since it is looping
  over a set of keys, but a Google search proved that .hasOwnProperty is in fact Constant (O(1))
*/
setPrototype.remove = function(item) {
  if(this._storage.hasOwnProperty(item) && this._storage[item] > 1){
    this._storage[item]--;
  }else if (this._storage.hasOwnProperty(item)){
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
