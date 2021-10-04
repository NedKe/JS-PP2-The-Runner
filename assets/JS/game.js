let currentPosition = 0;
const user = document.querySelector('#game #user');
const blocks = document.querySelectorAll('#game > div');
let questionAnswersPopup = document.getElementsByClassName('popup-form')[0];
let submitBtn = document.querySelector(".popup-form #submit button");
let questionContainer = document.querySelector(".popup-form #question");
let answersContainer = document.querySelector(".popup-form #answers");
let dice = document.getElementById("dice");
let StarGamePopup = document.getElementsByClassName('popup-gameStart')[0];

function move(randomNumber) {
    currentPosition += randomNumber; //99
    if (currentPosition in increases) {
        currentPosition += increases[currentPosition].value
    }
    if (currentPosition in questions) {
        let question = questions[currentPosition].question
        questionContainer.innerHTML = question;
        let answers = questions[currentPosition].multipleAnswers;
        const mySound = new sound("assets/music/question.wav")
        mySound.play();
        createOptions(answers);
        showPopup();
        dice.disabled = true;
    }
    if (currentPosition >= 99) {
        currentPosition = 99;
        win();
    }
    blocks[currentPosition].appendChild(user);

}

function win() {
    console.log('win')
}

function drawIncreases() {
    for (let key in increases) {
        blocks[key].style.backgroundColor = increases[key].type;
        blocks[key].innerHTML = increases[key].value;
    }
}
drawIncreases();

function drawQuestions() {
    for (let key in questions) {
        blocks[key].innerHTML = '?'
    }
}
drawQuestions();


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
    let userAnswer = parseInt(document.querySelector("[name='answer']:checked").value);
    if (userAnswer === questions[currentPosition].rightAnswer) {
        move(2)
    } else {
        move(-2)
    }
})

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

function hideStartPopup() {
    StarGamePopup.style.visibility = "hidden";
}
startBtn.addEventListener('click', function () {
    hideStartPopup();
})

function createCheckedPattern() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (j % 2 === (i % 2 === 0 ? 0 : 1)) {
                blocks[10 * i + j].style.backgroundColor = "blue"
            }
        }


    }
}
createCheckedPattern();