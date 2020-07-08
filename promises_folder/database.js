class Database{
 
    constructor(){
    }
 
    // verify username and password
    verfiyUser(username,password,callback){
        return new Promise((resolve,reject)=>{
            if((username === "admin" && password === "admin") || (username === "user" && password === "user")){
                console.log("verfied user")
                resolve(true)
            }else{
                reject(new Error("username and password doesnot match"),null);
            }
        })
       
    }
 
    //check the role
    getRole(username,callback){
        return new Promise((resolve,reject)=>{
            console.log(username);
            if(username){
                switch(username){
                    case 'admin': resolve({role:'admin'}); break;
                    case 'user': resolve({role:'user'}); break;
                    default : reject(new Error("invalid user")); break;
                }
            }else{
                reject(new Error("invalid user"),null)
            } 
        })
    }
 
    // log role
    logAccess(username,callback){
        console.log("username at ",username)
        return new Promise((resolve,reject)=>{
            if(username){
                // console.log(`${username.role} has access the resource`);
                resolve(null)
            }else{
                // console.log(`${username.role} cannot  access the resource`);
                reject(new Error(`There is a issue while logging access:`));
            }   
        })
        
    }
}
 
module.exports=new Database();