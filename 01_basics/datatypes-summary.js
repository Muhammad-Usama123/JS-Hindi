// Primitives

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 53712743126874n



// Reference (Non Primitive)

// Array, Objects, Functions 

const heroes = [ "Superman", "Batman", "Spiderman"]

let myObj = {
    name: "Usama",
    age: 26,
}

const myFunction = function(){
    console.log("World")
}

console.log(typeof myFunction)

//type of null => object
//type of function => function object or object... all non primitives(array, function, object) types are objects


// ++++++++++++++++++++++++++++++++++ Memory++++++++++++++++++++++

// 2types: Stack(Primitive dataypes use stack memory), Heap (Non- primitive dataypes use heap memory)

// stack memory means they give copy of value of variable from stack memory

// heap memory means they give actual variable's value reference so whenever we change anything in that value it changes in real value

let myName = "Usama"

let anotherName = myName
anotherName = "ABCD"

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo =userOne

userTwo.email = "Usama@google.com"

console.log(userOne.email);
console.log(userTwo.email);