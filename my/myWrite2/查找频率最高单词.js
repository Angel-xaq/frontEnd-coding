let article = "Age has reached the end of the beginning of a word. May be guilty in his seems to passing a lot of different life became the appearance of the same day;";
function findMostWord(article){
	article = article.trim();   //删除字符串的头尾空白符
    var arr = article.match(/[A-z]+/g);  	//* 利用正则取出所有单词存放于数组中
    article = " " + arr.join(" ") + " "; //所有单词以空格间隔重新拼接
    var max = 0,word,num = 0,maxword = "";
	//遍历拼接成的新字符串
    for(var i = 0; i < arr.length; i++) {        
		word = new RegExp(" " + arr[i] + " ",'g');  //将所有的单词作为匹配项
		num = article.match(word).length;  //article.match(word)返回一个数组，所以这是统计每个单词的次数
		if(num > max){ //比较所有单词出现次数
			max = num;
			maxword = arr[i];
		}
   }
   return {maxword,max};
}
console.log(findMostWord(article));