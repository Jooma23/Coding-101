let fighters = ["🪨", "📜", "✂️"] 

let userstageEl = document.getElementById("userstage")
let winnerText = document.querySelector("p")
let cpustageEl = document.getElementById("cpustage")

let rockButton = document.getElementById("rockButton")
let paperButton = document.getElementById("paperButton")
let scissorsButton = document.getElementById("scissorsButton")

function computerChoice() {
    let compChoice = (Math.floor(Math.random() * fighters.length));
    cpustageEl.textContent = fighters[compChoice];
    
    
    if (userstageEl.textContent === cpustageEl.textContent) {
        winnerText.innerText = "It's a tie!"
    }
    else if (userstageEl.textContent === "🪨" && cpustageEl.textContent === "✂️")
        {
        winnerText.innerText = "You won!"
    }
    else if (userstageEl.textContent === "📜" && cpustageEl.textContent === "🪨")
        {
        winnerText.innerText = "You won!"
    }
    else if (userstageEl.textContent === "✂️" && cpustageEl.textContent === "📜")
        {
        winnerText.innerText = "You won!!"
    }
    else {
        winnerText.innerText = "CPU wins!"
    }
}


rockButton.addEventListener("click", function() {
    userstageEl.textContent = fighters[0];
    computerChoice();
    return userstageEl.textContent;
})

paperButton.addEventListener("click", function() {
    userstageEl.textContent = fighters[1];
    computerChoice();
    return userstageEl.textContent;
})

scissorsButton.addEventListener("click", function() {
    userstageEl.textContent = fighters[2];
    computerChoice();
    return userstageEl.textContent;   
})

// Build a check winner function