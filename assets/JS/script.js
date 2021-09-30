let currentPosition = 0;
const user = document.querySelector('#game #user');
const blocks = document.querySelectorAll('#game > div');
// this function creates the toss numbers //

let dice = document.getElementById("dice");

function toss() {
    dice.innerHTML = Math.floor(Math.random() * 6) + 1;

}
for (let i in increases) {
    blocks[i].innerHTML = increases[i].value;
    if (increases[i].type === 'green') {
        blocks[i].style.backgroundColor = 'green';
    } else if (increases[i].type === 'red') {
        blocks[i].style.backgroundColor = 'red';
    }
}