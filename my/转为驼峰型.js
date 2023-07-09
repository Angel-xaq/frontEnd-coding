var sl = 'get-add-cc';
function getCamelCase(str) {
	return str.replace(/-([a-z])/g, function(a,i) {  //有分组，第一个是-a，第二个是a，i就是第二个，把第二个返回大写，第一个不返回就消失了
		console.log(i);
		return i.toUpperCase();
	})
}
console.log(getCamelCase(sl))



// function toUpperC (sl){
//   let reg = /-\w/g;
//   return sl.replace(reg, x=>x.slice(1).toUpperCase());
// }
// console.log(toUpperC (sl))