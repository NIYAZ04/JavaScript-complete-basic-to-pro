
const user ={
    name:"Tekneikos",
    address:{
        city:"New York"
    }
};

console.log(user.address.city)// no error
//console.log(user.address.phone) // cannot find properties of undefined error 

// with optional chaining
console.log(user.contact?.phone);