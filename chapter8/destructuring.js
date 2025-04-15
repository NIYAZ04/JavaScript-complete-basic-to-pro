// array / objects 

// Destructuring allows extracting values from arrays or objects into
// variables in a cleaner way.
const numbers =[1,2,3,4,5];

//old way
const first =numbers[0];

// array destructuring

const [x,y,z,a,b]=numbers;
console.log(x,y,z,a,b)

const [c,d, ,f,k]=numbers
console.log(c,d,f,k)


// objects destructuring 

const person={
    firstName:"Tekneikos",
    secondName:"Tekneikos",
    age:21
}

// old way
const firstName=person.firstName

// with destructuring 
const {firstName:fName, secondName:sName,age}=person;
console.log(fName,sName,age)