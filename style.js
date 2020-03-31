
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