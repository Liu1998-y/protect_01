let fs=require('fs')

fs.readFile('./test1.txt',function(error,data){
    // console.log(data.toString());
    if (error) {
        console.log('读取文件失败了')
      } else {
        console.log(data.toString())
      }
})

fs.writeFile('./test11.js','新建文件啦',function(error){
  if(error){
    console.log("写入失败了");
  }else{
    console.log("写入成功了");
  }
})