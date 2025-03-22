// 4. Functions & Scope
//     Function Declaration vs Expression
//     Arrow Functions
//     Higher-Order Functions (Passing functions as arguments)
//     Closures & Lexical Scope
//     Callbacks (Sync vs Async Execution)


// function declaration 
/*
A function is a block of reusable code designed to perform a specific
task. It allows us to write modular, maintainable, and reusable code.
*/


// Example 1 
function greetOurUser(name){
   return `Hello, ${name}`
}
console.log(greetOurUser("Tekneikos"))

// Example 2 
// we will create a function which will return greatest element between two numbers 
function findMaximum(a,b){
    if(a>b){
        return a;
    }else{
        return b
    }
}
console.log(findMaximum(10,20));
console.log(findMaximum(4,20));


// function expressions

/*

A function expression assigns a function to a variable. Unlike function
declarations, function expressions are not hoisted.

*/
// console.log(greet("Tekneikos")) (it is not hoisted)

const greet = function(name){
    return `Hello ${name}`
}
 console.log(greet("Tekneikos"))

/* you should use 
✅ When you need an anonymous function (without a name).
✅ When you want to assign functions to variables dynamically.
✅ When you need a callback function for event handling, setTimeout, 
or array methods.
✅ When you want to create Immediately Invoked Function Expressions (IIFE).
*/

// example 2

const add = function (a,b){
    if(a>b){
        return a;
    }else{
        return b
    }
}
console.log(add(10,20));
console.log(add(4,20));


// Example 3

// Program to return square of a number 

const squareOfANumber=function(num){
    return num*num;
}
console.log(squareOfANumber(4))


