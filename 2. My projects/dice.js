var dice1 = "./images/dice1.png";
var dice2 = "./images/dice2.png";
var dice3 = "./images/dice3.png";
var dice4 = "./images/dice4.png";
var dice5 = "./images/dice5.png";
var dice6 = "./images/dice6.png";

var playerOneCard = (Math.floor(Math.random() * 6) + 1);
var playerTwoCard = (Math.floor(Math.random() * 6) + 1);

// Maps Dice One to Player One and Returns its image
if (playerOneCard === 1) {
    var imgNeededOne = dice1;
}
else if (playerOneCard === 2) {
    var imgNeededOne = dice2;
}
else if (playerOneCard === 3) {
    var imgNeededOne = dice3;
}
else if (playerOneCard === 4) {
    var imgNeededOne = dice4;
}
else if (playerOneCard === 5) {
    var imgNeededOne = dice5;
}
else if (playerOneCard === 6) {
    var imgNeededOne = dice6;
}

// Maps Dice Two to Player Two and Returns its image
if (playerTwoCard === 1) {
    var imgNeededTwo = dice1;
}
else if (playerTwoCard === 2) {
    var imgNeededTwo = dice2;
}
else if (playerTwoCard === 3) {
    var imgNeededTwo = dice3;
}
else if (playerTwoCard === 4) {
    var imgNeededTwo = dice4;
}
else if (playerTwoCard === 5) {
    var imgNeededTwo = dice5;
}
else if (playerTwoCard === 6) {
    var imgNeededTwo = dice6;
}



//Returns the correct img
function diceRoll() {
    document.querySelector("#img1").src = imgNeededOne;
    document.querySelector("#img2").src = imgNeededTwo;
}

//Calculates the winner
function calcWinner() {
    if (playerOneCard > playerTwoCard) {
        document.querySelector("h3").innerHTML = "Player 1 Wins";
        document.querySelector("button").innerHTML = "Play Again? Hit Refresh";
    }

    else if (playerOneCard < playerTwoCard) {
        document.querySelector("h3").innerHTML = "Player 2 Wins";
        document.querySelector("button").innerHTML = "Play Again? Hit Refresh";
    }

    else {
        document.querySelector("h3").innerHTML = "It's a draw";
        document.querySelector("button").innerHTML = "Play Again? Hit Refresh";
    }
}

function reloadPage() {
    location.reload();
}

console.log(playerOneCard);
console.log(playerTwoCard);


/* 

Steps to take: 
x. Surface the right dice - done
x. Ensure dice match number - done
x. Calculate the winner: - done
    (if a,     a 
    else if b, b
    else       draw)
y. Add static die upon "button" - done
y. Create corresponding variables for each die - done
y. Change Inner HTML element to display the winner - done
z. Change static > random - done
z. Change "on-load" to button - done
z. Clear the dice to start - done

*/