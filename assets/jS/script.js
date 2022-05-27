/* --------- Start Button */

function startGame() {
    gameLoop();
}

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
        alert("Game over!");
    }

}

function createCharacters() {
    var board = document.getElementById("board");
    for(var index = 0; index < 6; index ++) {
        board.children[index].innerHTML = "Guest";
    }
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    board.children[randomNumber-1].innerHTML ="Thief";
}

function flashCharacters() {
    var board = document.getElementById("board");
    var classToSet = peopleVisible ? "flag visible" : "flag hidden";
    for (var index = 0; index < 6; index++) {
        board.children[index].className = classToSet;
    }
}