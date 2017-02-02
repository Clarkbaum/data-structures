var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  /*
    Complexity: Constant
    There a no loops, and only one value is evaluated each time.
  */
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

  /*
    Complexity: Constant
    There a no loops, and only one value is evaluated each time.
  */  
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

  /*
    Complexity: Linear
    The recursive function loops over each item in the list.
    This wouldn't be completely linear though because it ends once the value is found.
  */
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

/*
  Complexity: Constant
  Just a constructor
*/  
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
