var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.length = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function(){
  console.log(this);
  if(this.length > 0){
    var deletedItem = this[0];
    delete this[0];

    for(var key in this){
      console.log("key: ", key);
      if(!isNaN(key)){

        this[key-1] = this[key];
        
      }
    }

    delete this[this.length];
    this.length--;

    return deletedItem;
  }
};

Queue.prototype.size = function(){
  return this.length;
};


