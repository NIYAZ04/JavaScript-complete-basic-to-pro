// Closures & Lexical Scope

/*
Lexical Scope (or Static Scope) means that a function inherits the
variables from its parent scope where it was defined, not where it was
called.


Lexical Scope means that a function can access variables from its own scope
 and any outer scope where it was defined.
  The scope is determined at the time of writing code, not at runtime.
*/

// Example 1 
function outerFunction(){
    let outerVariable = "I am from Outside";
    function innerFunction(){
        console.log(outerVariable);
    }
    innerFunction();
}

outerFunction();

// Example 2

function outerFunction2(){
    function innerFunction2(){
        let innerVariable = "I am inner Variable";
    }
    console.log(innerVariable);
}
outerFunction2();

// Child scopes can access parent scopes, but not vice versa 

// Example 3 

function grandParent(){
    let grandParentVariable= "Hello i am your Grandpa";
    function parent(){
        let parentVariable = "Hello i am your Parent";
        console.log(grandParentVariable);
        function child(){
            let childVariable ="Hello from Child";
            console.log(grandParentVariable);
            console.log(parentVariable);
            console.log(childVariable);

        }
        child();
       
    }
    parent();

}
grandParent();

// Example 4 

function countNumber(){
    for(let i =1;i<=3;i++){
        setTimeout(function(){
            console.log(i);
        },1000)
    }
}
countNumber();

// Dynamic scope 


/*
What is Dynamic Scope?

Dynamic Scope means that a function’s variables are resolved based on
 where the function is called, not where it was defined.


 Difference from Static Scope 

	•	Lexical Scope (JavaScript uses this) → Variables are looked 
    up based on where the function was defined in the code.

	•	Dynamic Scope → Variables are looked 
    up based on where the function is called at runtime.


    */

    // Example 1 for Dynamic Scope 

var name ="Global";

function printName(){
    console.log(name);
}

function firstCaller(){
    var name = "Fist Caller";
    printName();
}

function secondCaller(){
    var name ="Second Caller";
    printName();
}
firstCaller()
secondCaller()

// Recap

/*
1.	Lexical Scope = Accessing variables based on where functions are
    written, not where they are called.
2.	Inner functions can access outer function variables, 
    but outer functions cannot access inner variables.
3.	Var can cause unexpected behavior inside loops due to function 
    scope.
4. Dynamic Scope (JavaScript Does NOT Use This)
5.	Dynamic Scope= A function looks at the caller’s scope at 
    runtime instead of where it was defined.
*/