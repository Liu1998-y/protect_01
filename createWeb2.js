let http=require('http');
let fs=require('fs');

const server=http.createServer((req,res)=>{
    // res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    const ip=res.socket.remoteAddress;
    const port=res.socket.remotePort;
    // res.end(`IP地址:${ip};port端口号:${port}`);
    // res.end(`<p>点击可跳转 <a>跳转</a></p>`);
    fs.readFile('./1.html',(err,data)=>{
        res.end(data);
    });
}).listen(7200,()=>{
    console.log("地址"+"http://127.0.0.1:7200/");
});

// const http = require('http');
// const server = http.createServer((req, res) => {
//   const ip = res.socket.remoteAddress;
//   const port = res.socket.remotePort;
//   res.end(`Your IP address is ${ip} and your source port is ${port}.`);
// }).listen(7200);