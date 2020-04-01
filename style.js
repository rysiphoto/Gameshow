var questionNumber = 0;

function startQuiz() {
    var x = document.getElementById("playGame");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("addInits");

var secondsLeft = 90;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);
}
function endGame() {
    console.log(secondsLeft);
    var y = document.getElementById("addInits")

    if (y.style.display == "none") {
        y.style.display = "block";
    }

};

setTime();


var questions = ["Who is not a member of Led Zeppelin?", "Which song is an AC/DC song?", "Which is a Porno for Pyros song?", "Who was not a singer for Van Halen", "Who was not in Pink Floyd"];

var answers1 = ["Robert Palmer", "Jimmy Page", "John Paul Jones", "John Bonham"];
var answers2 = ["Eruption", "Jungle Love", "Dirty Deeds", "Love Gun"];
var answers3 = ["Pets", "Been Caught Stealing", "Mountain Song", "Stop"];
var answers4 = ["Gary Cherone", "Sammy Hagar", "David Lee Roth", "Perry Farrell"];
var answers5 = ["David Gilmour", "Bob Klose", "Roger Water", "Bob Weir"];

var answersCorrect = ["Robert Palmer", "Dirty Deeds", "Pets", "Perry Farrell", "Bob Weir"];

var playerID = document.querySelector("#player-ID");
var pID = document.querySelector("#p-ID");
var playerTop = document.querySelector("#player-Top");

var player = [];
var answersArr = [answers1, answers2, answers3, answers4, answers5];
init();
nextQuestion();

function nextQuestion() {

    // console.log(questions[questionNumber]);
    console.log(questionNumber);
    if (questions.length > questionNumber) {
        document.getElementById("questionBox").innerText = (questions[questionNumber]);
        document.getElementById("button1").innerText = (answersArr[questionNumber][0]);
        document.getElementById("button2").innerText = (answersArr[questionNumber][1]);
        document.getElementById("button3").innerText = (answersArr[questionNumber][2]);
        document.getElementById("button4").innerText = (answersArr[questionNumber][3]);
    } else {
        endGame();
    }
};


function answer(answerThis) {

    if (answersArr[questionNumber][answerThis.value] == answersCorrect[questionNumber]) {


        console.log("Correct");
        questionNumber++;

        nextQuestion();

    } else {
        console.log("Wrong Answer");
        secondsLeft -= 10;
        questionNumber++;
        nextQuestion();

    };
};

function renderPlayer() {
    playerTop.innerHTML = "";


    for (var i = 0; i < player.length; i++) {
        var play = player[i];

        var li = document.createElement("li");
        li.textContent = play;
        li.setAttribute("data-index", i);

        playerTop.appendChild(li);
    }
}

$("#button-clear").click(function () {
    $("#player-Top").empty(localStorage); //empty removes all children elements
});

function init() {

    var savedPlayer = JSON.parse(localStorage.getItem("player"));
    if (savedPlayer !== null) {
        player = savedPlayer;
    }

    renderPlayer();
}
function storeScore() {
    localStorage.setItem("timer", JSON.stringify(timer));
}




function storePlayer() {
    localStorage.setItem("player", JSON.stringify(player));
}

pID.addEventListener("submit", function (event) {
    event.preventDefault();

    var pID = playerID.value.trim();
    if (pID === "") {
        return;
    }

    player.push(pID);
    playerID.value = "";

    storePlayer();
    renderPlayer();
});
