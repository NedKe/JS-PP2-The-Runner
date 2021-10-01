let currentPosition = 0;
const user = document.querySelector('#game #user');
const blocks = document.querySelectorAll('#game > div');

function move(randomNumber) {
    currentPosition += randomNumber; //99
    if (currentPosition in increases) {
        currentPosition += increases[currentPosition].value
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