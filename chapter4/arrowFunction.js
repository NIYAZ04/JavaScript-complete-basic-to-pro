//Arrow functions provide a shorter syntax and have a lexical this binding.
// Arrow functions are a shorter and cleaner way to write function in JS

// Syntax 
//  const functionName = (parameters)=> expression;

// Before 

const add = function(a,b){
    return a+b;
}
console.log(add(5,10));

// After Arrow functions 

const addNew = (a,b) => a+b;
console.log(addNew(5,10))

// Example 2 

const square = (num) => num*num;
console.log(square(2))

// important rules
/*
    •If there’s only one parameter, you can omit () 
    (e.g., num => num * 2).

	•If there’s only one expression, you can omit {} and return
     (e.g., num => num * 2).

	•If there are multiple parameters or multiple lines, 
    {} and return are required.
*/


// Example 3

const canVote = age=>age>=18?"Eligible to vote":"not eligible to vote";
console.log(canVote(20))

// Example 4
const SimpleInterestCalculator = (p,r,t)=>(p*r*t)/100;
console.log(SimpleInterestCalculator(1000,5,2));

// Example 5
const isVowel = char=>"aeiouAEIOU".includes(char)?"vowel":"Not a Vowel";
console.log(isVowel('a'));
console.log(isVowel('b'));
