var i=5;

var func = function() {
  var i=10;
	console.log(i);

	var innerFunc = function(){
	var i= 15;
			console.log(i);
	};  	 
	innerFunc();
	console.log(i);

};

func();


var counter = (function() {
	var count = 0;
	return function(num) {
		count = num !==undefined ? num : count;
     return count++;
	};
}());

	console.log(counter());
	console.log(counter());
	console.log(counter(333));
	console.log(counter());
	console.log(counter());