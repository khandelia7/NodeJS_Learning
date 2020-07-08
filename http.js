const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url == "/name"){
        res.write("hello Akash");
        res.end();
    }else if(req.url == "/data"){
        // read a file and send content to client
        let readStream=fs.createReadStream("./data.json",'utf-8');
        res.writeHeader(200,{"content-type":"json"})
        readStream.pipe(res);
    }else{
        res.write("hello world");
        res.end();
    }
})
 
server.listen(3000,(error,port)=>{
    if(error)
        console.log(error)
    else
        console.log("server running")
})