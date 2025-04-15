// 6. Array Destructuring
// Array destructuring allows you to unpack values from arrays into distinct
// variables.

// Example 
let numbers =[1,2,3];
let[a,b,c]=numbers;
console.log(a);
console.log(b);
console.log(c);

// when you don't know about array destructuring

// let a =numbers[0]
// let b= numbers[1]


// Eample 2
//Skipping elements

let number2 = [10, 20, 30, 40];

let [first, , third] = number2;

console.log(first); 
console.log(third); 

// Program  1 (Swap values using destructuring)

let firstName = "Alice";
let lastName = "Johnson";
[firstName, lastName] = [lastName, firstName];

console.log(firstName); 
console.log(lastName);  

// Program  2(Returning multiple values from a function)

function getUserInfo() {
    return ["Alice", "alice@example.com", "Admin"];
}

let [name, email, role] = getUserInfo();

console.log(name);  
console.log(email); 
console.log(role);  

// Program 3 
function displayScores([first, second, third]) {
    console.log(` First place: ${first}`);
    console.log(` Second place: ${second}`);
    console.log(` Third place: ${third}`);
}
let scores = ["Alice", "Bob", "Charlie"];
displayScores(scores);

