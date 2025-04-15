outerLoop: // Label for the outer loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
        if (i === 2 && j === 2) {
            break outerLoop; // Breaks out of the outer loop
        }
    }
}