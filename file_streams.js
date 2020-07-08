const fs=require("fs")
const path=require("path");

const readStream=fs.createReadStream('./example1.txt','utf-8');
const writeStream=fs.createWriteStream('./copydata.txt');
readStream.on('data',(chunk)=>{
    // console.log(chunk);
    writeStream.write(chunk);
})
//readStream.pipe(writeStream)