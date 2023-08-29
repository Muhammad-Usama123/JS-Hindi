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