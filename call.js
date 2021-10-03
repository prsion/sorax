  function fn(e){
		return `${e} + ${this.name}`;
	}
const some = {
	name: "JOPA",

};

var Res = fn.bind(some);

 function All (param){
   console.log(Res(param));
}


setTimeout(All, 1000, "How are  U");

