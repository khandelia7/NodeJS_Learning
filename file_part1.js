const fs = require('fs');
const path = require('path')

fs.writeFileSync('example2.txt', "This is file example2")
// create and write a file
fs.writeFile('example.txt', "This is file example", (err)=>{
    if(err){
        console.log("There was an error while writing a file", err);
    }
    else{
        console.log("File created");
        
        // append a file
        fs.appendFile('example.txt', " .This is append msg in file example", (err)=>{
            if(err){
                console.log("There was an error while appending a file", err);
            }
            else{
                console.log("File appended");
                
                // read a file
                fs.readFile('./example.txt', 'utf-8', (err, data) => {
                    if(err){
                        console.log("There was an error while reading a file", err);
                    }
                    else{
                        console.log(data);

                        fs.rename('example.txt', 'example1.txt', (err)=>{
                            if(err){
                                console.log("There was an error while renaming a file", err);
                            }
                            else{
                                console.log("File Rename");

                                //delete the file
                                fs.unlink('example2.txt', err =>{
                                    if(err){
                                        console.log(err);
                                    }
                                    else{
                                        console.log("File example2 deleted successfully")
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})