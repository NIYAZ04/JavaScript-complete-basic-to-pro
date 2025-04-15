// 🔹 3. Control Flow & Loops

//     Conditional Statements (if-else, switch)
//     Loops:
//         for, while, do-while
//         for...in vs for...of
//     Break & Continue
//     Labeled Statements


// Program 1 

/*
✅ If the user is under 13, they can only watch animated movies.
✅ If the user is 13 to 17, they can watch PG-13 movies.
✅ If the user is 18 or older, they can watch any movie.
✅ If the user is above 60, they get a senior citizen discount.
*/

function bookMovieTicker(age){
    if(age<13){
        console.log("you can book tickets for animated movies only")
    }else if(age>=13 && age<=17){
        console.log("you can book tickets for PG-13 Movies only")
    }else if(age >= 18 && age <60 ){
        console.log("You can book any ticket of your choice")
    }else if(age>=60 && age<=100){
      console.log("you can book any ticket with senior citizen discount ")
    }else{
        console.log("Invalid age entered, Please enter a valid age")
    }
}

bookMovieTicker(10)
bookMovieTicker(19)
bookMovieTicker(200)


// Program 2 

/*
Features:

✅ Checks if a person is eligible to vote (must be 18 or older).
✅ If they are exactly 17, it tells them how long they have to wait.
✅ If they are 100 or older, it gives a special message for centenarians.
✅ If they enter an invalid age (negative or non-numeric), it warns them.

*/

function checkVotingEligibility(age){
    if(age<=0 || isNaN(age)){
        console.log("Invalid age entered.")
    }else if(age<17){
        console.log("you are too young to vote.");
    }else if(age ==17){
        console.log("Almost there ! Just 1 more year until you can vote.")
    }else if( age>=18 && age<100  ){
        console.log("You are eligible to vote Congratulations")
    }else if(age>=100){
        console.log("Wow ! A century of wisdom.");
    }
}
checkVotingEligibility(10)
checkVotingEligibility(100)
checkVotingEligibility(17)
checkVotingEligibility(0)
