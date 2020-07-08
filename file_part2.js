const fs= require('fs');
const path =require('path')
 
// create a file
let filename="example3.txt"
let workdir=path.join(__dirname,filename);
console.log(workdir);
fs.writeFile(workdir,"This is an example and I am writing it via program",(err)=>{
    if(err){
        console.log("there was an error while writing to a file ",err)
    }else{
        console.log("File created");
 
        // read the file 
        fs.readFile(workdir,'utf-8',(err,data)=>{
            if(err){
                console.log("there was an error while reading to a file ",err)
            }else{
                console.log(data);
                // rename a file
                fs.rename(workdir,"example4.txt",(err)=>{
                    if(err){
                        console.log("there was an error while renaming a file ",err)
                    }else{
                        console.log("File Renamed")
                    }
                });
            }
        })
    }
});