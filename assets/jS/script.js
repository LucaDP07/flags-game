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
    peopleVisible = false;
    gameScore = 0;

    gameLoop();
}

/* --------- Score */

var loops = 0;
var peopleVisible = false;
var gameScore = 0;


/* --------- Game Loop */

function gameLoop() {
    
    peopleVisible = !peopleVisible;
    createCharacters();
    loops++; 
    if (loops < 12) {
        setTimeout(gameLoop, peopleVisible ? 1000 : 3000);
    } else {
        var board = document.getElementById('board');
        board.classList.add('hidden');
        var score = document.getElementById('score');
        score.classList.remove('hidden');
        var html = score.innerHTML;
        score.innerHTML = "Your final result is " +gameScore;
        
    }


}

/* --------- createCharacters */

function createCharacters() {
    var board = document.getElementById("board");
    var classToSet = peopleVisible ? "flag visible" : "flag hidden";
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