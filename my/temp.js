var arr = [1, [2, [3, 4]]];
function flatten(arr) {
    
    arr = [].concat(...arr)
	arr = [].concat(...arr)
	return arr;
}
console.log(flatten(arr));