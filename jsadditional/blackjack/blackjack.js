// Setting all variables
let newGameButton = document.querySelector(".newgame");
let hitButton = document.querySelector(".hit");
let stayButton = document.querySelector(".stay");
let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let playerCardOne = document.querySelectorAll(".player")[0];
let playerCardTwo = document.querySelectorAll(".player")[1];
let dealerCardOne = document.querySelectorAll(".dealer")[0];
let dealerCardTwo = document.querySelectorAll(".dealer")[1];

let playerCards = [];
let dealerCards = [];

// On document load, assume new game
newGame();

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

// You can use a for loop to start adding cards when it's less than 21. here's the rough syntax
// for (let i = 0; i < playerCards.length; i++) {
//     console.log(playerCards[i]);
// }


// Hit refractored

function hitMeFr() {
    playerCards.pop((Math.floor(Math.random()*deck.length) + 1));
    console.log(playerCards);
}


// Hit listener and fn; it adds the rando card, class and appends it
hitButton.addEventListener("click", hitMe)
function hitMe() {
    // Step 1: Create the div
    let nextCard = document.createElement("div");
    
    // Step 2: All the things you want in that div
    nextCard.setAttribute("class", "player new card");
    nextCard.innerHTML = (Math.floor(Math.random()*deck.length) + 1);

    // Step 3: All the whole thing into the doc
    document.querySelector(".playerscard").appendChild(nextCard);

    // Step 4: Update player values
    document.querySelector(".playertotal").innerHTML = "Player total: " + (parseInt(playerCardOne.innerHTML) + parseInt(playerCardTwo.innerHTML) + parseInt(nextCard.innerHTML));
    
}


// Stay listener and fn; it just prints "you win", for now
stayButton.addEventListener("click", function() {
    console.log(this);
    document.querySelector("p").innerHTML = "you win";    
})





/* JS plan 

- Add event listeners on all buttons - done

- Add basic functions
- hit() - done
- add a card 3 and card 4
- 

- stay()
> dealers turn: for loop until they get to 17, then end
> print results of winner or tie

- new game()
> Display random numbers in div - done
> refactor onload to new game or vise versa

- Learn how to use an array - done

- Handle errors


*/