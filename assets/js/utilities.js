/**
 * Sound function to create an audio element that can be played, stopped and replayed
 * this code is taken from https://www.w3schools.com/graphics/game_sound.asp and modified for
 * this games purposes
 * @param {string} src
 * @param {boolean} loop
 */
function sound(src, loop) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
        this.sound.loop = loop;
    };
    this.stop = function() {
        this.sound.pause();
    };
}

/**
 * Helper function to convert a digit number to respective word character
 * @param {number} digit
 * @returns {string} the word equivalent to the digit from parameter
 */
function convertDigitToCharacter(digit) {
    switch (digit) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
    }
}
