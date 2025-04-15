// A callback is a function passed as an argument to another function and
// executed later, once the main function completes its taks.

// Example 1 (syn)
function greet(name, callback){
    console.log(`Hello, ${name}`);
    callback();
}
function sayGoodBye(){
    console.log("GoodBye!");
}
greet("Tekneikos",sayGoodBye);

// Example 2 (Syn)

function takeOrder(order,processOrder){
    console.log(`Order Received : ${order}`);
    processOrder(order);
}
function cookFood(order){
    console.log(`Cooking ${order}....`);
    console.log(`${order} is ready`);
}
takeOrder("Pizza",cookFood)






// Example  3(ASyn)

function fetchData(callbak){
    console.log("Fetching Data");
    setTimeout(()=>{
        callbak("data Received")
    },2000)
}

function displayData(data){
    console.log(data);
}
fetchData(displayData)

// Example 4

function orderFood(foodItem, deliverOrder) {
    console.log(`Order placed for ${foodItem}.`);

    setTimeout(() => {
        console.log(`${foodItem} is ready!`);
        deliverOrder(foodItem); // Callback is executed after food is ready
    }, 2000); // Simulating food preparation time
}

function deliverOrder(foodItem) {
    console.log(`Delivering ${foodItem} to the customer.`);
}

orderFood("Pizza", deliverOrder);

/*
Asynchronous Question:

 Delayed Message:
	 Write a function delayedMessage(message, delay) that prints
     the message after the given delay (in milliseconds).
Example

delayedMessage("Hello after 3 seconds!", 3000);


Expected output

Hello after 3 seconds!




Synchonous Question

 Greeting Function:
		Write a function greetUser(name, age) that immediately prints:

Hello John, you are 25 years old!

Call greetFunction for three different users

*/