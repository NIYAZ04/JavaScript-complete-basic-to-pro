// Stack vs. Heap Memory


// 	•	Stack Memory (for primitive types)
// 	•	Stores fixed-size data (numbers, strings, booleans).
// 	•	Fast access, used for function execution and local variables.
// Heap Memory (for objects)
// 	•	Stores reference types (objects, arrays, functions).
// 	•	Dynamic memory allocation.
// 	•	Objects are accessed via references

let x=10;
let y=x; // copying the value 
y=20;
console.log(x);
console.log(y)


// heap
let obj1={a:1};
let obj2=obj1; // referencing

obj2.a=2
console.log(obj1.a)
console.log(obj2.a)