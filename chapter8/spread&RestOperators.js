// Spread Operator (...)
// The spread operator expands elements of an array or object.
const arr1=[1,2,3];
const arr2=[...arr1]// it creates copy of arr1 
console.log(arr2)

// example 2
const arrA=[1,2,3];
const arrB=[4,5,6];
const mergeArray=[...arrA, ...arrB];
console.log(mergeArray)

// example 3

const word="HELLO";
const letter=[...word];
console.log(letter);


// Example with Objects 

const student ={name:"Tekneikos",grade:"A"};
const updateStudent={...student,grade:"A+",city:"New York"};
console.log(updateStudent)

// Rest Operator (...)
// The rest operator collects multiple values into an array

// with function arguments
function sum (...numbers){
    return numbers.reduce((acc,num)=>acc+num,0);
}
console.log(sum(10,20,30));

// example 2
function categorizeExpenses(mainExpense, ...otherExpenses){
    console.log(`Main Expense: ${mainExpense}`);
    if(otherExpenses.length>0){
        console.log("other expenses ",otherExpenses)
    }else{
        console.log("no additional expenses ")
    }
}

categorizeExpenses("5000 - Rent", "200 - Food", "300 -  Travel");
categorizeExpenses("5000 - Rent")


//Spread: expands elements 

//Rest : collects the remaining elements 

