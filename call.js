  function fn(e){
		return e + this.list;
	}
const some = {
	list: "JOPA",

};
let all = fn.call(some, "Hi  ");
/*let c = fn.bind(some);
let meet = "Hi cool ";
let all= c(meet);*/
let b = setTimeout(all, 1000);
 console.log(b);