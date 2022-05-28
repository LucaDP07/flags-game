/* --------- Start Button */

function startGame() {
    gameLoop();
}

/* --------- Score */

var loops = 0;
var peopleVisible = false;
var gameScore = o;


/* --------- Game Loop */

var loops = 0;
var peopleVisible = false;

function gameLoop() {
    peopleVisible = !peopleVisible;
    createCharacters();
    flashCharacters();
    loops++;
    if (loops < 12) {
        setTimeout(gameLoop, 3000);
    } else {
        alert("You scored" + gameScore);
    }

}

/* --------- createCharacters */

function createCharacters() {
    var board = document.getElementById("board");
    var classToSet = peopleVisible ? "flag visible" : "flag hidden";
    for(var index = 0; index < 6; index ++) {
        board.children[index].className = classToSet;
        board.children[index].innerHTML = "Correct Flag";
        board.children[index].onclick = function() {
            gameScore += -2;
        }
    }
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    board.children[randomNumber-1].innerHTML ="Wrong Flag";
    board.children[randomNumber-1].onclick = function() {
        gameScore++;
    }
}
