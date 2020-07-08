//Array Destructuring
let city = ["mumbai", "jaipur"];
let [city1, city2, city3] = city;
console.log(city1, city2, city3)

//Object Destructuring
let person = {
    "name": "thompson",
    "age": "24",
    "occupation": "Software developer",
    "java_rating": "5",
    "javascript_rating": "5",
    "refund":100
}
let {name, age} = person;
console.log(name, age);