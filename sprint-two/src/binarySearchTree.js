var BinarySearchTree = function(value) {

  var newBinary = {};
  newBinary.value = value;
  newBinary.left = null;
  newBinary.right = null;
  //initialize
  //left funciton
  //right function
  //insert
  //contains
  //depthFirstLog
  _.extend(newBinary, binarySearchTree);

  return newBinary;
};

var binarySearchTree = {};

binarySearchTree.insert = function(value){
 
  var search = function(node) {
    if (value < node.value) {
      if (node.left) {
        search(node.left);
      } else {
        node.left = BinarySearchTree(value);
      }
    } else if (value > node.value) {
      if (node.right) {
        search(node.right);
      } else {
        node.right = BinarySearchTree(value);
      }
    }
  };

  search(this);
};

binarySearchTree.contains = function(target){
  var result = false;

  var search = function(node) {
    if (target === node.value) {
      result = true;
    } else if (target > node.value) {
      if (node.right) {
        search(node.right);
      }
    } else if (target < node.value) {
      if (node.left) {
        search(node.left);
      }
    }
  };

  search(this);
  return result;
};

binarySearchTree.depthFirstLog = function(callback){
  var search = function(node) {
    callback(node.value);
    if (node.right) {
      search(node.right);
    }
    if (node.left) {
      search(node.left);
    }
  };

  search(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
