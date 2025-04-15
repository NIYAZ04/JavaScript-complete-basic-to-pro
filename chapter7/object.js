// Objects in JS
// // An object in Javascript is a collection of key-valve pairs. These keys are
// // always strings (or Symbols)even if written as numbers, e.g., { I: "one"}
// // becomes "", and the valves can be any data type, including other objects
// // and functions.

const person ={
   name:"JavaScript",
    topic:"Objects In JS"
}

console.log(person.name)
console.log(person.topic) 

const car={
    brand:"Tata",
    model:"Nano"
}
car.year=2000;
car.model="Curve"
console.log(car)

// objects can have methods/function 

const user ={
    name:"tekneikos",
    greet:function(){
        console.log(`Hello , my channel name is ${this.name}`)
    }
}
user.greet()

// nested objects 
const student={
    name:"vivek",
    subject:{
        math:90,
        science:80
    }
}
console.log(student.subject.math)

let obj1 = { a: 1 };
let obj2 = obj1; 
obj2.a = 2;
console.log(obj1); 

// creating with new object();

let users=new Object();
users.name="Tekneikos";
users.age=21;
users.greet= function(){
    console.log(`Hello My name is ${this.name}`);
}
console.log(users.name);
console.log(users.age);
users.greet();

// creating objects with contrictor function 

function Userss(name,age){
    this.name=name;
    this.age=age;
}
let users1=new Userss("Tekneikos",21);
console.log(users1.name);
console.log(users1.age);
