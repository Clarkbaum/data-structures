var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if(size > 0){
      var deletedItem = storage[0];
      delete storage[0];
      for(var key in storage){
        storage[key-1] = storage[key];
      }
      delete storage[size];
      size--;

      return deletedItem;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
