// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// inputs: any data type and potentianally a callback function to transform the input object;
// outputs: a string with appropriate punctiation to represent input object/array/w.e
// constraints: 
			// undefined values, so you should skip those key/value pairs. return for unstringifiable values should === [{}]
			// keys should be strings, values should be numbers
// strategy: identify the data type being passed in,
//   use conditionals to apply appropriate punctuation to the return value,
//   iterate through objects and arrays.
// transformation steps: 
//    stringifyJSON({1 : 'hello'})
//    1st step check what data type input is -->> object
//    2nd step create collector string with punctiation {}
//    3rd step iterate through object checking type and adding to collector string based on type -->  '{' + '1' + ':' + 'hello' + '}'
//    4th return collector string. ---> `{1 : 'hello'}`
// psuedo: 
//   use set of conditionals to check data type
//     return string with appropriate syntax for data type;
//   call stringifyJSON on properties/elements of input;
//     return string with appropriate syntax to string created by base case;

// use map and reduce and join to iterate through arrays/objects and return them


var stringifyJSON = function(obj) {
  // your code goes here
	

	if(Array.isArray(obj)){
		return `[${obj.map(stringifyJSON).join(',')}]`
	}
	if(obj === null){
		return `null`;
	}
	if (typeof obj === 'object') {
		var output = '{'
		for(var key in obj){
			if(typeof obj[key] === 'object'){
				output += `${key}: ${stringifyJSON(obj[key])}`
			}
		}
		return `{` + stringifyJSON(obj) + `}`;
	}
	if (typeof obj === 'string') {
		return `"${obj}"`;
	}
	if (typeof obj === 'number') {
		return obj.toString();
	}
	if (typeof obj === 'undefined') {
		return '';
	}
	if (typeof obj === 'function') {
		return '';
	}

};

// var clone = function(input) {
	
// 	if(Array.isArray(input)){
// 		var cloned = []
// 	}else{
// 		var cloned = {};
// 	}
// 	for (let key in input) {
// 		let value = input[key];
// 		if (typeof value === "object") {
// 	    	cloned[key] = clone(value);
// 		} else {
// 			cloned[key] = value;
// 		}
// 	}

// 	return cloned;
// };