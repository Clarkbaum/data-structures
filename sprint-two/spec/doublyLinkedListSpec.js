describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList.hasOwnProperty("head")).to.be.true;
    expect(doublyLinkedList.hasOwnProperty("tail")).to.be.true;
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(6);
    expect(doublyLinkedList.tail.value).to.equal(6);
    doublyLinkedList.addToTail(8);
    expect(doublyLinkedList.tail.value).to.equal(8);
  });

  it('should have nodes that point to their parent', function() {
    doublyLinkedList.addToTail(6);
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.previous.value).to.equal(6);
  });

  it('should have a head whose previous property is null', function() {
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.head.previous).to.be.null;
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(2);
    expect(doublyLinkedList.head.previous).to.be.null;
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToTail(9);
    expect(doublyLinkedList.removeHead()).to.equal(3);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.contains(7)).to.be.false;
    doublyLinkedList.addToTail(7);
    expect(doublyLinkedList.contains(7)).to.be.true;
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.contains(2)).to.be.true;
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(2)).to.be.false;
  });

  // add more tests here to test the functionality of linkedList
});
