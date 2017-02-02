var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //put in this._storage
  //item is the key
  //add key and value
  if(this._storage.hasOwnProperty(item)){
    this._storage[item]++;
  }else{
    this._storage[item] = 1;
  }
};

setPrototype.contains = function(item) {
  //check if this._storage has item
  if(this._storage.hasOwnProperty(item)){
    return true;
  }else{
    return false;
  }
};

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
