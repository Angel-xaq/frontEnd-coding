//函数防抖是指在事件被触发 n 秒后再执行回调，
//如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
function myDebounce(func,delay){
    let timer =null;   //使用闭包，timer不会被轻易销毁
    return function(...args){  //生成函数返回
        if(timer){    
            clearTimeout(timer);    //再次调用，我就清空定时器
        }
        timer = setTimeout(()=>{    //重启定时器
            func.apply(this,args);  //时间到了才会执行，如果再次调用就会清空，再重启定时器
        },delay);
    };
}

//加强版，配置立即执行或非立即执行的选项
//立即执行场景：对于按钮的防点击，例如点赞，心心，收藏等有立即反馈的按钮
//非立即执行场景：input搜索框，用户输入过一会显示提示；窗口大小resize，只需窗口调整完成后，计算窗口大小，防止重复渲染
function myDebounce(func,delay,immediate){
    let timer =null;   
    return function(...args){ 
        if(timer){    
            clearTimeout(timer);    //清空定时器，但是定时器依旧存在，!timer等于false
        }
        if(immediate){
            if(!timer){  //如果定时器不存在，就立即执行函数事件
                func.apply(this,args);
            }
            timer = setTimeout(()=>{    //重启定时器
                timer = null;  //时间到了就会让定时器不存在，以便下次触发事件的时候立即执行事件
            },delay);
        }
        else{
            timer = setTimeout(()=>{    //重启定时器
                func.apply(this,args);  
            },delay);
        }
     
    };
}
