var questionNumber = 0;




function startQuiz() {
    var x = document.getElementById("playGame");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// var quizStart = document.querySelector("#questions");

// startButton.addEventListener("click", function () {
//     document.getElementById("questions");

// });

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
    timeEl.textContent = " ";

    var addInitsEnd = document.element.style.display = "addInits";

    addInitsEnd.setAttribute("class", "addInits");
    mainEl.appendChild(addInitsEnd);

}

setTime();


var questions = ["Who is not a member of Led Zeppelin?", "Which song is an AC/DC song?", "Which is a Porno for Pyros song?", "Who was not a singer for Van Halen", "Who was not in Pink Floyd"];


var answers1 = ["Robert Palmer", "Jimmy Page", "John Paul Jones", "John Bonham"];
var answers2 = ["Eruption", "Jungle Love", "Dirty Deeds", "Love Gun"];
var answers3 = ["Pets", "Been Caught Stealing", "Mountain Song", "Stop"];
var answers4 = ["Gary Cherone", "Sammy Hagar", "David Lee Roth", "Perry Farrell"];
var answers5 = ["David Gilmour", "Bob Klose", "Roger Water", "Bob Weir"];

var answersArr = [answers1, answers2, answers3, answers4, answers5];
var answersCorrect = ["Robert Palmer", "Dirty Deeds", "Pets", "Perry Farrell", "Bob Weir"]
var playerID = document.querySelector("#player-ID");
var pID = document.querySelector("#p-ID");
var playerTop = document.querySelector("#player-Top");

var player = [];

init();
nextQuestion(questions[questionNumber], answersArr[questionNumber]);
function nextQuestion(stQuestion, arrAnswer) {
    document.getElementById("questionBox").innerText = (stQuestion);
    document.getElementById("button1").innerText = (arrAnswer[0]);
    document.getElementById("button2").innerText = (arrAnswer[1]);
    document.getElementById("button3").innerText = (arrAnswer[2]);
    document.getElementById("button4").innerText = (arrAnswer[3]);
};

function answer(answerThis) {
    console.log(answerThis);
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