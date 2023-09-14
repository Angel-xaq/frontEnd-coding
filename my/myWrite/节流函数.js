//函数节流是指在规定的时间内，只能有一次触发事件的回调函数执行，如果在同一个延迟时间内事件被触发多次，只有一次触发能执行。
//节流可以降低事件调用的频率，比防抖更有规律
//使用场景：使用在 scroll 函数的事件监听上，监听到滚动到底部就加载更多数据
function myThrottle(func,delay){
    let timer=null;
    return function(...args){
        if(timer) return;  //定时器存在就直接返回，不做什么
        if(!timer){     //首次触发后开启定时器，(在这个时间内再次触发无效)，时间到了就执行一次函数事件，并让定时器=null，等待下一次的首次触发。
            timer=setTimeout(()=>{
                func.apply(this,args);
                timer=null;
            },delay);
        }
    }
}
//节流函数不存在clearTimeout的说法

