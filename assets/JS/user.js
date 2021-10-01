let currentPosition = 0;
const user = document.querySelector('#game #user');
const blocks = document.querySelectorAll('#game > div');

for (let i in increases) {
    blocks[i].innerHTML = increases[i].value;
    if (increases[i].type === 'green') {
        blocks[i].style.backgroundColor = 'green';
    } else if (increases[i].type === 'red') {
        blocks[i].style.backgroundColor = 'red';
    }
}
const randomValue = 2;
currentPosition += randomValue; // new position 5
//blocks[currentPosition].appendChild(user);
if (randomValue === 2) {
    currentPosition += 5;
    blocks[currentPosition].appendChild(user);
}