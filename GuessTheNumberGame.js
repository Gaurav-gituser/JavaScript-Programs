
//only works in browser

let max = prompt("Enter The Maximun Number");

let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter The Guees Number ");

while (true) {

    if (guess == "quit") {
        console.log("You Quit The Game");
        break;
    }
    if (guess == random) {
        console.log("Congrats! You Guess Right Number", random);
        break;
    }
    else if (guess < random) {

        guess = prompt("Hint : Entered  Number is Small. Try Agin!");
    }
    else {

        guess = prompt("Hint : Entered  Number is Big. Try Agin!");
    }


}