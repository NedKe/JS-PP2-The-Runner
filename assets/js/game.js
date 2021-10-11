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

const gameDuration = 120;
let gameTime;
let timerId;
let backgroundMusicOn = true;
let currentPosition = 0;
let tempPosition;
let level = 1;
let currentDiceIcon = "fa-dice";

/**
 * Generates a random number between 1 and 6 inclusive of both.
 * @returns {number} number from 1-6
 */
function toss() {
    return 1 + Math.floor(Math.random() * 6);
}

/**
 * Initializes game level by starting a timer, creating the game board and draw challenges.
 * It also enables the dice to be thrown by user.
 * @param {number} chosenLevel
 */
function initializeLevel(chosenLevel) {
    level = chosenLevel;
    countDown();
    levelPopup.classList.remove("show");
    createBoard();
    drawChallenges();
    dice.disabled = false;
}

/**
 * Changes dice icon based on the parameter value
 * @param {number} diceValue
 */
function changeDice(diceValue) {
    // remove the current icon's dice class
    icon.classList.remove(currentDiceIcon);
    // update the current dice icon with the new value based on toss and convert it to the fa dice class respective to the number
    currentDiceIcon = diceValue;
    // add the new dice class to the icon
    icon.classList.add(currentDiceIcon);
}

/**
 * Initializes event listeners for the game for all the buttons and the dice.
 */
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
        } else {
            myBackgroundMusic.play();
            backgroundMusicOn = true;
        }
        toggleMute();
    });

    submitBtn.addEventListener("click", function() {
        hideQuestionPopup();
        dice.disabled = false;
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

/**
 * Toggles mute/unmute icon
 */
function toggleMute() {
    muteBtn.querySelector("i").classList.toggle("fa-volume-down");
    muteBtn.querySelector("i").classList.toggle("fa-volume-mute");
}

/**
 * Resets the timer by setting the gameTime variable to 120 and showing that in the timer element in the page
 */
function resetTimer() {
    gameTime = gameDuration;
    timer.innerHTML = gameTime + "";
}

/**
 * Starts the count down from gameTime value to 0 using setInterval function
 * It also clears the interval when the gameTime becomes 0, removing that timer from the browser
 */
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

/**
 * Lets user to move when randomvalue is generated by toss function and the user lands in green, red or questions squares.
 * The move functions contains setinterval function to control the stepwise move of the user.
 * @param {number} randomNumber
 */
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
        if (tempPosition >= 99) {
            tempPosition = 99;
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

/**
 * It checks if the position of the user is on the green and red boxes and if so moves the user
 * 2 steps back if on red box or 2 steps forward if on green as a reward.
 * @param {number} currentPosition
 * @param {Object} rewardPunishment
 */
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

/**
 * It shows question popup with respective question if the currentPosition is a question block.
 * @param {number} currentPosition
 * @param {Object} currentQuestions
 */
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

/**
 * Creates the options for multiple options of a question and adds them to the answersContainer.
 * @param {Array} answers
 */
function createOptions(answers) {
    answersContainer.innerHTML = "";
    for (let i in answers) {
        answersContainer.insertAdjacentHTML(
            "beforeend",
            `<div><input id="fanswer-${i}" type="radio" name="answer" value="${answers[i]}"><label for="fanswer-${i}">${answers[i]}</label></div>`
        );
    }
}

/**
 * Draws both red and green boxes and the question marks for the respective block in the game
 */
function drawChallenges() {
    drawRewardPunishment();
    drawQuestions();
}

/**
 * Fills in the red and green blocks based on the increases or increasesLevel2 objects from challenges.js
 * that gets chosen based on the level that the user have selected.
 * It also sets the innerHTML of the respective blocks with a number that is used to move the user to
 * based on whether they end up in the reward(green) blocks or red(punishment) blocks.
 */
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

/**
 * Puts a question mark in the respective blocks based on the questions or questionsLevel2 objects from challenges.js
 * that gets chosen based on the level that the user have selected.
 */
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

/**
 * Shows the question popup
 */
function showQuestionPopup() {
    questionAnswersPopup.classList.add("visible");
}

/**
 * Hides thee question popup
 */
function hideQuestionPopup() {
    questionAnswersPopup.classList.remove("visible");
}

/**
 * Hides the start popup screeen
 */
function hideStartPopup() {
    StarGamePopup.style.visibility = "hidden";
}

/**
 * Shows the end popup screen with the message that is passed as parameter
 * @param {string} message
 */
function showEndPopup(message) {
    resultMsg.innerHTML = message;
    EndGamePopup.style.visibility = "visible";
}

/**
 * Sets the end game status by showing the end game popup, disable the dice and hide question popup
 * if when ending the game there is a question popup visible in the screen
 *
 * The status parameter is either negative or positive. Negative(-1) if the user loses and positive(1) if the user wins
 * @param {number} status this is the
 */
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

/**
 * Hides the end popup screen
 */
function hideEndPopup() {
    EndGamePopup.style.visibility = "hidden";
}

/**
 * Initializes the board by cleaning the blocks, setting checked pattern and adding the user to the first block
 * At the time of running this function the currenPosition is 0
 */
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

/**
 * Initializes the game by disabling the dice, initializing event listeners, creating the board and reseting
 * the timeer count down
 */
function initializeGame() {
    dice.disabled = true;
    initializeEventListeners();
    createBoard();
    resetTimer();
}

initializeGame();
