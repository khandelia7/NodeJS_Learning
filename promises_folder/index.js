const database=require('./database');

const optimiseUser=function (username,password,callback){
    // call the verfiy user 
    let validUser=false;
    let  userRole={};
    database.verfiyUser(username,password)
            .then((isvalid)=>{
                validUser=isvalid;
                return database.getRole(username)
            }).then((roleInfo)=>{
                userRole=roleInfo;
                return database.logAccess(username);
            }).then((error)=>{
                callback(null,validUser,userRole);
            }).catch((error)=>{
                console.log(error);
            })
}
 
optimiseUser("user","user",(error,isValid=false,roleInfo=undefined)=>{
    if(error){
        console.log(error)
    }else{
            console.log(`There was no error and the user is ${(isValid)?"valid user":"not valid user"} and 
    roleinfo:${roleInfo.role}`)
    }
})