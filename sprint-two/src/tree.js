/*
  Complexity: Constant
  Just a constructor. There is a loop, however, it just extends the object with its methods,
  which will stay constant each instance.
*/
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

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
  this.children.push(Tree(value))
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
