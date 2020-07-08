const fs=require("fs")
const path=require("path");
 
// create a dir
fs.mkdir('./Directory_Created',(err)=>{
 
    if(err){
        console.log("directory not created ",err);
    }else{
        console.log("directory created")
    }    
})

// create a dir
fs.mkdir('./folder',(err)=>{
 
    if(err){
        console.log("directory not created ",err);
    }else{
        console.log("directory created")
    }    
})

// remove or delete a dir
fs.rmdir('./folder',(err)=>{
 
    if(err){
        console.log("directory not deleted ",err);
    }else{
        console.log("directory deleted")
    }
        
})

// read the dir 
fs.readdir('./Directory_Created',(err,files)=>{
 
    if(err){
            console.log("error while reading a file",err);
    }else{
        console.log("the list of files ",files)
    }
 
})