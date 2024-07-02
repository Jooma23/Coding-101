// Setting all variables
let newGameButton = document.querySelector(".newgame");
let hitButton = document.querySelector(".hit");
let stayButton = document.querySelector(".stay");
let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let playerCardOne = document.querySelectorAll(".player")[0];
let playerCardTwo = document.querySelectorAll(".player")[1];
let dealerCardOne = document.querySelectorAll(".dealer")[0];
let dealerCardTwo = document.querySelectorAll(".dealer")[1];


// Generate first state on document load
// There has to be a way to refactor this using the newGame() on doc load
dealerCardOne.innerHTML = (Math.floor(Math.random()*deck.length) + 1);
dealerCardTwo.innerHTML = (Math.floor(Math.random()*deck.length) + 1);
document.querySelector(".dealertotal").innerHTML = "Dealer total: " + (parseInt(dealerCardOne.innerHTML) + parseInt(dealerCardTwo.innerHTML));

playerCardOne.innerHTML = (Math.floor(Math.random()*deck.length) + 1);
playerCardTwo.innerHTML = (Math.floor(Math.random()*deck.length) + 1);
document.querySelector(".playertotal").innerHTML = "Player total: " + (parseInt(playerCardOne.innerHTML) + parseInt(playerCardTwo.innerHTML));



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

// NewGame listener and fn; it adds the rando card, class and appends it
newGameButton.addEventListener("click", newGame);
function newGame() {
    dealerCardOne.innerHTML = (Math.floor(Math.random()*deck.length) + 1);
    dealerCardTwo.innerHTML = (Math.floor(Math.random()*deck.length) + 1);
    document.querySelector(".dealertotal").innerHTML = "Dealer total: " + (parseInt(dealerCardOne.innerHTML) + parseInt(dealerCardTwo.innerHTML));
    
    playerCardOne.innerHTML = (Math.floor(Math.random()*deck.length) + 1);
    playerCardTwo.innerHTML = (Math.floor(Math.random()*deck.length) + 1);
    document.querySelector(".playertotal").innerHTML = "Player total: " + (parseInt(playerCardOne.innerHTML) + parseInt(playerCardTwo.innerHTML));
}

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