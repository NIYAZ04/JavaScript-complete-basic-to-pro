// Switch statement

// Program 1 
/*
🎸 “Virtual Music Instrument” 🎶

This program lets users choose an instrument (like Guitar, Piano, Drums)
 by entering a number. Based on their choice, it plays a message describing 
 the instrument.
 */

function playInstrument(choice){

switch(choice){
    case 1:
        console.log("🎸 you chose guitar ");
        break;
    case 2:
        console.log("You chose Piano");
        break;
    case 3:
        console.log("You chose Trumpet")
        break;
    default:
        console.log("invalid choice, choose between 1 to 3")
}

}
playInstrument(1)
playInstrument(8)


// Program 2
// switch statement
/*
🎓 “Student Section Selector” 🏫

This program assigns students to different sections based on their input:

✅ A for Science
✅ B for Commerce
✅ C for Arts
✅ D for Sports
✅ Invalid input gives an error message

*/

function selectSection(section) {
    switch (section.toUpperCase()) {  
        case 'A':
            console.log("📘 You are in the Science Section! Time for Physics, Chemistry & Biology.");
            break;
        case 'B':
            console.log("📈 You are in the Commerce Section! Get ready for Business & Economics.");
            break;
        case 'C':
            console.log("🎨 You are in the Arts Section! Explore creativity with Literature & History.");
            break;
        case 'D':
            console.log("⚽ You are in the Sports Section! Focus on athletics and physical training.");
            break;
        default:
            console.log("🚫 Invalid selection! Please enter A, B, C, or D.");
    }
}


selectSection('A'); 
selectSection('b'); 
selectSection('C');  
selectSection('D'); 
