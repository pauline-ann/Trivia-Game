///Global Variables ///

var time = 100;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var interval;
var isRunning = false;
var questionList = [
    { question: "Let's change our names to 'Why' and 'Bother.'", options: ["Spongebob", "Patrick", "Squidward", "Mr. Krabs"], answer: "Spongebob" },
    { question: "Oh no! He's hot!", options: ["Pearl", "Patrick", "Sandy", "Squidward"], answer: "Squidward" },
    { question: "The inner machinations of my mind are an enigma.", options: ["Squidward", "Patrick", "Plankton", "Mr. Krabs"], answer: "Patrick" },
    { question: "Do you smell it? That smell. A kind of smelly smell. The smelly smell that smells... smelly.", options: ["Spongebob", "Mr. Krabs", "Plankton", "Sandy"], answer: "Mr. Krabs" },
    { question: "This is a load of barnacles.", options: ["Plankton", "Dave", "Squidward", "Sandy"], answer: "Dave" },
    { question: "Once there was an ugly barnacle. He was so ugly that everyone died. The end!", options: ["Squidward", "Plankton", "Mr. Krabs", "Patrick"], answer: "Patrick" },
    { question: "Sandy, you may not have noticed, but I is 100% mam-male.", options: ["Spongebob", "Patrick", "Sandy", "Mr. Krabs"], answer: "Spongebob" },
    { question: "Ravioli, ravioli, give me the formuoli.", options: ["Mr. Krabs", "Plankton", "Larry", "Spongebob"], answer: "Plankton" },
    { question: "FUTURE!!!!!", options: ["Spongebob", "Sandy", "Squidward", "Patrick"], answer: "Squidward" },
    { question: "Is mayonnaise an instrument?", options: ["Spongebob", "Larry", "Sandy", "Patrick"], answer: "Patrick" },
]
var userAnswers = [];
var correctAnswer = ["Spongebob", "Squidward", "Patrick", "Mr. Krabs", "Dave", "Patrick", "Spongebob", "Plankton", "Squidward", "Patrick"];

/// Game Structure ///

window.onload = function () {
    $("#playagain").hide();
    $("#submit").hide();
    $("#start").on("click", listQuestions);
}

function listQuestions() {

    $("#start").hide();
    $("#sponge").hide();
    startTimer();

    for (i = 0; i < questionList.length; i++) {
        var questionObj = questionList[i];
        $("#questions").append("<p id='question_" + i + "'>" + questionObj.question + "</p><br>");
        var questionSelector = "#question_" + i;
        $(questionSelector).append("<form><fieldset><legend>#" + (i + 1) + "</legend></fieldset</form>");

        for (option = 0; option < questionObj.options.length; option++) {
            var questionOption = questionObj.options[option];
            $(questionSelector + " form fieldset").append(
                "<div><input type='radio' id='" + option + "' value='" + questionOption + "' name='character'><label for='" +
                questionOption + "'>" + questionOption + "</label></div>"
            );
        }
    }
    $("#submit").show();
    $("#submit").on("click", calculateResults);
}

function calculateResults() {
    for (i = 0; i < questionList.length; i++) {

        var questionObj = questionList[i];

        var userAnswer = $("#question_" + i + " input[name=character]:checked").val();
        console.log(userAnswer);
        userAnswers.push(userAnswer);
        console.log(userAnswers);

        if (userAnswer === questionObj.answer) {
            correct++
        } else if (typeof (userAnswer) === "undefined") {
            unanswered++;
        } else {
            incorrect++;
        }
    }
    showResults();
}

function showResults() {
    stopTimer();
    $("#questions").empty();
    $("#submit").hide();

    $("#results").append("Correct answers: " + correct + "<br>");
    $("#results").append("Incorrect answers: " + incorrect + "<br>");
    $("#results").append("Unanswered: " + unanswered + "<br>");

    $("#playagain").show();
    $("#playagain").on("click", restart);
}

function restart() {
    time = 100;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    $("#questions").empty();
    $("#results").empty();
    $("#playagain").hide();
    startTimer();
    listQuestions();
}

/// Timer Functions ///

function startTimer() {
    $("#timer").show();
    if (!isRunning) {
        interval = setInterval(decrement, 1000);
        isRunning = true;
    }
}
function decrement() {
    time--;
    $("#timer").html('Time left: ' + time + 's');
    if (time === 0) {
        alert("Time's up!");
        stopTimer();
        showResults();
    }
}
function stopTimer() {
    $("#timer").hide();
    isRunning = false;
    clearInterval(interval);
}