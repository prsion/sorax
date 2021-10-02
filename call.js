  function fn(e){
		return `${e} + ${this.name}`;
	}
const some = {
	name: "JOPA",

};

var res = fn.bind(some);

function Call (param){
  console.log(res(param));
}



setTimeout(Call, 1000, "Hi");


