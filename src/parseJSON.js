// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  json = json.trim();
  if (json[0] === '{') {
  	
  }
  if (json[0] === '[') {
  	return parseArray(json);
  }
  if (json[0] === `'` || json[0] === `"`) {
  	return json.substring(1, json.length - 1);  	
  }
  if (Number(json[0]) || json[0] === '0') {
  	return Number(json);
  }
  if (json === 'true') {
  	return true;
  }
  if (json === 'false') {
  	return false;
  }
  if (json === 'null') {
  	return null;
  }
};

var parseArray = function(string){
  string = string.trim();
  var opening = 1;
  var closing = 0;
  var openInd = [0];
  var closeInd = [];
  var quoteCount = 0;
  var commaInd = [];
  for(var i = 1; i < string.length && closing !== opening; i ++){
  	if(string[i] === '['){
  		opening ++;
  		openInd.push(i);
  	}
  	if(string[i] === ']'){
  		closing ++;
  		closeInd.push(i);
  	}
  	if(string[i] === '"' || string[i] === "'"){
  		quoteCount ++;
  	}
  	//Do not want to add to our comma index if a comma is WITHIN another array
  	if(string[i] === ',' && quoteCount % 2 === 0 && opening - closing === 1){
  		//decrement 1 from this index because we will be trimming the opening/closing array after this.
  		commaInd.push(i - 1)
  	}
  }
  string = string.substring(openInd[0] + 1, closeInd[closeInd.length - 1]);
  if(opening !== closing){
  	throw error;
  }
  var array = [];
  for(var k = 0; k <= commaInd.length; k++){
  	if(k === 0){
  		array.push(parseJSON(string.substring(0,commaInd[k])));
  	}else if(k === commaInd.length){
  		array.push(parseJSON(string.substring(commaInd[k - 1] + 1)))
  	}else{
  		array.push(parseJSON(string.substring(commaInd[k-1] + 1, commaInd[k])))
  	}
  }
  return array;

};



