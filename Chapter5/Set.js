//                                  SET

/*
a. set
A set is a collection of unique values. It does not allow duplicate values.
*/

// Example 1
let mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(30);
console.log(mySet)

// we can check if any value is present in the set or not 
console.log(mySet.has(20))
// we can remove that value 
mySet.delete(20);
console.log(mySet.has(20))

// Get size of set
console.log(mySet.size)

for(let value of mySet){
    console.log(value)
}
// clear the set 

mySet.clear();
console.log(mySet.size);

//problem 1 Remove duplicated from Array 

function removeDuplicate(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicate([1,2,2,3,4,5,3,1]));

// Program 2 Find the first repeating element 

function firstRepeatingElement(arr1){
    let seen = new Set();
    for(let num of arr1){
        if(seen.has(num))return num;
        seen.add(num);
    }
    return -1;
}
console.log(firstRepeatingElement([1,2,3,4,3,2,1]));


// program 3 find the intersection of two arrays // Common elements 
function arrayIntersection (arr1,arr2){
    let set1=new Set(arr1);
    return arr2.filter(num=>set1.has(num));

}
console.log(arrayIntersection([1,2,3,4,3],[2,4,6,8,3]));



