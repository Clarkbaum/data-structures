/*
  Complexity: Constant
  Just a simple constructor
*/
var BinarySearchTree = function(value, depth) {

  var newBinary = {};
  newBinary.value = value;
  newBinary.left = null;
  newBinary.right = null;
  newBinary.depth = depth || 1;

  _.extend(newBinary, binarySearchTree);

  return newBinary;
};

var binarySearchTree = {};

/*
  Complexity: Linear
  Recursion of the search function
*/
binarySearchTree.insert = function(value){
 
  var search = function(node) {
    if (value < node.value) {
      if (node.left) {
        search(node.left);
      } else {
        node.left = BinarySearchTree(value, node.depth + 1);
      }
    } else if (value > node.value) {
      if (node.right) {
        search(node.right);
      } else {
        node.right = BinarySearchTree(value, node.depth + 1);
      }
    } else {
      throw new Error("Cannot add duplicate value");
    }
  };

  search(this);

  var depths = binarySearchTree.depths();
  var min = Math.min.apply(null, depths);
  var max = Math.max.apply(null, depths);
  //if one item in array then the tree must be a long chain
  if(min * 2 <= max){
    //need to rebalance
    // if long chain depths will be one item and min/max will equal
    //and min are going to be equal
    //also a chain of 3 should be considered unbalanced
    this.rebalance();
  }


};

binarySearchTree.depths = function(){
  //arry of depths returned
  var results = [];

  var search = function(node) {
    //if node has no left or right, they are null
    //push to .depth to results
    if(!node.left && !node.right){
      results.push(node.depth);
    }
    if(node.left){
      search(node.left)
    }
    if(node.right){
      search(node.right);
    }
  }

  search(this);

  return results;
}

binarySearchTree.breadthFirstLog = function(){
  //if(left) recurse
  //log(value);
  //if(right) recurse
  var result = [];

  var search = function(node) {
    if(node.left){
      search(node.left);
    }
    result.push(node.value);
    if(node.right){
      search(node.right);
    }
  }

  search(this);
  return result;
}

/*
  Complexity: Linear
  Recursion of the search function
*/
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

binarySearchTree.rebalance = function() {
  //if too deep rebalance
  //too deep means some nodes have 2 or more children then any other
  //call breadthFirstLog to get array of sorted values
  //remake tree using above array
  var sorted = this.breadthFirstLog();

  var makeTree = function(sorted, depth) {
    if(sorted == false){
      return null;
    }

    var midIndex = Math.floor((sorted.length - 1) / 2);
    var midValue = sorted[midIndex];  //=>5

    var left = sorted.slice(0, midIndex); //=>[1,2,3,4]
    var right = sorted.slice(midIndex + 1); // => [6,7,8,9,10]
    var newNode = BinarySearchTree(midValue, depth);
    newNode.left = makeTree(left, depth + 1);
    newNode.right = makeTree(right, depth + 1);

    return newNode;
  }

  Object.assign(this, makeTree(sorted, 1));

};

/*
  Complexity: Linear
  Recursion of the search function
*/
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
