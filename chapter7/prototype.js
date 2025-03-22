// Every Javascript object has an internal EEPrototype J] property (accessed
//     via __proto__), which links it to another object. This mechanism is called
//     prototype inheritance.

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.sayHello=function(){
    console.log(`Hello My name is ${this.name}`)
    console.log(`I am  ${this.age} years old`)

}
let person1= new Person("Tekneikos",21)
let person2= new Person("JavaScript",21)

person1.sayHello()
person2.sayHello()

// {
//     name:"tekneikos",
//     age:21
//     __proto__:{
//     sayHello():function(){
//         console.log(...Person.)
//     },
//     __proto__:Object.prototype
//     }
// }

// Example 2 
function Vehicle(type, wheels) {
    this.type = type;
    this.wheels = wheels;
}


Vehicle.prototype.describe = function() {
    console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
};

let car = new Vehicle("Car", 4);
let bike = new Vehicle("Bike", 2);

car.describe();  
bike.describe(); 

// {
//     type:"car",
//     wheels:4
// }
// _ _ poto  _ _ 

// prototype chain
function Parent() {
    this.name = "Parent";
}

Parent.prototype.sayHello = function() {
    console.log("Hello from Parent");
};
function Child() {
    this.age = 10;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

let child1 = new Child();
//__ptoto__ -> child.prototype
console.log(child1.name);
child1.sayHello(); 

console.log(child1._proto_ === Child.prototype);
console.log(Child.prototype._proto_ === Parent.prototype); 
console.log(Parent.prototype._proto_ === Object.prototype);  
console.log(Object.prototype._proto_ === null); 