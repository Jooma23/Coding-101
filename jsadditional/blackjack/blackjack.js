// Setting all variables
let newGameButton = document.querySelector(".newgame");
let hitButton = document.querySelector(".hit");
let stayButton = document.querySelector(".stay");
let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let playerCardOne = document.querySelectorAll(".player")[0];
let playerCardTwo = document.querySelectorAll(".player")[1];
let dealerCardOne = document.querySelectorAll(".dealer")[0];
let dealerCardTwo = document.querySelectorAll(".dealer")[1];

// On document load, assume new game
newGame();




// Why is this not doing the same as refreshing?
// function reloadPage() {
//     document.reload();
//     return false;
// }


// NewGame listener and fn; it adds the rando card, class and appends it
newGameButton.addEventListener("click", newGame);
function newGame() {
    let playerCards = [];
    let dealerCards = [];    

    playerCards.push((Math.floor(Math.random()*deck.length) + 1))
    playerCards.push((Math.floor(Math.random()*deck.length) + 1))
    dealerCards.push((Math.floor(Math.random()*deck.length) + 1))
    dealerCards.push((Math.floor(Math.random()*deck.length) + 1))
    
    let firstPlayerCard = playerCards[0];
    let secondPlayerCard = playerCards[1];
    let firstDealerCard = dealerCards[0]
    let secondDealerCard = dealerCards[1]
    
    dealerCardOne.innerHTML = firstDealerCard;
    dealerCardTwo.innerHTML = secondDealerCard;
    document.querySelector(".dealertotal").innerHTML = "Dealer total: " + (firstDealerCard + secondDealerCard);

    playerCardOne.innerHTML = firstPlayerCard;
    playerCardTwo.innerHTML = secondPlayerCard;
    document.querySelector(".playertotal").innerHTML = "Player total: " + (firstPlayerCard + secondPlayerCard);

    
}


//Hit listener and fn; it adds the rando card, class and appends it
hitButton.addEventListener("click", hitMe)
function hitMe() {
    
    // for (let i = 0; i = 1; i ++) {
    
    // Step 1: Create the div
    let nextCard = document.createElement("div");
    
    // Step 2: All the things you want in that div
    nextCard.setAttribute("class", "player new card");
    nextCard.innerHTML = (Math.floor(Math.random()*deck.length) + 1);

    // Step 3: All the whole thing into the doc
    document.querySelector(".playerscard").appendChild(nextCard);

    // Step 4: Update player values
    document.querySelector(".playertotal").innerHTML =+ "Player total: " + (parseInt(playerCardOne.innerHTML) + parseInt(playerCardTwo.innerHTML) + parseInt(nextCard.innerHTML));
    
    if ((parseInt(playerCardOne.innerHTML) + parseInt(playerCardTwo.innerHTML) + parseInt(nextCard.innerHTML)) > 21) {
        document.querySelector("p").innerHTML = "You busted!";
    }
}


// let total = "";
// let firstCard = [(Math.floor(Math.random()*deck.length) + 1)];
// let secondCard = [(Math.floor(Math.random()*deck.length) + 1)];

// for (let i = 0; i < 1; i++) {
//     total += firstCard[i] + secondCard[i];
// }


//Stay listener and fn; it just prints "you win", for now. Eventually, make the dealer hit < 17. Then update the text.
stayButton.addEventListener("click", function() {
    document.querySelector("p").innerHTML = "Dealer hits and busts";    
})


// New plan for JS

// - Fix hit fn to render proper amount. 
// - Refactor into a loop
// - Build stay() to hit on dealers hand and then print results
// - newGame() should just refresh