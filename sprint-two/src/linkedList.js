var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    //handle if linkedlist is empty
    if(list.head === null){
      list.head = node;
      list.tail = node;
    }else{
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    //handle if one item
    var deletedItem = list.head;

    if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
    } else if (deletedItem) {
      list.head = list.head.next;
    }

    return deletedItem.value;
  };

  list.contains = function(target) {
    var result = false;
    var search = function(node){
      if(node.value === target){
        result =  true;
      }else{
        if(node.next){
          search(node.next);          
        }
      }
    };

    if (list.head) search(list.head);
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
