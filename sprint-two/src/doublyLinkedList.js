var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  var newNode = new DoublyNode(value);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }
};

DoublyLinkedList.prototype.removeHead = function() {
  if (this.head) {
    var deleted = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    return deleted.value;
  } 
};

DoublyLinkedList.prototype.contains = function(target) {
  var result = false;

  var search = function(node) {
    if (target === node.value) {
      result = true;
    } else {
      if(node.next) {
        search(node.next);
      }
    }
  };

  search(this.head);
  return result;
};

var DoublyNode = function(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
};