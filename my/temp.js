a=1;
function test(e){
	function e(){
	}
	arguments[0]=2;
	console.log(e);  //2?  func?
	if(a){
		var b=3;
	}
	var c;
	a=4;
	var a;
	console.log(b); //unde
	f=5;
	console.log(c);  //und
	console.log(a);  //4
}
var a=1;
test(1)
console.log(!!' '+!!'')

let str ="i am good man";
let newStr = Array.prototype.slice.call(str);
console.log(typeof newStr);
console.log(newStr.reverse().join(""))//nam doog ma i
