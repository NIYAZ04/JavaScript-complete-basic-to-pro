// object.keys(obj)

const person = {
    name:"Tekneikos",
    age:21,
    yorutubeChannelName:"Tekneikos",
    playlist:"JavaScript Basic to Advance",
    job:"SDE"
}

console.log(Object.keys(person))
//   let arr=[102,2,3,4]
// arr.find
// object.values(obj)

console.log(Object.values(person))

// Object.entries(obj)
console.log(Object.entries(person))

// Object.assign (target,source)
const personClone =Object.assign({},person);
console.log(personClone)
personClone.name="Vivek"// does not affect the original object 
console.log(person)

// Object.freeze(obj)

//Object.freeze(person);
// person.name="Rahul"
// delete person.age;
// console.log(person.name)
// console.log(person.age)

// Object.seal(obj)
Object.seal(person)
delete person.age;
console.log(person.name)
console.log(person.age)


// Object.defineProperty(obj,key,descriptor)
const user={};
Object.defineProperty(user,"id",{
    value:1011,
    writable:false,
    enumerable:false,
    configurable:false
});
//console.log(user.id)
user.id=2022222;
delete user.id;
console.log(user.id)