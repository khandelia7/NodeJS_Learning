//Call Back code
function Math(operation,a,b,callback){
    // perform arithmetic operation
    switch(operation){
        case 'add': callback(null,a+b); break;
        case 'sub':callback(null,a-b); break;
        case 'div':callback(null,a/b); break;
        case 'mult':callback(null,a*b); break;
        default :callback(new Error("Operation not found"))
    }
}
 
function implementation(error,answer){ 
    // perform arithmetic operation
    if(error){
        console.log("there was an error",error)
    }else{
        console.log("the answer is ",answer)
    }
}

Math("add",10,20,implementation);
Math("div",10,20,implementation);
Math("mult",10,20,implementation);


