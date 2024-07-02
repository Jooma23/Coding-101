
let homeScore = 0;
document.querySelector(".homescore").innerHTML = homeScore;

let awayScore = 0;
document.querySelector(".awayscore").innerHTML = awayScore;


//Adding Home Scores
function addOneHome() {
    homeScore = homeScore + 1;
    document.querySelector(".homescore").innerHTML = homeScore;
}

function addTwoHome() {
    homeScore = homeScore + 2;
    document.querySelector(".homescore").innerHTML = homeScore;
}

function addThreeHome() {
    homeScore = homeScore + 3;
    document.querySelector(".homescore").innerHTML = homeScore;
}


//Adding Away Scores
function addOneAway() {
    awayScore = awayScore + 1;
    document.querySelector(".awayscore").innerHTML = awayScore;
}

function addTwoAway() {
    awayScore = awayScore + 2;
    document.querySelector(".awayscore").innerHTML = awayScore;
}

function addThreeAway() {
    awayScore = awayScore + 3;
    document.querySelector(".awayscore").innerHTML = awayScore;
}


// document.querySelector(".homescore").innerHTML = newScore;

// Make a global counter for the score (type = int)
// Anytime a function is called, use the original score to count it
// 