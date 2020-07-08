const EventEmitter=require("events");
const eventEmitter= new EventEmitter();
 
// Register and event --> what to do when the event occurs
//on or once
eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(`tutorial event emitter ${num1} +${num2}= ${num1+num2}`)
});
 
// you call that event or emit an event -> the event has occurrs
eventEmitter.emit('tutorial',10,20);
eventEmitter.emit('tutorial',20,20);
 
class Person extends EventEmitter {
    constructor(name){
        super();
        this.name=name;
    }
 
    getname(){
        return this.name
    }
}
 
let thompson=new Person("thompson");
let sunny=new Person("Sunny")
thompson.on("name",()=>{
    console.log(`My name is ${thompson.getname()}`)
});
 
thompson.emit("name");
sunny.emit("name"); // this wont be call, sunny is not register