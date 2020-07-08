// Spread Operator code
let number = [-1, 2, 4, 6,100, 45, 34, 0];
let min = Math.min(...number)
let max = Math.max(...number)
console.log(min, max)

// Rest Operator code
function implementation(error, ...params){
    console.log(params);
}
implementation(null, 10, 20, 30, 3, 04);
implementation(null, 10);