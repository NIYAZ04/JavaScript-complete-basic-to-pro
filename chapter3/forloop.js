// Loops:
// for, while, do-while
// for...in vs for...of
// Break & Continue
// Labeled Statements

/*
Loops in JavaScript allow us to execute a block of code multiple times, 
making it easier to work with repetitive tasks. Instead of writing the same code
again and again, loops help us automate iteration.
*/

// Example 1 - > 10 


// Print 1 to 10 

for(let i=1; i<=10; i++){
    console.log(i)
}

// print 10 -> 1

for(let i=10;i>=1;i--){
    console.log(i)
}

// Use forLOOP when the number of iteration is known ->-<

// DSA Problem 1

/*
Find the Sum of All Divisors of N
✅ Problem Statement:
Given a number N(can be 1,2,3,4,5), find the sum of all its divisors.

🔹 Example Input & Output:
Input: 6  
Output: 12  (1 + 2 + 3 + 6)  

Input: 12  
Output: 28  (1 + 2 + 3 + 4 + 6 + 12)  
*/

function sumOfDivisors(N){
    let sum=0;
    
    for(let i =1;i<=N;i++){
        if(N % i==0){
            sum+=i;
        }
    }
    return sum;
}
console.log(sumOfDivisors(6))

console.log(sumOfDivisors(12))

// DSA problem 2

// Print Even numbers from 1 to N 

function printEvenNumbers(N){
    for(let i=2;i<=N;i+=2){  
            console.log(i)
    }
}
printEvenNumbers(20)




