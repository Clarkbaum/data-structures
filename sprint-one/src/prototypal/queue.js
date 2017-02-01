var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = Object.create(queueMethods);
  storage.length = 0;

  return storage;
};

var queueMethods = {
  enqueue: function(value){
    this[this.length] = value;
    this.length++;
  },
  dequeue: function(){
    if(this.length > 0){
      var deletedItem = this[0];
      delete this[0];

      for(var key in this){
        this[key-1] = this[key];

      }
      delete this[this.length];
      this.length--;
      return deletedItem;
    }
  },
  size: function(){
    return this.length;
  }
};


