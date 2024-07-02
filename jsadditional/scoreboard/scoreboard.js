// import JSConfetti from 'js-confetti'
// const { jsConfetti } = require('./utils');
// const jsConfetti = new JSConfetti()

let homeScore = 0;
document.querySelector(".homescore").innerHTML = homeScore;

let awayScore = 0;
document.querySelector(".awayscore").innerHTML = awayScore;


//Adding Home Scores
function addOneHome() {
    homeScore = homeScore + 1;
    document.querySelector(".homescore").innerHTML = homeScore;
    leaderStyling();
    winnerStyling();
}

function addTwoHome() {
    homeScore = homeScore + 2;
    document.querySelector(".homescore").innerHTML = homeScore;
    leaderStyling();
    winnerStyling();
}

function addThreeHome() {
    homeScore = homeScore + 3;
    document.querySelector(".homescore").innerHTML = homeScore;
    leaderStyling();
    winnerStyling();
}


//Adding Away Scores
function addOneAway() {
    awayScore = awayScore + 1;
    document.querySelector(".awayscore").innerHTML = awayScore;
    leaderStyling();
    winnerStyling();
}

function addTwoAway() {
    awayScore = awayScore + 2;
    document.querySelector(".awayscore").innerHTML = awayScore;
    leaderStyling();
    winnerStyling();
}

function addThreeAway() {
    awayScore = awayScore + 3;
    document.querySelector(".awayscore").innerHTML = awayScore;
    leaderStyling();
    winnerStyling();
}

function winnerStyling() {
    if (homeScore >= 24 || awayScore >= 24) {
        alert("chill out, game's over");
        document.querySelector(".homescore").innerHTML = 0;
        document.querySelector(".homescore").classList.remove("celebrate");
        document.querySelector(".homescore").classList.remove("ahead");
        homeScore = 0;
        document.querySelector(".awayscore").innerHTML = 0;
        document.querySelector(".awayscore").classList.remove("celebrate");
        document.querySelector(".awayscore").classList.remove("ahead");
        awayScore = 0;
    }
        
    else if (awayScore == 21 || awayScore == 22 || awayScore == 23) {
        let ryanGosling = new Audio("./sounds/clip.m4a");
        ryanGosling.play();
        document.querySelector(".awayscore").classList.add("celebrate");
    }

    else if (homeScore == 21 || homeScore == 22 || homeScore == 23) {
        let ryanGosling = new Audio("./sounds/clip.m4a");
        ryanGosling.play();
        document.querySelector(".homescore").classList.add("celebrate");
    }
}

function leaderStyling() {
    if (homeScore > awayScore) {
        document.querySelector(".homescore").classList.add("ahead");
        document.querySelector(".awayscore").classList.remove("ahead");
    }

    else if (awayScore > homeScore) {
        document.querySelector(".awayscore").classList.add("ahead");
        document.querySelector(".homescore").classList.remove("ahead");

    }

    else {
        document.querySelector(".homescore").classList.remove("ahead");
        document.querySelector(".awayscore").classList.remove("ahead");
    }
}
