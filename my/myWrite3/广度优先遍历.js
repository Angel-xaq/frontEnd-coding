let tree={
    val:'a',
    children:[
        {
            val:'b',
            children:[
                {
                    val:'d',
                    chileren:[]
                },
                {
                    val:'e',
                    chileren:[]
                }
            ]
        },
        {
            val:'c',
            children:[
                {
                    val:'f',
                    children:[]
                },
                {
                    val:'g',
                    children:[]
                }
            ]
        }
    ]
}

function dfs(root){
    let queue =[root];
    while(queue.length>0){
        let temp=queue.shift();
        console.log(temp.val);
        if(!temp.children){
            continue;
        }
        temp.children.forEach(child => {
            queue.push(child);
        });
    }
}
dfs(tree);