let person_list = [{
    "name": "thompson",
    "age": "24",
    "occupation": "Software developer",
    "java_rating": "5",
    "javascript_rating": "5",
    "refund":100
},
{
    "name": "franky",
    "age": "18",
    "occupation": "Software developer",
    "java_rating": "3.5",
    "javascript_rating": "3",
    "refund":100
},
{
    "name": "david",
    "age": "21",
    "occupation": "student",
    "java_rating": "3",
    "javascript_rating": "4",
    "refund":50
},
{
    "name": "marshan",
    "age": "19",
    "occupation": "student",
    "java_rating": "5",
    "javascript_rating": "2",
    "refund":150
},
{
    "name": "sunny",
    "age": "24",
    "occupation": "Software developer",
    "java_rating": "5",
    "javascript_rating": "6",
    "refund":500
}]

//Return a array of person name
let person_name = person_list.map(person =>person.name);
console.log(person_name)

//Return a list of student who's age is <= 24
let filtered_person_list = person_list.filter(person => person.age<=24);
console.log(filtered_person_list)

//Use reduce function to get total refund 
let totalRefund=person_list.reduce((total,person)=>total+person.refund,0);
console.log(totalRefund)

//find total refund for all the user who is software developer and age below 23
let mix = person_list.filter(person => person.occupation == "Software developer" && person.age<=23)
                    .reduce((total,person) =>total+person.refund,0);
console.log(mix)