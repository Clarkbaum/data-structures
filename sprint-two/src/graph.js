

// Instantiate a new graph
/*
  Complexity: Constant
  Constructor
*/
var Graph = function(value) {
  this.edges = [];
  this.value = value;
};

// Add a node to the graph, passing in the node's value.
/*
  Complexity: Constant
  Pushes one value at a time
*/
Graph.prototype.addNode = function(value) {
  var newNode = new Graph(value);
  this.edges.push(newNode);
  return newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
/*
  Complexity: Quadradic
  A for loop exists in a recursive function.
  As the complexity of the graph increases, the number of nodes to check increase dramatically
*/
Graph.prototype.contains = function(value) {

  var result = false;
  var search = function(target){
    if(value === target.value){
      result = true;
    }else{
      target.edges.forEach(function(edge){
        if (target !== edge) {
          search(edge);
        }
      });
    }
  }

  search(this);

  return result;
};

/*
  Complexity: Quadradic
  A for loop exists in a recursive function.
  As the complexity of the graph increases, the number of nodes to check increase dramatically
*/
Graph.prototype.getNode = function(value){

  var result;
  var search = function(node){
    if(node.value === value){
      result = node;
    }else{
      node.edges.forEach(function(edge){
        if (node !== edge) {
          search(edge);
        }
      });
    }
  }

  search(this);

  return result;
};


// Removes a node from the graph.
/*
  Complexity: Quadradic
  A for loop exists in a recursive function.
  As the complexity of the graph increases, the number of nodes to check increase dramatically
*/
Graph.prototype.removeNode = function(value) {

  var search = function(edges){
    for(var i = 0; i < edges.length;i++){
      // one node edges[i]
      if(edges[i].value === value){
        edges.splice(i, 1);
      }else{
        search(edges[i].edges);

      }
    }
  }

  search(this.edges);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
/*
  Complexity: Quadradic
  Calls a method which has quadradic complexity.
  A for loop exists in a recursive function.
  As the complexity of the graph increases, the number of nodes to check increase dramatically
*/
Graph.prototype.hasEdge = function(origin, destination) {
  var fromNode = this.getNode(origin);
  var toNode = this.getNode(destination);
  if (!fromNode || !toNode) return false;
  return fromNode.edges.indexOf(toNode) > -1 || toNode.edges.indexOf(fromNode) > -1
};

// Connects two nodes in a graph by adding an edge between them.
/*
  Complexity: Quadradic
  Calls a method which has quadradic complexity.
  A for loop exists in a recursive function.
  As the complexity of the graph increases, the number of nodes to check increase dramatically
*/
Graph.prototype.addEdge = function(origin, destination) {
  var fromNode = this.getNode(origin);
  var toNode = this.getNode(destination);
  
  if(fromNode.edges.indexOf(toNode) === -1){
    fromNode.edges.push(toNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
/*
  Complexity: Quadradic
  Calls a method which has quadradic complexity.
  A for loop exists in a recursive function.
  As the complexity of the graph increases, the number of nodes to check increase dramatically
*/
Graph.prototype.removeEdge = function(origin, destination) {
  var fromNode = this.getNode(origin);
  var toNode = this.getNode(destination);

  var index = fromNode.edges.indexOf(toNode);
  fromNode.edges.splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
/*
  Complexity: Quadradic
  A for loop exists in a recursive function.
  As the complexity of the graph increases, the number of nodes to check increase dramatically
*/
Graph.prototype.forEachNode = function(cb) {
  var iterate = function(node) {
    cb(node.value);
    node.edges.forEach(function(edge) {
      if(node !== edge){
        iterate(edge);
      }
    });
  };
  iterate(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


