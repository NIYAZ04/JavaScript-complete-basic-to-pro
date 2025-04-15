//Hoisting (Variables & Functions)


/*
 JavaScript does not move or add code to hoist declarations. 
 These declarations are put into memory during the compile phase of
  the interpreter - making them available before the code is executed.

*/
// var 
// console.log(name);
// var name ="Tekneikos"
// console.log(name);

// let 


//console.log(name);
// let name ="Tekneikos"
// console.log(name);


//const 

// console.log(name);
// const name ="Tekneikos"
// console.log(name);



// What is temporal dead zone ?
// It is a specific time period in the execution of javascript 
// code where the variables declared with let and const exists but
//  cannot be accessed until the value is assigned.
// Any attempt to access them result in reference errors.

  function somemethod() {
   console.log(secondCount)// undefined
   console.log(firstCount) // referance error 
    let firstCount = 2;
    var secondCount=1;
  }
  somemethod()

          // hosting in functions 

// function declarations -> Hoisted
// function expression -> no Hoisted 




//function declarations -> Hoisted
greet()

function greet(){
    console.log("Hey user welcome to my website")
}


// function expressions 
greet();
const greet= function(){
    console.log("Hey User Welcome to my website")
}