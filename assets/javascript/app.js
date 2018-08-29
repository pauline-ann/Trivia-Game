// Global variables
var time = 100;
var interval;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var QA = [
    {q:"", a:""},
    {q:"", a:""},
    {q:"", a:""},
    {q:"", a:""},
    {q:"", a:""},
    {q:"", a:""},
    {q:"", a:""},
    {q:"", a:""},
    {q:"", a:""},
    {q:"", a:""},
]

// Functions
window.onload = function () {
    $("#start").on("click", startTimer);
}

function startTimer() {
    interval = setInterval(decrement, 1000);
    questionnaire ();
}

function decrement() {
    time--;
    $("#timer").html('Time left: ' + time + 's');
    $("#start").hide();
    if (time === 0) {
        alert("time's up!");
        clearInterval(interval);
        gameOver();
    }
}

function gameOver() {
    // screen showing variables
    // need to show right answers?
    // play again? --> restart();
}

function restart() {
    time = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    clearInterval(interval);
    $("#start").show();
}

function questionnaire() {
    
}