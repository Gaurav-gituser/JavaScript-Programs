// This code runs only in the browser because it uses prompt() for user input and console.log() for output

let max = prompt("Enter the maximum number:");
let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter your guess:");

while (true) {
    if (guess === "quit") {
        console.log("You quit the game.");
        break;
    }

    if (guess === random) {
        console.log("Congrats! You guessed the correct number:", random);
        break;
    } else if (guess < random) {
        guess = prompt("Hint: Your number is too low. Try again!");
    } else {
        guess = prompt("Hint: Your number is too high. Try again!");
    }
}
