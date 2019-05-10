// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// inputs: className 
// outputs: 
//   returns an array-like object of all child elements which have all of the given class names. 
//   When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; 
//   it will return only elements which are descendants of the specified root element with the given class names.
// constraints: n/a
// strategy: 
//   You should use document.body, element.childNodes, and element.classList
// transformation steps:
// psuedo:
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
	let result = [];
  	if(!element){
  		var arr = document.body.children;
  	}else{
  		var arr = element;
  	}
  	
 	for(var index in arr){
		if(arr[index].className){
		    if(arr[index].className.includes(className)) {
		  		result.push(arr[index]);
		  	}
		}
	  	if(arr[index].children){
	  		result.concat(getElementsByClassName(className, arr[index].children));
	  	}
  	}
  	return result;
};

/*
var htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];
*/

/*
htmlStrings.forEach(function(htmlString) {
      var $rootElement = $(htmlString);
      $('body').append($rootElement);
})
*/