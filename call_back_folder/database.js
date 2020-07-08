class Database{
    constructor(){
    }
 
    // verify username and password
    verfiyUser(username,password,callback){
        if((username === "admin" && password === "admin") || (username === "user" && password === "user")){
            console.log("verfied user")
            callback(null,true)
        }else{
            callback(new Error("username and password doesnot match"),null);
        }
    }
 
    //check the role
    getRole(username,callback){
        if(username){
            switch(username){
                case 'admin': callback(null,{role:'admin'}); break;
                case 'user': callback(null,{role:'user'}); break;
                default : callback(new Error("invalid user"),null); break;
            }
        }else{
            callback(new Error("invalid user"),null)
        }
    }
 
    // log role
    logAccess(username,callback){
        if(username){
            console.log(`${username.role} has access the resource`);
            callback(null)
        }else{
            console.log(`${username.role} cannot  access the resource`);
            callback(new Error(`There is a issue while logging access: ${username}`));
        }
    }
}
 
module.exports=new Database();