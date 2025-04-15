// Default parameters provide a fallback value if a function
// argument is missing.

// Example 
function greetUser(name="Guest"){
    return `Hello, ${name}!`;
}
console.log(greetUser("Tekneikos"))
console.log(greetUser())
