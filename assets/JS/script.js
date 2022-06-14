// Code to be executed when the page has finished loading
// Code to be executed when the user clicks the play button

document.addEventListener("DOMContentLoaded", function () {
    let start_button = document.getElementById("start_button");

    start_button.addEventListener('click', () => {
        startGame();
    });
});

// Here we set the order in which the informations will be displayed on the screen once the player click on the Play button
// This code was created by myself
function startGame() {

    var rules = document.getElementById('instructions');
    rules.classList.add('hidden');
    var board = document.getElementById('board');
    board.classList.remove('hidden');
    var count = document.getElementById('count');
    count.classList.remove('hidden');
    var score = document.getElementById('score');
    score.classList.add('hidden');
    var scoreTop = document.getElementById('score_top');
    scoreTop.classList.remove('hidden');
    var scoreBottom = document.getElementById('score_bottom');
    scoreBottom.classList.remove('hidden');
    document.getElementById('current_score').innerText = 0;

    // Here we call the Timer
    startTimer();

    // Here we reset the variables
    loops = 0;
    flagVisible = false;
    gameScore = 0;

    gameLoop();
}

// This variable increase in value everytime it's called
var loops = 0;
// This variable creates the flashing effect
var flagVisible = false;
// This variable keeps track of the score
var gameScore = 0;


// Here we make our game loops for a fixed number of times before the game ends
// At the end of the game the final score will be shown
// Here we animate the flags so that they flash on and off the screen
// This code was inspired by the book Get Coding

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

// Here we crate a new set of flags in different positions everytime the game loop runs
// The variable gameScore keeps track of the score. We subtract 2 from the gameScore value if the wrong flag is selected
// This code was inspired by the book Get Coding

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

    // This code will randomly pick a random flag to be the intruder everytime the game loop runs
    // The variable gameScore keeps track of the score. We add 1 to the gameScore value if the correct flag is selected
    // This code was inspired by the book Get Coding

    var randomNumber = Math.floor(Math.random() * 6) + 1;
    board.children[randomNumber - 1].innerHTML = "";
    board.children[randomNumber - 1].onclick = function () {
        gameScore++;
        document.getElementById("current_score").innerText = gameScore;
    };
    board.children[randomNumber - 1].className = classToSet + " wrong-flag";
}

// Here we set the Timer
//This code was inspired by the YouTube channel WEB CIFAR

function startTimer() {
    var counter = 21;

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

// Here we count the games won and lost
// This code was inspired by the Love Maths Project

function won() {
    let oldScore = parseInt(document.getElementById("won").innerText);
    document.getElementById("won").innerText = ++oldScore;
}

function lost() {
    let oldScore = parseInt(document.getElementById("lost").innerText);
    document.getElementById("lost").innerText = ++oldScore;
}