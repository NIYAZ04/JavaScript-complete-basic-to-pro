// Closures
// A closure occurs when an inner function remembers variables from its
// outer function, even after the outer function has finished execution.

// Example 1
function outerFunction (){
    let count =0;
    function innerFunction(){
        count++;
        console.log(count);
    }
    return innerFunction;
}
//const counter = outerFunction();
// counter();
// counter();
// counter();


// Example 2

function createCounter(){
    let count =0;
    return {
        increment:function(){
            count++;
            console.log(count);
        },
        decrement:function(){
            count--;
            console.log(count);
        }

    };

}

//const counter=createCounter();
//Object{increment,decrement}
//counter.increment();
//counter.increment();
//counter.decrement();

//example 3

function outer(){
    let message = "Hello, I am a Closure"
    function inner(){
        console.log(message);

    }
    return inner;
}
const myFunction =outer();
myFunction();


// Example 4
function delayedCounter() {
    let count = 0; 

    return function () {
        count++;
        let currentCount=count;
        setTimeout(() => {
            console.log(`Count after delay: ${currentCount}`);
        }, 1000);
    };
}

const counter = delayedCounter();

counter();
counter(); 
counter();
//