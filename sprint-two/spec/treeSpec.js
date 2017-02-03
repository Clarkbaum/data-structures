describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should have a root node that has a parent equal to null', function(){
    tree.addChild(2);
    tree.addChild(6);
    expect(tree.parent).to.be.null
  });

  it('should have a child elements that point to their parent node', function(){
    var node4 = tree.addChild(4);
    var node1 = node4.addChild(1);
    expect(node4.parent).to.equal(tree);
    expect(node1.parent).to.equal(node4);
  });

  it('should diassociate the tree with its parent in both directions', function(){
    var node4 = tree.addChild(4);
    var node2 = tree.addChild(2);
    var node3 = node4.addChild(3);
    var node1 = node4.addChild(1);
    expect(tree.contains(4)).to.be.true;
    expect(node4.parent).to.equal(tree);
    node4.removeFromParent();
    expect(tree.contains(4)).to.be.false;
    expect(node4.parent).to.be.null;
  });

});
