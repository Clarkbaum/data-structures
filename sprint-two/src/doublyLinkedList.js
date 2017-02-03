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
    this.head = this.head.next;
    this.head.previous = null;
  } 
};

DoublyLinkedList.prototype.contains = function() {};

var DoublyNode = function(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
};