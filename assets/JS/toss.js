const icon = document.querySelector('#dice i');
/* Storing the value of the current icon class , fa-dice, so that we remove it when 
we roll the dice and add the new value.*/
let currentDiceIcon = 'fa-dice';

function toss() {
    return 1 + Math.floor(Math.random() * 6);
}
// Event listener on the dice icon to handle the click
dice.addEventListener('click', function () {
    const randomValue = toss();
    console.log(randomValue)
    // remove the current icon's dice class    
    icon.classList.remove(currentDiceIcon);
    // update the current dice icon with the new value based on toss and convert it to the fa dice class respective to the number
    currentDiceIcon = `fa-dice-${convertDigitToCharacter(randomValue)}`;

    // add the new dice class to the icon
    icon.classList.add(currentDiceIcon);
    move(randomValue);
})