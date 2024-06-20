var dice1 = "http://127.0.0.1:3000/2.%20My%20projects/images/dice1.png";
var dice2 = "http://127.0.0.1:3000/2.%20My%20projects/images/dice2.png";
var dice3 = "http://127.0.0.1:3000/2.%20My%20projects/images/dice3.png";
var dice4 = "http://127.0.0.1:3000/2.%20My%20projects/images/dice4.png";
var dice5 = "http://127.0.0.1:3000/2.%20My%20projects/images/dice5.png";
var dice6 = "http://127.0.0.1:3000/2.%20My%20projects/images/dice6.png";


var apple = 3;

function diceRoll() {
    document.querySelector("#img1").src = dice2;
    document.querySelector("#img2").src = dice3;
}

function calcWinner() {
    if (apple < 3) {
        document.querySelector("h3").innerHTML = "Player 1 Wins";
    }

    else if (apple > 3) {
        document.querySelector("h3").innerHTML = "Player 2 Wins";
    }

    else {
        document.querySelector("h3").innerHTML = "It's a draw";
    }
}


/* 

Steps to take: 
1. Add static die upon "button" - done
2. Create corresponding variables for each die - done
3. Calculate the winner: 
    (if a,     a 
    else if b, b
    else       draw)
4. Change Inner HTML element to display the winner - done
5. Change static > random 
6. Change "on-load" to button 
x. Clear the dice to start

*/