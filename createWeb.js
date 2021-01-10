const { log } = require('console');
let http=require('http');
let server=http.createServer();

server.on('request',function(request,response){
    //这里可以在不同的请求路径下面输出不同的数据
    //request.url为统一资源器
    if(request.url=='/login'){
        response.write('login');
    }else if(request.url=='/register'){
        response.write('register');
    }else{
        let arr=[
            {
                name:"苹果",
                price:10
            },
            {
                name:"梨子",
                price:8
            },
            {
                name:"西瓜",
                price:15
            }
        ]
        response.write(JSON.stringify(arr));
    };
    response.end();
})
server.listen(7200,function(){
    console.log("地址http://127.0.0.1:7200/");
})