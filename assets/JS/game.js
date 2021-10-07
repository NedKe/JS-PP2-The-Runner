let currentPosition = 0;
const user = document.querySelector('#game #user');
const blocks = document.querySelectorAll('#game > div');
let questionAnswersPopup = document.getElementsByClassName('popup-form')[0];
let submitBtn = document.querySelector(".popup-form #submit button");
let questionContainer = document.querySelector(".popup-form #question");
let answersContainer = document.querySelector(".popup-form #answers");
let dice = document.getElementById("dice");
let StarGamePopup = document.getElementsByClassName('popup-gameStart')[0];
let EndGamePopup = document.getElementsByClassName('popup-gameEnd')[0];
const myBackgroundMusic = new sound("assets/music/background.mp3", true);
let muteBtn = document.querySelector("#mute");
let resultMsg = document.querySelector("#result");
let backgroundMusicOn = true;
let levelPopup = document.querySelector("#choose-level");
let levelBasicBtn = document.querySelector("#choose-level #basic");
let levelHardBtn = document.querySelector("#choose-level #hard");
let level = 1;
levelBasicBtn.addEventListener('click', function () {
    countDown();
    levelPopup.classList.remove("show");
    level = 1;
    createCheckedPattern();
    drawIncreasesAndQuestions()
})
levelHardBtn.addEventListener('click', function () {
    countDown();
    levelPopup.classList.remove("show");
    level = 2;
    createCheckedPattern();
    drawIncreasesAndQuestions()
})

function drawIncreasesAndQuestions() {
    drawIncreases();
    drawQuestions();
}


let gameTime;
let timer = document.querySelector("#stop-watch")


function resetTimer() {
    gameTime = 4;
    timer.innerHTML = gameTime + "";
}

resetTimer();

let timerId;

function countDown() {
    timerId = setInterval(function () {
        gameTime = gameTime - 1;
        timer.innerHTML = gameTime + "";
        if (gameTime === 0) {
            if (currentPosition < 99) {
                showEndPopup("You lost!");
            }
            clearInterval(timerId);
        }
    }, 1000)
}

function move(randomNumber) {
    currentPosition += randomNumber;
    if (currentPosition in increases) {
        currentPosition += increases[currentPosition].value
    }
    if (currentPosition in questions) {
        let question = questions[currentPosition].question
        questionContainer.innerHTML = question;
        let answers = questions[currentPosition].multipleAnswers;
        const mySound = new sound("assets/music/question.wav", false)
        mySound.play();
        createOptions(answers);
        showPopup();
        dice.disabled = true;
    }
    if (currentPosition >= 99) {
        currentPosition = 99;
        clearInterval(timerId);
        showEndPopup("Well done!");
    }
    blocks[currentPosition].appendChild(user);

}

function drawIncreases() {
    let rewardPunishment;
    if (level === 1) {
        rewardPunishment = increases;
    } else if (level === 2) {
        rewardPunishment = increasesLevel2;
    }
    for (let key in rewardPunishment) {
        blocks[key].style.backgroundColor = rewardPunishment[key].type;
        blocks[key].innerHTML = rewardPunishment[key].value;
    }
}


function drawQuestions() {
    let currentQuestions;
    if (level === 1) {
        currentQuestions = questions;
    } else if (level === 2) {
        currentQuestions = questionsLevel2;
    }
    for (let key in currentQuestions) {
        blocks[key].innerHTML = '?'
    }
}


function showPopup() {
    questionAnswersPopup.classList.add("visible")
}

function hidePopup() {
    questionAnswersPopup.classList.remove("visible")
}
submitBtn.addEventListener('click', function () {
    hidePopup();
    dice.disabled = false;
})

function createOptions(answers) {
    answersContainer.innerHTML = "";
    for (let i in answers) {
        answersContainer.insertAdjacentHTML("beforeend", `<input id="fanswer" type="radio" name="answer" value="${answers[i]}"><label for="fanswer">${answers[i]}</label><br>`);
    }
}
submitBtn.addEventListener('click', function () {
    let userAnswer = document.querySelector("[name='answer']:checked").value;
    if (userAnswer === questions[currentPosition].rightAnswer) {
        move(2)
    } else {
        move(-2)
    }
})

function sound(src, loop) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
        this.sound.loop = loop;
    }
    this.stop = function () {
        this.sound.pause();
    }
}

startBtn.addEventListener('click', function () {
    hideStartPopup();
    myBackgroundMusic.play();
    levelPopup.classList.add("show")
    // countDown();
})
muteBtn.addEventListener('click', function () {
    if (backgroundMusicOn) {
        myBackgroundMusic.stop();
        backgroundMusicOn = false;
        muteBtn.innerHTML = "Unmute"
    } else {
        myBackgroundMusic.play();
        backgroundMusicOn = true;
        muteBtn.innerHTML = "mute"
    }
})

function hideStartPopup() {
    StarGamePopup.style.visibility = "hidden";
}


function showEndPopup(message) {
    resultMsg.innerHTML = message;
    EndGamePopup.style.visibility = "visible";
}

function hideEndPopup() {
    EndGamePopup.style.visibility = "hidden";
}
restartBtn.addEventListener('click', function () {
    hideEndPopup();
    currentPosition = 0;
    resetTimer();
    blocks[currentPosition].appendChild(user);
    levelPopup.classList.add("show");

});


function createCheckedPattern() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (i !== 0 && j !== 0) {
                blocks[10 * i + j].innerHTML = "";
            }
            if (j % 2 === (i % 2 === 0 ? 0 : 1)) {
                blocks[10 * i + j].style.backgroundColor = "#cbeaf1"
            } else {
                blocks[10 * i + j].style.backgroundColor = "#fff"
            }
        }
    }
}
createCheckedPattern();