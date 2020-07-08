// Assignment 1: Create an Odd Even emitter
// =========================================================================================================================

// 1. Create two event name 'odd' and 'even' which accept the number and print message the number is even or number is odd
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the number:', num => {
    let even = num%2;
    if(even==0){
        console.log(`Number ${num} is even`);
        readline.close();
    }
    else{
        console.log(`Number ${num} is odd`);
        readline.close();
    }
  });

// 2. Write function that iterate from 0 to 2000 and emit an event if it's odd or even respectively
function partA() {
    for (var i = 0; i < 1; i++){
        if ((i % 2) == 0){
            console.log(i + " number is even.")
        }
        else{
            console.log(i + " number is odd.") 
        }      
    }
}
//partA();

// Assignment 2: Given the below object perform the following operation
// =========================================================================================================================

let teacher=[
    {
        name:"thompson",
        age:"24",
        salary:"2000",
        subject:"history"
    },
    {
        name:"Akash",
        age:"22",
        salary:"5000",
        subject:"geography"
    },
    {
        name:"Hersh",
        age:"20",
        salary:"900000",
        subject:"mother language"
    },
    {
        name:"sunny",
        age:"20",
        salary:"5000",
        subject:"node js"
    }
    ]

// 1. Get the total salary of the teachers
let total_salary=teacher.reduce((total,temp)=>total+(+temp.salary),0);
//console.log("The total salary of the teachers: " + total_salary);

// 2. Get the list of teacher info who age is below 22 and salary greater than 2000
let mix = teacher.filter(temp1 => temp1.age <22 && parseInt(temp1.salary)>2000);
//console.log(mix);

// 3. Get all the subject persent in the teacher array
let subj = teacher.map(temp2=>temp2.subject);
//console.log(subj)

//Assignment 3 Create your own modules with the following two function
// =========================================================================================================================

// appendData()
// 	this function will take 3 param one is the path of file source path, data to write and a callback. This function will append data to the file

// transferData() 
// 	this function will take 3 param one is the path of file to read,path of file to write and a callback. This function read the source file and paste it to destination file

