/* --------- Start Button */

function startGame() {
    /* --------- Once you start the game the div of board is visible and the instructions and the score disapper */
    var rules = document.getElementById('instructions');
    rules.classList.add('hidden');
    var board = document.getElementById('board');
    board.classList.remove('hidden');
    var score = document.getElementById('score');
    score.classList.add('hidden');
/* --------- Here we reset the variables */
    loops = 0;
    flagVisible = false;
    gameScore = 0;

    gameLoop();
}

/* --------- Score */

var loops = 0;
var flagVisible = false;
var gameScore = 0;


/* --------- Game Loop */

function gameLoop() {
    
    flagVisible = !flagVisible;
    createFlags();
    loops++; 
    if (loops < 12) {
        setTimeout(gameLoop, flagVisible ? 1000 : 3000);
    } else {
        var board = document.getElementById('board');
        board.classList.add('hidden');
        var score = document.getElementById('score');
        score.classList.remove('hidden');
        var html = score.innerHTML;
        score.innerHTML = "Your final score is " +gameScore;
        
    }


}

/* --------- createFlags */

function createFlags() {
    var board = document.getElementById("board");
    var classToSet = flagVisible ? "flag visible" : "flag hidden";
    for (var index = 0; index < 6; index++) {
        board.children[index].className = classToSet;
        board.children[index].innerHTML = "";
        board.children[index].onclick = function () {
            gameScore += -2;
        }
    }
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    board.children[randomNumber - 1].innerHTML = "";
    board.children[randomNumber - 1].onclick = function () {
        gameScore++;
    }
    board.children[randomNumber - 1].className = classToSet + " wrong-flag";
}

/* --------- Timer */

var counter = 20;

setInterval( function(){
counter--;

if( counter >= 0 ){
    id = document.getElementById("count");
    id.innerHTML = counter;
}

if( counter === 0 ){
    id.innerHTML = "Game Over";
}
}, 1000);

