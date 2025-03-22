//  Strings
// A string is a sequence of characters used to represent text. Strings are
// immutable, meaning once created, they cannot be changed.

let str1="Hello,World"
let str2="Hello i am learning JavaScript "

// Iterate 
//let text = "JavaScript";
for(let i=0;i<text.length;i++){
    console.log(text[i]);
}
// using for ..of loop
let text = "JavaScript";
for (let char of text){
    console.log(char)
}

// USEFUL STRING METHODS 

// Split()
let sentence = "JavaScript is awesome!";
let words=sentence.split(" ");
console.log(words)

// Slice()

let str="Hello, World!";
console.log(str.slice(0,5));
console.log(str.slice(-6))

// substring()
console.log(str.substring(0,5));
console.log(str.substring(7));

//indexOf()
let text2="JavaScript is Amazing";
console.log(text2.indexOf("is"))
console.log(text2.indexOf("java"))

//toUpperCase() & toLowerCase()
console.log("hello".toUpperCase());
console.log("HELLO".toLowerCase());

// Trip() 
let space=" Hello, World";
console.log(space.trim());

// replace()
let phrase ="I love Javascript";
let newPhrase=phrase.replace("Javascript","coding");
console.log(newPhrase)

// Program 1
let stringgggggg= "hello";
let reversed=stringgggggg.split("").reverse().join("");
console.log(reversed)