// DataTypes 
let age = 21  // number
let price =99.9  //floating point

let name = "Tekneikos";  // string

console.log(`My age is ${age}`)

console.log(`I am  ${name}`)


let isJavaScriptFun = true

console.log(`is javascript is fun : ${isJavaScriptFun}`)

//100 apples -> 2 hand container 




// Variable 

// let , const , var 

var tekneikosAge =10;
tekneikosAge=30;
console.log(`Age ${tekneikosAge}`)


//let 

var yourAge =10;
yourAge=30;
console.log(`Age ${yourAge}`)

// const 
const herAge =10;
console.log(`Age ${herAge}`)

//scope : defines where a variable is accessible in your code 

// Global Scope -> variables accessible everywhere 
// function Scope -> variables accessible only inside that function 
// Block Scope -> variables accessible only within the block {}



// global scoped 
let globalScope ="I am Global ";

function test (){
    console.log(globalScope)

}
test()
// function scoped
function functionScope (){
    let functionScoped="function scope"
    console.log(functionScoped)

}

functionScope()

// block scope 
{
    let blockScoped ="inside block"
    console.log(blockScoped)
}

// Avoid Using Var  Reasons : 


if(true){
    var numbers=20;
}
console.log(numbers)


// Reason 2 

var importantData = "important";
var importantData="notImportant";
console.log(importantData)

// inCase of Let (not able to redeclare)
// let veryImportantData="important"
// let veryImportantData="notImportant"

// var is hoisted with undefined (unexpected behavior)

