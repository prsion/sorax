var person = {
	age: 45,
	gender: 'male',
	name: 'prsion',
	sayHi: function(){ 
		return 'Hello' +  this.name;
	}
};

console.log(person.age);
console.log(person['age']);
console.log(person.sayHi());
			
var obj = new Object();
obj.propety = 'value';
console.log(obj.propety);

var object = Object.create({ x: 10, y: 54400 });
console.log(object.x);
console.log(object.y);
															
var person2 = Object.create(person);
person2.name = 'go';	
console.log(person2.name);		
console.log(person2.sayHi());
						
						


														
		
					

			
