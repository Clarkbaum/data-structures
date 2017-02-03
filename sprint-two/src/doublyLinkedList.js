var DoublyLinkedList = function() {
  list.head = null;
  list.tail = null;
};

DoublyLinkedList.prototype.addToTail = function() {};

DoublyLinkedList.prototype.removeHead = function() {};

DoublyLinkedList.prototype.contains = function() {};

var DoublyNode = function(value) {
  this.value = value;
  this.next = null;
  this.parent = null;
};