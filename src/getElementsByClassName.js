// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

  var result = [];

  var getClassNameTarget = function(parent){
    var nodes = parent.childNodes
    for(var i = 0; i < nodes.length; i++){ // Go through children of current parent node
      var classList = nodes[i].classList || [];  // Grab an array of the classes for the current node
      classList.forEach(function(currentClass) { 
        if(currentClass === className){
          result.push(nodes[i]);  // If the node has a class that matches the target, add it to the result
        }
      });
      if(nodes[i].children){  
        getClassNameTarget(nodes[i], className);  // If there are children of current child node, recurse
      }
    }
  }

  getClassNameTarget(document);  //document.body doesn't work, just document does... 
  return result;
};
