let fighters = ["🪨", "📜", "✂️"] 

let userstageEl = document.getElementById("userstage")
let cpustageEl = document.getElementById("cpustage")

let rockButton = document.getElementById("rockButton")
let paperButton = document.getElementById("paperButton")
let scissorsButton = document.getElementById("scissorsButton")

function computerChoice() {
    let compChoice = (Math.floor(Math.random() * fighters.length));
    cpustageEl.textContent = fighters[compChoice];
}

rockButton.addEventListener("click", function() {
    userstageEl.textContent = fighters[0];
    computerChoice()
})

paperButton.addEventListener("click", function() {
    userstageEl.textContent = fighters[1];
    computerChoice()
})

scissorsButton.addEventListener("click", function() {
    userstageEl.textContent = fighters[2];
    computerChoice()   
})

// Build a check winner function