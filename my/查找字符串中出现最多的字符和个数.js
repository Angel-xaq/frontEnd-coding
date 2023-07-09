function findMax(str){
	// const obj = {};
	const map = new Map();  //用哈希表
	const len = str.split('').length;  //拆分为数组
	for(let i = 0; i<len; i++){
		if(!map.has(str[i])){
			map.set(str[i],1);
		}
		else{
			map.set(str[i],map.get(str[i])+1);
		}
		// if(!obj[str[i]])obj[str[i]]=0;
		// obj[str[i]]++;
	}
	let max = 0;
	let char = '';
	for(let [key,value] of map){
		if(value>max){
			max = map.get(key);
			char = key;
		}
	}
	// for(let key in obj){
	// 	if(obj[key]>max){
	// 		max = obj[key];
	// 		char = key
	// 	}
	// }
	return 'max: '+max+'  char: '+char; 
}
let str = 'abcabcabcbbccccc';
console.log(findMax(str))
//这道题也可以用哈希表做