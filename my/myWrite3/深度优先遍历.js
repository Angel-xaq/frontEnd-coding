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
    console.log(root.val);
    if(!root.children){
        return;
    }
    root.children.forEach(child => {
        dfs(child);
    });
}
dfs(tree);