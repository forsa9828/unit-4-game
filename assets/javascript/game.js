$(document).ready(function() {

//Computer generates random number for to be guessed
var randomNum = Math.floor(Math.random() * 120 + 19);

//display randomNum
$("#userScore").text("Target:" + randomNum);

//Generate a number for crystals (Userscore)
var crystal1 = Math.floor(Math.random() * 1 + 12);
var crystal2 = Math.floor(Math.random() * 1 + 12);
var crystal3 = Math.floor(Math.random() * 1 + 12);
var crystal4 = Math.floor(Math.random() * 1 + 12);

// Win and Lose 
function updateWin(){
    wins++;
    $("wins"),text("Wins:"+ wins);
}

function updateLosses(){
    losses++;
    $("wins"),text("Wins:"+ wins);
}
// NEW Game NEW numbers
//reset when game has gone through once (placement)

var wins = 0;
var losses = 0;
var userScore = 0;
//When cyrstals are clicked it added the userscores
$("#Rose").on("click",function() {

    userScore = userScore + crystal1;

    $(".useScore").text(userScore);

     // if user number matches computer random number then its a win
    if (userScore == randomNum) {
        updateWin();
    }

    // else user number doesnt match random number then loss
    else if (userScore > randomNum) {
        updateLosses();
    }

    else if (userScore < randomNum)
        updateLosses();
}

$("#Jade").on("click",function() {

    userScore = userScore + crystal2;

    $(".your_total").text(userScore);

     // if user number matches computer random number then its a win
    if (userScore == randomNum) {
        updateWin();
    }

    // else user number doesnt match random number then loss
    else if (userScore > randomNum) {
        updateLosses();
    }

    else if (userScore < randomNum)
        updateLosses();
}

$("#Quartz").on("click",function() {

    userScore = userScore + crystal3;

    $(".your_total").text(userScore);

     // if user number matches computer random number then its a win
    if (userScore == randomNum) {
        updateWin();
    }

    // else user number doesnt match random number then loss
    else if (userScore > randomNum) {
        updateLosses();
    }

    else if (userScore < randomNum)
        updateLosses();

}

$("#Amethyst").on("click",function() {

    userScore = userScore + crystal4;

    $(".your_total").text(userScore);

     // if user number matches computer random number then its a win
    if (userScore == randomNum) {
        updateWin();
    }

    // else user number doesnt match random number then loss
    else if (userScore > randomNum) {
        updateLosses();
    }

    else if (userScore < randomNum) {
        updateLosses();
    }
}
