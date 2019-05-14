// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;
// If a reviver is specified, the value computed by parsing is transformed before being returned. Specifically, 
// the computed value and all its properties (beginning with the most nested properties and proceeding to the original value itself)
// are individually run through the reviver. Then it is called, with the object containing the property being processed as this, 
// and with the property name as a string, and the property value as arguments. 
// If the reviver function returns undefined (or returns no value, for example, if execution falls off the end of the function), 
// the property is deleted from the object. Otherwise, the property is redefined to be the return value.
// If the reviver only transforms some values and not others, be certain to return all untransformed values as-is, 
// otherwise they will be deleted from the resulting object.



// inputs:
// 	text: The string to parse as JSON. See the JSON object for a description of JSON syntax.
// 	reviver [Optional]: If a function, this prescribes how the value originally produced by parsing is transformed, 
// 	before being returned.
// outputs: 
//   The Object corresponding to the given JSON text. If a reviver is present, it transforms the JSON object before returning it.
// constraints: 
// 	Throws a SyntaxError exception if the string to parse is not valid JSON.
// strategy:
// 	series of conditionals to determine the type of data being passed in and if a "reviver" is present.
// 	transform the data using a loop and applying the reviver before returning. 
// transformation steps: parseJSON("{1: 'hello'}")
// 	1st check str[0] to determine data type --> object
// 	2nd look for first colon. element before becomes key, element after becomes value
// 	3rd look for commas/curly braces to determine if it has more properties or just 1;
// 	4th return object {'1' : 'hello'};
// psuedo:
//   check string[0] data type
//    if s[0] is [ then check if s[1] is [ *loop until no more [
//    if s[0] is { create an empty object to use as a collector
//    if s[0] is ' or " return s;
//    if s[0] is typeof 'number' return s;
//    if s[0] is n check if s === null? return null;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json, reviver) {
  let o = json[0];
  if (o === '{') {
  	let result = {};
  }
  if (o === '[') {
  	apply all these conditionals to json[1]
  }
  if (o === `'` || o === `"`) {
  	return json.substring(1, json.length-1);
  }
  if (Number(o) || o === '0') {
  	return Number(json);
  }
  if (json === 'null') {
  	return null;
  }
};

var parseArray = function(string){
  
};



