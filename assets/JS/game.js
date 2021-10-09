const user = document.querySelector('#game #user');
const blocks = document.querySelectorAll('#game > div');
const questionAnswersPopup = document.getElementsByClassName('popup-form')[0];
const submitBtn = document.querySelector(".popup-form #submit button");
const questionContainer = document.querySelector(".popup-form #question");
const answersContainer = document.querySelector(".popup-form #answers");
const dice = document.getElementById("dice");
const StarGamePopup = document.getElementsByClassName('popup-gameStart')[0];
const EndGamePopup = document.getElementsByClassName('popup-gameEnd')[0];
const myBackgroundMusic = new sound("assets/music/background.mp3", true);
const muteBtn = document.querySelector("#mute");
const resultMsg = document.querySelector("#result");
const levelPopup = document.querySelector("#choose-level");
const levelBasicBtn = document.querySelector("#choose-level #basic");
const levelHardBtn = document.querySelector("#choose-level #hard");
const timer = document.querySelector("#stop-watch");

let gameTime;
let timerId;
let backgroundMusicOn = true;
let currentPosition = 0;
let tempPosition;
let level = 1;

function initializeLevel(chosenLevel) {
    level = chosenLevel;
    countDown();
    levelPopup.classList.remove("show");
    createCheckedPattern();
    drawChallenges();
    dice.disabled = false;
}

function initializeEventListeners() {
    //Event listener for buttons basic and hard
    levelBasicBtn.addEventListener('click', function () {
        initializeLevel(1);
    })
    levelHardBtn.addEventListener('click', function () {
        initializeLevel(2);
    })
    //Event listeners on  all buttons
    startBtn.addEventListener('click', function () {
        hideStartPopup();
        myBackgroundMusic.play();
        levelPopup.classList.add("show")
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
    submitBtn.addEventListener('click', function () {
        hideQuestionPopup();
        dice.disabled = false;
    })
    submitBtn.addEventListener('click', function () {
        let userAnswer = document.querySelector("[name='answer']:checked").value;
        let currentQuestions;
        if (level === 1) {
            currentQuestions = questions;
        } else if (level === 2) {
            currentQuestions = questionsLevel2;
        }
        if (userAnswer === currentQuestions[currentPosition].rightAnswer) {
            move(2);
        } else {
            move(-2);
        }
    })
    restartBtn.addEventListener('click', function () {
        hideEndPopup();
        currentPosition = 0;
        resetTimer();
        blocks[currentPosition].appendChild(user);
        levelPopup.classList.add("show");

    });
    //End of eventlistener on all buttons
    //End of event listener for buttons basic and hard
}

//Stop watch function
function resetTimer() {
    gameTime = 60;
    timer.innerHTML = gameTime + "";
}


function countDown() {
    timerId = setInterval(function () {
        gameTime = gameTime - 1;
        timer.innerHTML = gameTime + "";
        if (gameTime === 0) {
            if (currentPosition < 99) {
                endGame("You lost!");
            }
            clearInterval(timerId);
        }
    }, 1000)
}
//End of stop watch function

/*The move function lettinguser to move when randomvalue is generated by toss function and the user lands in green, red or questions squares.
The move functions contains setinterval function to control the stepwise move of user*/
function move(randomNumber) {
    tempPosition = currentPosition;
    currentPosition += randomNumber;
    let rewardPunishment;
    let currentQuestions;
    if (level === 1) {
        rewardPunishment = increases;
        currentQuestions = questions;
    } else if (level === 2) {
        rewardPunishment = increasesLevel2;
        currentQuestions = questionsLevel2;
    }

    dice.disabled = true;
    let id = setInterval(function () {
        if (randomNumber > 0) {
            ++tempPosition;
        } else {
            --tempPosition;
        }
        if (currentPosition >= 99) {
            currentPosition = 99;
            clearInterval(timerId);
            clearInterval(id);
            endGame("Well done!");
        }
        blocks[tempPosition].appendChild(user);
        if (tempPosition === currentPosition) {
            dice.disabled = false;
            if (currentPosition in rewardPunishment) {
                move(rewardPunishment[currentPosition].value);
            }
            if (currentPosition in currentQuestions) {
                let question = currentQuestions[currentPosition].question;
                questionContainer.innerHTML = question;
                let answers = currentQuestions[currentPosition].multipleAnswers;
                const mySound = new sound("assets/music/question.wav", false)
                mySound.play();
                createOptions(answers);
                showQuestionPopup();
                dice.disabled = true;
            }
            clearInterval(id);
        }
    }, 500);
}
//End of move function

//Function generating multiple options for answers
function createOptions(answers) {
    answersContainer.innerHTML = "";
    for (let i in answers) {
        answersContainer.insertAdjacentHTML("beforeend", `<input id="fanswer-${i}" type="radio" name="answer" value="${answers[i]}"><label for="fanswer-${i}">${answers[i]}</label><br>`);
    }
}


//Function calling the two functions generating increases and questions
function drawChallenges() {
    drawRewardPunishment();
    drawQuestions();
}

// Functions generating the content of the game from the objects defined in challenges, based on game level.
function drawRewardPunishment() {
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

//Functions showing and hiding questions and multioption answers.
function showQuestionPopup() {
    questionAnswersPopup.classList.add("visible")
}

function hideQuestionPopup() {
    questionAnswersPopup.classList.remove("visible")
}
//End of functions showing and hiding questions and multioption answers.



//Game sound function taken from the W3schools.
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

// Functions hiding start pop up and showing/hididng end pop up when game is finished.
function hideStartPopup() {
    StarGamePopup.style.visibility = "hidden";
}

function showEndPopup(message) {
    resultMsg.innerHTML = message;
    EndGamePopup.style.visibility = "visible";
}

function endGame(message) {
    showEndPopup(message);
    dice.disabled = true;
    hideQuestionPopup();
}

function hideEndPopup() {
    EndGamePopup.style.visibility = "hidden";
}
// Function creating checked patten on the board when page loads and resets the board when game is restarted.
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

function initializeGame() {
    initializeEventListeners();
    createCheckedPattern();
    resetTimer();
}

initializeGame();