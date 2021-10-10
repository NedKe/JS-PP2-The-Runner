const user = document.querySelector("#game #user");
const blocks = document.querySelectorAll("#game > div");
const questionAnswersPopup = document.getElementsByClassName(
    "question-popup"
)[0];
const submitBtn = document.querySelector(".question-popup #submit button");
const questionContainer = document.querySelector(".question-popup #question");
const answersContainer = document.querySelector(".question-popup #answers");
const dice = document.getElementById("dice");
const StarGamePopup = document.getElementsByClassName("popup-gameStart")[0];
const EndGamePopup = document.getElementsByClassName("popup-gameEnd")[0];
const muteBtn = document.querySelector("#mute");
const resultMsg = document.querySelector("#result");
const levelPopup = document.querySelector("#choose-level");
const levelBasicBtn = document.querySelector("#choose-level #basic");
const levelHardBtn = document.querySelector("#choose-level #hard");
const timer = document.querySelector("#stop-watch");
const icon = document.querySelector("#dice i");
const successAlert = document.querySelector("#notifications #success");
const failAlert = document.querySelector("#notifications #fail");

const myBackgroundMusic = new sound("assets/music/background.mp3", true);
const lostSound = new sound("assets/music/lost.wav", false);
const winSound = new sound("assets/music/win.wav", false);
const successSound = new sound("assets/music/success.wav");
const failureSound = new sound("assets/music/invalid.wav");
let gameTime;
let timerId;
let backgroundMusicOn = true;
let currentPosition = 0;
let tempPosition;
let level = 1;
let currentDiceIcon = "fa-dice";

/* Storing the value of the current icon class , fa-dice, so that we remove it when 
we roll the dice and add the new value.*/
function toss() {
    return 4;
    return 1 + Math.floor(Math.random() * 6);
}

function initializeLevel(chosenLevel) {
    level = chosenLevel;
    countDown();
    levelPopup.classList.remove("show");
    createBoard();
    drawChallenges();
    dice.disabled = false;
}

function changeDice(diceValue) {
    // remove the current icon's dice class
    icon.classList.remove(currentDiceIcon);
    // update the current dice icon with the new value based on toss and convert it to the fa dice class respective to the number
    currentDiceIcon = diceValue;
    // add the new dice class to the icon
    icon.classList.add(currentDiceIcon);
}
function initializeEventListeners() {
    // Event listener on the dice icon to handle the click
    dice.addEventListener("click", function() {
        const randomValue = toss();
        changeDice(`fa-dice-${convertDigitToCharacter(randomValue)}`);
        move(randomValue);
    });
    //Event listener for buttons basic and hard
    levelBasicBtn.addEventListener("click", function() {
        initializeLevel(1);
    });
    levelHardBtn.addEventListener("click", function() {
        initializeLevel(2);
    });
    //Event listeners on  all buttons
    startBtn.addEventListener("click", function() {
        hideStartPopup();
        myBackgroundMusic.play();
        levelPopup.classList.add("show");
    });
    muteBtn.addEventListener("click", function() {
        if (backgroundMusicOn) {
            myBackgroundMusic.stop();
            backgroundMusicOn = false;
            muteBtn.innerHTML = "Unmute";
        } else {
            myBackgroundMusic.play();
            backgroundMusicOn = true;
            muteBtn.innerHTML = "mute";
        }
    });
    submitBtn.addEventListener("click", function() {
        hideQuestionPopup();
        dice.disabled = false;
    });
    submitBtn.addEventListener("click", function() {
        let userAnswer = document.querySelector("[name='answer']:checked")
            .value;
        let currentQuestions;
        if (level === 1) {
            currentQuestions = questions;
        } else if (level === 2) {
            currentQuestions = questionsLevel2;
        }
        if (userAnswer === currentQuestions[currentPosition].rightAnswer) {
            successSound.play();
            successAlert.classList.add("show");
            setTimeout(function() {
                successAlert.classList.remove("show");
            }, 1000);
            move(2);
        } else {
            failureSound.play();
            failAlert.classList.add("show");
            setTimeout(function() {
                failAlert.classList.remove("show");
            }, 1000);
            move(-2);
        }
    });
    restartBtn.addEventListener("click", function() {
        hideEndPopup();
        currentPosition = 0;
        resetTimer();
        levelPopup.classList.add("show");
    });
}

//Stop watch function
function resetTimer() {
    gameTime = 120;
    timer.innerHTML = gameTime + "";
}

function countDown() {
    timerId = setInterval(function() {
        gameTime = gameTime - 1;
        timer.innerHTML = gameTime + "";
        if (gameTime === 0) {
            if (currentPosition < 99) {
                endGame(-1);
            }
            clearInterval(timerId);
        }
    }, 1000);
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
    let id = setInterval(function() {
        if (gameTime === 0) {
            clearInterval(id);
            return;
        }
        if (randomNumber > 0) {
            ++tempPosition;
        } else {
            --tempPosition;
        }
        if (currentPosition >= 99) {
            currentPosition = 99;
            clearInterval(timerId);
            clearInterval(id);
            endGame(1);
        }
        new sound("assets/music/single-footstep.mp3", false).play();
        blocks[tempPosition].appendChild(user);
        if (tempPosition === currentPosition) {
            dice.disabled = false;
            checkAndShowQuestionForCurrentPosition(
                currentPosition,
                currentQuestions
            );
            checkIfRewardOrPunishment(currentPosition, rewardPunishment);
            clearInterval(id);
        }
    }, 500);
}
function checkIfRewardOrPunishment(currentPosition, rewardPunishment) {
    if (currentPosition in rewardPunishment) {
        if (rewardPunishment[currentPosition].value < 0) {
            failureSound.play();
        } else {
            successSound.play();
        }
        move(rewardPunishment[currentPosition].value);
    }
}
function checkAndShowQuestionForCurrentPosition(
    currentPosition,
    currentQuestions
) {
    if (currentPosition in currentQuestions) {
        submitBtn.disabled = true;
        let question = currentQuestions[currentPosition].question;
        questionContainer.innerHTML = question;
        let answers = currentQuestions[currentPosition].multipleAnswers;
        const mySound = new sound("assets/music/question.wav", false);
        mySound.play();
        createOptions(answers);
        document.querySelectorAll("[name='answer']").forEach(function(option) {
            option.addEventListener("change", function() {
                submitBtn.disabled = false;
            });
        });
        showQuestionPopup();
        dice.disabled = true;
    }
}
//End of move function

//Function generating multiple options for answers
function createOptions(answers) {
    answersContainer.innerHTML = "";
    for (let i in answers) {
        answersContainer.insertAdjacentHTML(
            "beforeend",
            `<input id="fanswer-${i}" type="radio" name="answer" value="${answers[i]}"><label for="fanswer-${i}">${answers[i]}</label><br>`
        );
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
        blocks[key].innerHTML = "?";
    }
}

//Functions showing and hiding questions and multioption answers.
function showQuestionPopup() {
    questionAnswersPopup.classList.add("visible");
}

function hideQuestionPopup() {
    questionAnswersPopup.classList.remove("visible");
}
//End of functions showing and hiding questions and multioption answers.

// Functions hiding start pop up and showing/hididng end pop up when game is finished.
function hideStartPopup() {
    StarGamePopup.style.visibility = "hidden";
}

function showEndPopup(message) {
    resultMsg.innerHTML = message;
    EndGamePopup.style.visibility = "visible";
}

function endGame(status) {
    if (status === -1) {
        lostSound.play();
        showEndPopup("You lost! 😔");
    } else {
        winSound.play();
        showEndPopup("Well done! 😃");
    }

    dice.disabled = true;
    hideQuestionPopup();
}

function hideEndPopup() {
    EndGamePopup.style.visibility = "hidden";
}
// Function creating checked patten on the board when page loads and resets the board when game is restarted.
function createBoard() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            blocks[10 * i + j].innerHTML = "";
            if (j % 2 === (i % 2 === 0 ? 0 : 1)) {
                blocks[10 * i + j].style.backgroundColor = "#cbeaf1";
            } else {
                blocks[10 * i + j].style.backgroundColor = "#fff";
            }
        }
    }
    blocks[currentPosition].appendChild(user);
}

function initializeGame() {
    dice.disabled = true;
    initializeEventListeners();
    createBoard();
    resetTimer();
}

initializeGame();
