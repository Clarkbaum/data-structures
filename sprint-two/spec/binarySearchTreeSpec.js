describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should not add a value if it is already inside tree', function(){
    var fn = function() {
      binarySearchTree.insert(4);
      binarySearchTree.insert(4);
    };

    expect(fn).to.throw(Error);
  });

  it('breadth search should return binary tree in ordered list', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(10);
    binarySearchTree.insert(8);
    expect(binarySearchTree.breadthFirstLog()).to.eql([1,2,3,4,5,7,8,10]);
  });

  it('should correctly recalulate a tree thats not balanced', function(){
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(10);
    binarySearchTree.insert(11);
    binarySearchTree.rebalance();
    expect(binarySearchTree.value).to.equal(8);
    expect(binarySearchTree.left.value).to.equal(6);
    expect(binarySearchTree.left.left.value).to.equal(5);
    expect(binarySearchTree.left.right.value).to.equal(7);
    expect(binarySearchTree.right.value).to.equal(10);
    expect(binarySearchTree.right.left.value).to.equal(9);
    expect(binarySearchTree.right.right.value).to.equal(11);

  })

  it('should correctly return the depths array of the tree', function(){
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.insert(10);
    binarySearchTree.insert(6);
    binarySearchTree.insert(3);
    binarySearchTree.insert(11);
    binarySearchTree.insert(14);
    binarySearchTree.insert(15);
    binarySearchTree.insert(8);
    expect(binarySearchTree.depths()).to.eql([4,4,5]);
  });


});
