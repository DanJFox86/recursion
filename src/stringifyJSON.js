// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  	var output = "";

	var stringifyEle = function(ele, index, length) {
	  
	  var addComma = function() {
	    if(index < length - 1) {
	      output += ",";
	    }
	  }
	  
	  if (ele == Number(ele)) {
	    output += ele;
	    addComma();
	  } else if(ele === null) {
	    output += "null";
	    addComma();
	  } else {
	    output += "\"" + ele + "\"";
	    addComma();
	  }
	}

	var stringify = function(currObj) {
	  if(Array.isArray(currObj)) {
	    output += "[";
	    for(var i = 0; i < currObj.length; i++) {
	      if(!Array.isArray(currObj[i]) && typeof currObj[i] !== 'object') {
	        stringifyEle(currObj[i], i, currObj.length);
	      } else {
	        stringify(currObj[i]);
	        if(i < currObj.length - 1) {
	          output += ",";
	        }
	      }
	    }
	    output += "]";
	  } else if (currObj && typeof currObj === 'object') {
	    output += "{";
	    var keys = Object.keys(currObj);
	    for (var i = 0; i < keys.length; i++) {
	      console.log(typeof currObj[keys[i]] === 'undefined');
	      if(typeof currObj[keys[i]] !== 'undefined' && typeof currObj[keys[i]] !== 'function') {
	        output += "\"" + keys[i] + "\":";
  	        if (typeof currObj[keys[i]] !== 'object' || currObj[keys[i]] === null) {
  	          stringifyEle(currObj[keys[i]], i, keys.length);
  	        } else {
  	          stringify(currObj[keys[i]]);
  	          if(i < keys.length - 1) {
  	            output += ",";
  	          }
  	        }
	      }
	    }
	    output += "}";
	  } else {
	    if(currObj === null) {
	      output += 'null';
	    } else if(typeof currObj === 'string') {
	      output += "\"" + currObj + "\"";
	    } else {
	      output += currObj.toString();
	    }
	  }
	}
	
	stringify(obj);
	
	return output;
};

