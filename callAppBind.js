function greet(e) {
return e + " My name is " +  this.name;
}

var person = {
name: "John",

};

var anotherPerson = {
name: "Doe",

};

var bound= greet.bind(person );
console.log(bound("Hello dude"));
console.log(greet.call(person, 'Daroffa'));
console.log(greet.apply(anotherPerson, ['Daroffa']));

