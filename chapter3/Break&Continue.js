// Break & Continue
//     Labeled Statements

/* In JS break and continue are control statments that help in controlling 
the loop execution 

1.Break Statment 
The break statement immediately exits the loop, regardless of the loop 
condition   */

for(let i=1; i<=10; i++){
    if(i==5){
        console.log("Breaking the loop at",i);
        break;
    }
    console.log(i);
}

// 2. Continue Statement 

/*
The continue statement skips the current iteration and moves to the next 
iteration of the loop
*/

for( let i =1;i<=10;i++){
    if(i==5){
        console.log("Skipping ",i)
      continue;
    }
    console.log(i)
}

// Program 1

let numbers = [3, 7, 5, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log("First even number found:", numbers[i]);
        break;
    }
}


// program 2 

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; 
    }
    console.log(i);
}

// Important Note for you 

/*
When to Avoid:
	•	Overusing break can stop loops too early, missing important data.
	•	Too many continue statements can make code hard to read.

💡 Best Practice: Use them only when they improve clarity and avoid unnecessary
 computations. Otherwise, a simple if condition is often better.

*/


//Labeled Statements 
/*
Labeled statements allow breaking out of an outer loop from
 inside a nested loop.

*/


// Example: Breaking Out of an Outer Loop


outerLoop: // Label for the outer loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
        if (i === 2 && j === 2) {
            break outerLoop; // Breaks out of the outer loop
        }
    }
}