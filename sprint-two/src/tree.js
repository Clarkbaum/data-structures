/*
  Complexity: Constant
  Just a constructor. There is a loop, however, it just extends the object with its methods,
  which will stay constant each instance.
*/
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

/*
  Complexity: Constant
  Pushes one value at a time
*/
treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  newNode.parent = this;
  this.children.push(newNode);
  return newNode;
};

treeMethods.removeFromParent = function(){
  //go to parent
  //go to children array
  //delete target from children array
  //go back to target 
  //make target parents property null
  var index = this.parent.children.indexOf(this);
  this.parent.children.splice(index, 1);
  this.parent = null;
}

treeMethods.traverse = function(callback) {
  //should accept a callback and execute it on every value contained in the tree
  var search = function(node) {
    callback(node.value);
    node.children.forEach(function(child) {
      search(child);
    });
  }

  search(this);
};

/*
  Complexity: Quadradic
  There is a loop within a recursive function. As tree expands, complexity increases at a fast pace.
*/
treeMethods.contains = function(target) {

  var result = false;
  var search = function(node){
    if(node.value === target){
      result = true;
    }else{

      node.children.forEach(function(child){
        search(child);
      });
    }
  }

  search(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
