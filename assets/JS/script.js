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
let dice = document.getElementById("dice");
const icon = document.querySelector('#dice i');

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

function toss() {
    return 1 + Math.floor(Math.random() * 6);
}
/* 
font-awesome classes are like fa-dice-one, fa-dice-two
This is a helper function to convert 1 to one and 2 to two etc
*/
function convertDigitToCharacter(digit) {
    switch (digit) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
    }
}
// we always hold the value of the current icon class so that we remove it when we roll the dice and add the new value. Initially it is fa-dice as in html
let currentDiceIcon = 'fa-dice';

// event listener to handle the click
dice.addEventListener('click', function () {
    const randomValue = toss();
    console.log(randomValue)
    // remove the current icon's dice class    
    icon.classList.remove(currentDiceIcon);
    // update the current dice icon with the new value based on toss and convert it to the fa dice class respective to the number
    currentDiceIcon = `fa-dice-${convertDigitToCharacter(randomValue)}`;

    // add the new dice class to the icon
    icon.classList.add(currentDiceIcon);
})