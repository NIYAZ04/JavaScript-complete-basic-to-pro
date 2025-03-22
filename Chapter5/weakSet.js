/*
weakset: A weakset is a collection of objects where each object can occur
only once. Like weakmap, the objects in a weakset are weakly referenced,meaning they can be garbage collected if there are no other references
to them.

/*

    1. Only Stores Objects –> 
        Unlike Set, WeakSet cannot store primitive values
        (like numbers or strings).

	2.	Weak References –>

        If an object inside a WeakSet has no other references,
        it is automatically garbage collected.

	3.	No Iteration –> You cannot loop over a WeakSet 
        (forEach, for...of do not work).

*/

// Examples 
let weakSet= new WeakSet();

let obj1={name:"Alice"};
let obj2={name:"Bob"};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1));
weakSet.delete(obj2);
console.log(weakSet.has(obj2))

// Eample 2 
let users = new WeakSet();

let user1 = { id: 1, name: "John" };
let user2 = { id: 2, name: "Emma" };

users.add(user1);
users.add(user2);

console.log(users.has(user1)); 

user1 = null; 
console.log(users.has(user1))
console.log(users.has(user2))


// Preventing Duplicate object Entries 

let loggedInUsers = new WeakSet();
function login(user) {
    if (loggedInUsers.has(user)) {
        console.log(`${user.name} is already logged in!`);
    } else {
        loggedInUsers.add(user);
        console.log(`${user.name} has logged in.`);
    }
}
let userA = { name: "Alice" };
let userB = { name: "Bob" };
login(userA); 
login(userB);
login(userA); 
userA = null; 
