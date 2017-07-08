

// Instantiate a new graph
var Graph = function() {
  // create a property that stores its connection(s)
  this.connection = {}; 
};

var GraphNode = function() {
  //create property edge
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create an new Node 
  this.connection[node] = new GraphNode();
  
  // add to this node the connection to new graph node
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  //loop through Graph's connections 
  var nodes = Object.keys(this.connection);
  for (var i = 0; i < nodes.length; i++) {
    //if a connecion equals value
    if (nodes[i] === value.toString()) {
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
  var edge = this.connection[node].edge;
  if (edge.length > 0) {
    for (var i = 0; i < edge.length; i++) {
    // remove each edge with remove edge method
      this.removeEdge(node, edge[i]);
    }
  }  
  //remove node from graph connections
  delete this.connection[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  
// input -Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if each input node contains a reference to the other in the edge property
  var fromEdge = this.connection[fromNode].edge;
  return (fromEdge.includes(toNode));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //add toNode to fromNode's edge property
  var fromEdge = this.connection[fromNode].edge;
  var toEdge = this.connection[toNode].edge;
  fromEdge.push(toNode);
  //add fromNode to toNode's edge property
  toEdge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //loop through fromNode's edge property 
  var fromEdge = this.connection[fromNode].edge;

  for (var i = 0; i < fromEdge.length; i++) {
    //if toNode is found
    if (fromEdge[i] === toNode) {
      //remove toNode
      fromEdge.splice(i, 1);
      
    }
  }
  //loop through toNode's edge property 
  var toEdge = this.connection[toNode].edge;
  for (var i = 0; i < toEdge.length; i++) {
    //if fromNode is found
    if (toEdge[i] === fromNode) {
      //remove fromNode
      toEdge.splice(i, 1);
      
    }
  }    
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //loop through graph's connections
  for (var key in this.connection) {
    // return cb with each connection as argument 
    cb(key);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 .addNode: constant O(1)
 .contains: linear O(n)
 .removeNode: worst case linear O(n)
 .hasEdge: linear 0(n)
 .addEdge: constant O(1)
 .removeEdge: quadratic O(n^2)
 .forEachNode: linear O(n)
 */













