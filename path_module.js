const path =require('path')
 
console.log(__filename,__dirname);
// get base name 
console.log("base name ",path.basename(__filename))
 
// get the extension of file 
console.log(path.extname(__filename));
 
// get an information of a file 
let {ext,base}=path.parse(__filename)
console.log("file information: ",ext,base)
 
// contcate the file path 
console.log(path.join(__dirname,'information','hello world'))