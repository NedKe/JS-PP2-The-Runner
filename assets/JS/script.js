const increases = {
    3: {
        value: 5,
        type: 'green'
    },
    11: {
        value: 3,
        type: 'red'
    },
    17: {
        value: 2,
        type: 'green'
    },
    24: {
        value: 2,
        type: 'green'
    },
    29: {
        value: 2,
        type: 'red'
    },
    32: {
        value: 5,
        type: 'green'
    },
    37: {
        value: 2,
        type: 'red'
    },

    45: {
        value: 5,
        type: 'green'
    },
    59: {
        value: 3,
        type: 'green'
    },
    61: {
        value: 2,
        type: 'green'
    },
    66: {
        value: 2,
        type: 'red'
    },
    73: {
        value: 5,
        type: 'red'
    },
    78: {
        value: 3,
        type: 'green'
    },
    80: {
        value: 2,
        type: 'red'
    },
    85: {
        value: 2,
        type: 'green'
    },
    92: {
        value: 2,
        type: 'green'
    },
    97: {
        value: 2,
        type: 'red'
    },
}

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
const randomValue = 2;
currentPosition += randomValue; // new position 5
//blocks[currentPosition].appendChild(user);
if (randomValue === 2) {
    currentPosition += 5;
    blocks[currentPosition].appendChild(user);
}