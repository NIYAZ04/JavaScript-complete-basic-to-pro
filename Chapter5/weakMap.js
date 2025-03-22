/*
c. Weakmap & weakset

Weakmap: A weakmap is a collection of key-value pairs where the keys
must be objects, and the values can be of any type. The keys in a
weakmap are weakly referenced, meaning they can be garbage collected
if there are no other references to them.

*/
// what is the difference between map and weakmap
/*
    1. Key Type:
	•	WeakMap: Keys must be objects (no strings, numbers, etc.).
	•	Map: Keys can be any type (objects, strings, numbers).
	2.	Garbage Collection:
	•	WeakMap: If an object key has no other references, it gets garbage collected automatically.
	•	Map: Stores strong references, preventing garbage collection.
	3.	Iteration:
	•	WeakMap: Cannot be iterated (no .keys(), .values(), or forEach).
	•	Map: Supports iteration using .keys(), .values(), forEach().
	4.	Use Cases:
	•	WeakMap: Useful for private data storage where objects can be automatically removed when no longer needed.
	•	Map: Used when keys need to be accessed or iterated over.

*/

// Example 1
 
let weakMap = new WeakMap();
let user = {name:"John"};
weakMap.set(user,{age:25,role:"admin"});
console.log(weakMap.get(user))

user=null
console.log(weakMap.get(user))

// example 2 Avoiding memory leak in Caching 
let cache =new WeakMap();
function storeData(obj,value){
    cache.set(obj,value);
}
function getData(obj){
    return cache.get(obj);
}

let obj1={id:1};
storeData(obj1,"User Data for ID 1 ");
console.log(getData(obj1));
obj1=null
console.log(getData(obj1));