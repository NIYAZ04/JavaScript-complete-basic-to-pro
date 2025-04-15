// Higher-Order Functions (Passing Functions as Arguments)

// A higher-order function is a function that either:

// Takes another function as an argument
// Returns a function


// Example 1 (function as an argument)

const calculator = (a,b,operation )=>operation(a,b);
const add= (x,y)=>x+y;
const subtract =(x,y)=>x-y;

console.log(calculator(10,5,add));
console.log(calculator(20,10,subtract));

//Example 2 ( Returns a function)

function mutiplyBy(factor){
    return function(number){
        return number * factor;
    };
}
const double = mutiplyBy(2);
const triple = mutiplyBy(3);

console.log(double(5));
console.log(triple(5));

// Example number 3
// function as an argument 

function greet(name,callback){
    return callback(name);
}
function morningGreeting(name){
    return "Good Morning"+name;

}
function eveningGreeting(name){
    return "Good Evening"+name;
    
}
console.log(greet("Tekneikos",morningGreeting))
console.log(greet("Tekneikos",eveningGreeting))


// Example 4 
// Returns a function 

function createDiscount(discountPercentage){
    return function(originalPrice){
        return originalPrice-(originalPrice*discountPercentage/100);
    };
}

const studentDiscount=createDiscount(10);
const blackFridayDiscount=createDiscount(50);

console.log(studentDiscount(1000));
console.log(blackFridayDiscount(1000));

