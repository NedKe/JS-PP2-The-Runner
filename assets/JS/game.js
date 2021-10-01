let currentPosition = 0;
const user = document.querySelector('#game #user');
const blocks = document.querySelectorAll('#game > div');

// for (let i in increases) {
//     blocks[i].innerHTML = increases[i].value;
//     if (increases[i].type === 'green') {
//         blocks[i].style.backgroundColor = 'green';
//     } else if (increases[i].type === 'red') {
//         blocks[i].style.backgroundColor = 'red';
//     }
// }

// if (randomValue === 2) {
//     currentPosition += 5;
//     blocks[currentPosition].appendChild(user);
// }
function move(randomNumber) {
    currentPosition += randomNumber; //99
    if (currentPosition >= 99) {
        currentPosition = 99;
        win();
    }
    blocks[currentPosition].appendChild(user);

}

function win() {
    console.log('win')
}