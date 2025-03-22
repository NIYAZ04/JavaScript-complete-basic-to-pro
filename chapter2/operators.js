// Operators (Arithmetic, Logical, Bitwise, Ternary)
// Arithmetic
let a = 10, b = 3;
console.log(a + b);  
console.log(a - b);  
console.log(a * b);  
console.log(a / b);  
console.log(a % b);  // (Modulus - Remainder)
console.log(a ** b); //  (Exponentiation: 10^3)


//Assignment Operators
let x = 5;
x += 3; 
console.log(x);  

x -= 2;  
console.log(x);

x *= 4; 
console.log(x);

x /= 3; 
console.log(x);

x %= 5;  // x = x % 5 (3)
console.log(x);

x **= 2; // x = x ** 2 (9)
console.log(x);



// Comparison Operators


console.log(5 == "5");   //   (Checks only value, not type)
console.log(5 === "5");  //  (Strict equality, checks type too)
console.log(10 != "10"); //  (Values are same)
console.log(10 !== "10");//   (Different types)
console.log(8 > 5);      // 
console.log(8 < 5);      // 
console.log(8 >= 8);     // 
console.log(8 <= 9);     // 


//Logical Operators
console.log(true && false); //  (Both must be true)
console.log(true || false); //  (At least one must be true)
console.log(!true);         //  (Negation)
console.log(!(5 > 3));      //  (Negation of true)




// 6. Ternary Operator (? :)


let age = 18;
let message = (age <= 10) ? "You are an adult" : "You are a minor";
console.log(message); // "You are an adult"


//7. Type Operators (typeof, instanceof)

console.log(typeof 42);       // "number"
console.log(typeof "hello");  // "string"
console.log(typeof true);     // "boolean"
console.log(typeof {});       // "object"