

// Instantiate a new graph
var Graph = function() {
  // create a property that stores its connection(s)
  this.connection = []; 
};

var Node = function() {
  //create property edge
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create an new Node 
  var node = new Node();
  // add to this node the connection to new graph node
  this.connection.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  //loop through Graph's connections 
  for (var i = 0; i < this.connection.length; i++) {
    //if a connecion equals value
    if (this.connection === value) {
      // return true
      return true;
    }
  }
  // if not found return false;    
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //if Node has edge(s)
  if (node.edge.length > 0) {
    for (var i = 0; i < node.edge.length; i++) {
    // remove each edge with remove edge method
      this.removeEdge(node, node.edge[i]);
    }
  }  
  //remove node from graph connections
  
};

// Returns a boolean indicating whether two specified nodes are connected.  
// input -Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if each input node contains a reference to the other in the edge property
  return (fromNode.edge.contains(toNode) && toNode.edge.contains(fromNode));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //add toNode to fromNode's edge property
  //add fromNode to toNode's edge property
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //loop through fromNode's edge property 
    //if toNode is found
      //remove toNode
  //loop through toNode's edge property 
    //if fromNode is found
      //remove fromNode
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //loop through graph's connections
    // return cb with each connection as argument 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


