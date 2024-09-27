// STEP 2 IF ELSE
let number = -3;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// STEP 3: SWITCH STATEMENT

let day = 6; // Assign a number between 1 and 7

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number.");
}

// STEP 4: LOOPS
// FOR LOOP: 
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// WHILE LOOP: 
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// DO WHILE LOOP:
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

// STEP 5: CONTROL FLOW - BREAK AND CONTINUE
// BREAK:
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// CONTINUE:
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// STEP 6: SCOPE AND CONTEXT
let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

scopeExample();

console.log(globalVar); // Accessible
// console.log(localVar);  // Error: localVar is not defined
    