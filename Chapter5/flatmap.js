//  flatmap()
// The flatmap() method first maps each element using a mapping function,
// then flattens the result into a new array.

// example 1
let numbers =[1,2,3];
let result=numbers.flatMap(num=>[num,num*2]);
console.log(result)
//it flattens the result from [[1,2], [2,4], [3,6]] to [1, 2, 2, 4, 3, 6].

// Example 2
let words =["hello","world",""];
let cleanedWords=words.flatMap(word=>word?word:[]);
console.log(cleanedWords)

//Example 3
let sentences = ["Hello world", "JavaScript is fun"];

let wordsArray = sentences.flatMap(sentence => sentence.split(" "));

console.log(wordsArray);
