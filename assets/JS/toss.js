let dice = document.getElementById("dice");
const icon = document.querySelector('#dice i');
// we always hold the value of the current icon class so that we remove it when we roll the dice and add the new value. Initially it is fa-dice as in html
let currentDiceIcon = 'fa-dice';

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