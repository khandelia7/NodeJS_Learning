const database=require('./database');
 
const validateUser =function (username,password,callback){
        // call the verfiy user 
        database.verfiyUser(username,password,(error,isValid)=>{
            if(error){
                callback(error);
            }else{
                 // check for the user roles
                 database.getRole(username,(err,roleInfo)=>{
                     if(err){
                         callback(error)
                     }else{
                        // log access : user has access
                        database.logAccess(roleInfo,(error)=>{
                            if(error){
                                callback(error);
                            }else{
                                callback(null,isValid,roleInfo)
                            }
                        })
                     }
                 })
                
            }
        })    
}

validateUser("user","user",(error,isValid=false,roleInfo=undefined)=>{
    if(error){
        console.log(error)
    }else{
            console.log(`There was no error and the user is ${(isValid)?"valid user":"not valid user"} and 
    roleinfo:${roleInfo.role}`)
    }
})