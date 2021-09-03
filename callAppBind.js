function greet(e) {
return e + " My name is " +  this.name;
}

var person = {
name: "John",
/*greet: greet*/
};

var anotherPerson = {
name: "Doe",
/*greet: greet*/
};

var bound= greet.bind(person );
console.log(bound("Hello dude"));
console.log(greet.call(person, 'Daroffa'));
console.log(greet.apply(anotherPerson, ['Hiiiiiii']));

/*console.log(anotherPerson.greet.call(person, 'Daroffa'));
console.log(anotherPerson.greet.apply(anotherPerson, ['Hiiiiii']));*/
