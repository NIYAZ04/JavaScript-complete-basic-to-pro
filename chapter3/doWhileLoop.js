// DoWHileLoop

// Print from 1 to 10 

let i=1;
do{
   console.log(i);
   i++; 
}while(i<=10)

    //the do while loop executes the code  (at-least) once then chekcs for 
    // the condition  

 let num =10;
 do{
    console.log("This will print At-least once");

 } while(num<5)


// DSA Problem 

//1. Find the Sum of All Divisors of N (Using Do-While Loop)

function sumOfDivisors(N) {
    let sum = 0;
    let i = 1;

    do {
        if (N % i === 0) {
            sum += i;
        }
        i++;
    } while (i <= N);

    return sum;
}

console.log(sumOfDivisors(6));  // 12
console.log(sumOfDivisors(12)); // 28


//2. Print Even Numbers from 1 to N (Using Do-While Loop)

function printEvenNumbers(N) {
    let i = 2;

    do {
        console.log(i);
        i += 2;
    } while (i <= N);
}

printEvenNumbers(20);
