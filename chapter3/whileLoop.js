// while loop

// print 1 to 10

//for(let i =1;i<=10;i++)

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// as long as the condition is true it will print 


// DSA Problem 


//1. Find the Sum of All Divisors of N (Using While Loop)

function sumOfDivisors(N) {
    let sum = 0;
    let i = 1;
    
    while (i <= N) {
        if (N % i === 0) {
            sum += i;
        }
        i++;
    }
    return sum;
}

console.log(sumOfDivisors(6)); 
console.log(sumOfDivisors(12)); 


// Print Even Numbers from 1 to N (Using While Loop)

function printEvenNumbers(N) {
    let i = 2;
    while (i <= N) {
        console.log(i);
        i += 2;
    }
}

printEvenNumbers(20);

