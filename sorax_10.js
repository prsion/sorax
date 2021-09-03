var name= "Alex", homecity;

if (name==="John"){
	homecity = "Boston";
} else if (name==="Alex"){
	homecity = "Kharkov";
 }else if (name==="Do"){
	homecity = "LA";
 }

console.log(homecity);


switch (name) {
case "John" : homecity = "Boston"; break;
case "Alex" : homecity = "Kharkov"; break;
case "Do" : homecity = "LA";
}

console.log(homecity);

