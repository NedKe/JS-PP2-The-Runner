let currentPosition = 0;
const user = document.querySelector('#game #user');
const blocks = document.querySelectorAll('#game > div');
let questionAnswersPopup = document.getElementsByClassName('popup-form')[0];
let submitBtn = document.querySelector(".popup-form #submit button");
let questionContainer = document.querySelector(".popup-form #question");
let answersContainer = document.querySelector(".popup-form #answers");


function move(randomNumber) {
    currentPosition += randomNumber; //99
    if (currentPosition in increases) {
        currentPosition += increases[currentPosition].value
    }
    if (currentPosition in questions) {
        let question = questions[currentPosition].question
        questionContainer.innerHTML = question;
        let answers = questions[currentPosition].multipleAnswers;
        createOptions(answers);
        showPopup();
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
})

function createOptions(answers) {
    answersContainer.innerHTML = "";
    for (let answer in answers) {
        answersContainer.insertAdjacentHTML("beforeend", `<input id="fanswer" type="radio" name="answer" value="${answer}"><label for="fanswer">${answer}</label><br>`);
    }
}