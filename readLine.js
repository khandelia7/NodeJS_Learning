const readline=require("readline");
 
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
 
let num1=Math.floor((Math.random()*10)+1);
let num2=Math.floor((Math.random()*10)+1)
rl.question(`What is the sum of ${num1} + ${num2}\n`,(userInterface)=>{
        // console.log(`hi ${userInterface}`);
        // rl.close();
        let answer=num1+num2;
        if(userInterface.trim() == answer){
            console.log("Ya you got it right");
            rl.close();
        }else{
            rl.setPrompt(`Incorrect answer please try again ${num1} + ${num2}=..\n`);
            rl.prompt();
            rl.on('line',userInput=>{
               
                // actuall logic terminate the rl line
                if(userInput.trim() == answer){
                    console.log("Ya you got it right");
                    rl.close();
                }else{
                    rl.setPrompt(`Incorrect ansswer please try again ${num1} + ${num2}=..\n`);
                    rl.prompt();
                }
            })
        }
})