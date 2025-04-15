// Array in JS
/**
 An array in Javascript is a data structure used to store multiple values
in a single variable. Arrays are ordered, indexed (starting from O), and
can hold valves of any data type (numbers, strings, objects, or even other
arrays).
 */
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits)

let colors= ["Red","Blue","Pink"];
console.log(colors[1]);

// Modifying Array

colors[1]="Yellow"
console.log(colors)

// Few Methods push(),pop(),unshift(),shift()

let animals = ["Dog","Cat"];
console.log(animals)
//Push()
animals.push("Elephant")
console.log(animals)
// POP()
animals.pop();
console.log(animals)
// unshift()
animals.unshift("Lion")
console.log(animals)
//shift()
animals.shift();
console.log(animals)

// lets Deal with numbers in Array 

let numbers =[1,2,3,4,5];
console.log(numbers)
// splice()
numbers.splice(2,1)
console.log(numbers)

// to insert 
numbers.splice(2,0,99,100)
console.log(numbers)

// concatenation 
let arr1=[1,2,3];
let arr2=[4,5,6];
let combined=arr1.concat(arr2);
console.log(combined)

// Iteration
let items=["pen","book","Eraser"];
for(let i=0;i<items.length;i++){
    console.log(items[i]);
}

