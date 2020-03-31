
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









const questions = [
    {
        question: 'Who is not a member of Led Zeppelin?',
        answer: [
            { text: 'Robert Palmer', correct: true },
            { text: 'Jimmy Page', correct: false },
            { text: 'John Paul Jones', correct: false },
            { text: 'John Bonham', correct: false },
        ]
    },
    {
        question: 'Which song is an AC/DC song?',
        answer: [
            { text: 'Eruption', correct: false },
            { text: 'Jungle Love', correct: false },
            { text: 'Dirty Deeds', correct: true },
            { text: 'Love Gun', correct: false },
        ]
    },
    {
        question: 'Which is a Porno for Pyros song?',
        answer: [
            { text: 'Pets', correct: true },
            { text: 'Been Caught Stealing', correct: false },
            { text: 'Mountain Song', correct: false },
            { text: 'Stop', correct: false },
        ]
    },
    {
        question: 'Who was not a singer for Van Halen',
        answer: [
            { text: 'Gary Cherone', correct: false },
            { text: 'Sammy Hagar', correct: false },
            { text: 'David Lee Roth', correct: false },
            { text: 'Perry Farrell', correct: true },
        ]
    },
    {
        question: 'Who was not in Pink Floyd',
        answer: [
            { text: 'David Gilmour', correct: false },
            { text: 'Bob Klose', correct: false },
            { text: 'Roger Waters', correct: false },
            { text: 'Bob Weir', correct: true },
        ]
    }

];
// var questions = ["Who is not a member of Led Zeppelin?", "Which song is an AC/DC song?", "Which is a Porno for Pyros song?", "Who was not a singer for Van Halen", "Who was not in Pink Floyd"];

for (i = 0; i < questions.length; i++) {
    console.log(questions);
}

// questionsCon = question[0]
// button1 = questions[0].answer[0];
// button2 = questions[0].answer[1];
// button3 = questions[0].answer[2];
// button4 = questions[0].answer[3];

// questionsCon = question[1]
// button1 = questions[1].answer[0];
// button2 = questions[1].answer[1];
// button3 = questions[1].answer[2];
// button4 = questions[1].answer[3];

// questionsCon = question[2]
// button1 = questions[2].answer[0];
// button2 = questions[2].answer[1];
// button3 = questions[2].answer[2];
// button4 = questions[2].answer[3];

// questionsCon = question[3]
// button1 = questions[3].answer[0];
// button2 = questions[3].answer[1];
// button3 = questions[3].answer[2];
// button4 = questions[3].answer[3];

// questionsCon = question[4]
// button1 = questions[4].answer[0];
// button2 = questions[4].answer[1];
// button3 = questions[4].answer[2];
// button4 = questions[4].answer[3];

var playerID = document.querySelector("#player-ID");
var pID = document.querySelector("#p-ID");
var playerTop = document.querySelector("#player-Top");

var player = [];

init();

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
