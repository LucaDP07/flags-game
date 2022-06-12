/**
 * Once you start the game the div of board is visible
 * and the instructions and the score disapper
 */
function startGame() {

    var rules = document.getElementById('instructions');
    rules.classList.add('hidden');
    var board = document.getElementById('board');
    board.classList.remove('hidden');
    var count = document.getElementById('count');
    count.classList.remove('hidden');
    var score = document.getElementById('score');
    score.classList.add('hidden');
    var scorearea1 = document.getElementById('score_area1');
    scorearea1.classList.remove('hidden');
    var scorearea = document.getElementById('score_area');
    scorearea.classList.remove('hidden');
    document.getElementById("current_score").innerText = 0;


    /* --------- Here we call the Timer */

    startTimer();

    /* --------- Score */

    let loops = 0;
    let flagVisible = false;
    let gameScore = 0;


    /* --------- Here we reset the variables */

    loops = 0;
    flagVisible = false;
    gameScore = 0;

    gameLoop();
}

/* --------- Here we animate the flags so that they flash on and off the screen  */

function gameLoop() {

    flagVisible = !flagVisible;
    createFlags();
    loops++;
    if (loops < 12) {
        setTimeout(gameLoop, flagVisible ? 1000 : 3000);
    } else {
        var board = document.getElementById("board");
        board.classList.add('hidden');
        var score = document.getElementById("score");
        score.classList.remove('hidden');
        var html = score.innerHTML;
        score.innerHTML = `<p class="final-result">Your final score is: ${gameScore}</p>`;
        if (gameScore > 0) {
            won();
        }
        if (gameScore < 0) {
            lost();
        }
    }
}

/* --------- Here we add 1 point to the score if the answer is right and deduct 2 points if the answer is wrong */

function createFlags() {
    var board = document.getElementById("board");
    var classToSet = flagVisible ? "flag visible" : "flag hidden";
    for (var index = 0; index < 6; index++) {
        board.children[index].className = classToSet;
        board.children[index].innerHTML = "";
        board.children[index].onclick = function () {
            gameScore += -2;
            document.getElementById("current_score").innerText = gameScore;

        };
    }
    /* --------- This code will randomly pick a random flag to be the intruder */
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    board.children[randomNumber - 1].innerHTML = "";
    board.children[randomNumber - 1].onclick = function () {
        gameScore++;
        document.getElementById("current_score").innerText = gameScore;
    }
    board.children[randomNumber - 1].className = classToSet + " wrong-flag";
}

/* --------- Timer */

function startTimer() {
    var counter = 20;

    setInterval(function () {
        counter--;

        if (counter >= 0) {
            id = document.getElementById("count");
            id.innerHTML = counter;
        }

        if (counter === 0) {
            id.innerHTML = "Game Over";
        }
    }, 1000);
}

/* --------- Here we count the games won and lost */


function won() {
    let oldScore = parseInt(document.getElementById("won").innerText);
    document.getElementById("won").innerText = ++oldScore;
}

function lost() {
    let oldScore = parseInt(document.getElementById("lost").innerText);
    document.getElementById("lost").innerText = ++oldScore;
}