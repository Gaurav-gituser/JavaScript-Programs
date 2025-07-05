// Only works in the browser

let max = prompt("Enter the maximum number:");
let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter your guess:");

while (true) {
    if (guess === "quit") {
        console.log("You quit the game.");
        break;
    }

    if (parseInt(guess) === random) {
        console.log("Congrats! You guessed the correct number:", random);
        break;
    } else if (parseInt(guess) < random) {
        guess = prompt("Hint: Your number is too low. Try again!");
    } else {
        guess = prompt("Hint: Your number is too high. Try again!");
    }
}
