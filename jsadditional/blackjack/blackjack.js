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


// NewGame listener and fn; it adds the rando card, class and appends it
newGameButton.addEventListener("click", newGame, reloadPage);

// Why is this not doing the same as refreshing?
function reloadPage() {
    window.reload();
    return false;
}

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
    
    // Abstract this into a function for checking for busts. Also, what if they pull 4 cards? 5 cards?
    // This will likely be a large, miserable OR statement that says, "if 3 cards > 21 OR if 4 cards > 21, OR if 5 cards > 21.."
    if ((parseInt(playerCardOne.innerHTML) + parseInt(playerCardTwo.innerHTML) + parseInt(nextCard.innerHTML)) > 21) {
        document.querySelector("p").innerHTML = "You busted!";
    }

}


// Stay listener and fn; it just prints "you win", for now. Eventually, make the dealer hit < 17. Then update the text.
stayButton.addEventListener("click", function() {
    document.querySelector("p").innerHTML = "Dealer hits and busts";    
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