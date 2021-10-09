//Game sound function taken from the W3schools.
function sound(src, loop) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
        this.sound.loop = loop;
    }
    this.stop = function () {
        this.sound.pause();
    }
}
/* 
font-awesome classes are like fa-dice-one, fa-dice-two, etc
This is a helper function to convert number 1 to 'one' and 2 to 'two' etc
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