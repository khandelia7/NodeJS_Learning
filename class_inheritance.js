class Employee{
 
    constructor(name){
        this.name=name;
    }
 
    getname(){
        return this.name;
    }

    speak(){
        return this.type;
    }

}

class partTime extends Employee{
    constructor(name){
        super(name);
        this.type = "Part-Time";
    }
}

class fullTime extends Employee{
    constructor(name){
        super(name);
        this.type = "Full-Time";
    }
}

class intern extends Employee{
    constructor(name){
        super(name);
        this.type = "intern";
    }
}
 
let sunny = new fullTime("Sunny");
let akash = new intern("Akash");
 
console.log(`Hi i am ${sunny.getname()} and ${sunny.speak()} Employee`)
console.log(`Hi i am ${akash.getname()} and ${akash.speak()} Employee`)