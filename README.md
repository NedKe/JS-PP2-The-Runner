# The Runner

Developer: Neda Keshavarzi

![Mockup image](docs/game-features/mockup.png)

[Live webpage](https://nedke.github.io/JS-PP2-The-Runner/)

## Table of Content

1. [The game Objectives](#the-game-objectives)
    1. [User objectives](#user-objectives)
    2. [Website owner objectives](#website-owner-objectives)
2. [User Experience](#user-experience)
    1. [Target group](#target-group)
    2. [User Demands](#user-Demands)
    3. [User Stories](#user-stories)
    4. [Website Owner Stories](#website-owner-stories)
3. [Design](#design)
    1. [Design idea](#design-idea)
    2. [Structure](#structure)
    3. [Fonts](#fonts)
    4. [Sounds](#sounds)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Tools](#tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Device testing](#performing-tests-on-various-devices)
    7. [Browser compatibility](#browser-compatability)
    8. [Testing user stories](#testing-user-stories)
7. [Bugs](#Bugs)
8. [Deployment](#deployment)
    1. [EmailJS API](#emailjs-api)
9. [Credits](#credits)
10. [Acknowledgments](#acknowledgments)

## The game Objectives

The runner game is similar to the snake and ladder game that is based on reward and punishment. The distinction is that here there is a time limit and instead of snakes or ladders there are green and red squares and some questions to answer to reach the final. The user tries to reach the end square by tossing the dice and facing challenges on his/her way to the end. The challenges are either rewarding (green), punishing (red), or questions that he/she needs to answer quickly to keep up with the time limit.

### User objectives

-   Play an online board game with dice that is easy and intuitive
-   Find your luck by rolling the dice!
-   Answer some fact-based questions, test your general knowledge and learn from them
-   To be able to report any technical problem or bugs on the game

### Website owner objectives

-   To set up an online board game that works with tossing dice and giving some fact-based questions to the user to challenge their knowledge while playing the game. The goal is to engage the user in replaying the game and learn the answers to the questions.
-   The game should be intuitive and work on all devices

## User Experience

### Target group

-   Random online game players
-   Boardgame lovers
-   People who want to play a rewarding game that stimulates their curiosity

### User Demands

-   Intuitive navigation throughout the website
-   Good contrast and pleasant graphics that act as visual cues to find items in the right places
-   Functions working as expected and feedbacks to user appearing at the proper times and places
-   Multiple choice of screen sizes
-   Positive interaction with all the elements on the website
-   To communicate with the website owner
-   Accessibility

### User Stories

As a user, I want to,

(a) Be able to play a board game with a nice interface
(b) Be able to pick up the level of the game
(d) Test my knowledge by answering fact-based questions
(e) Want to challenge me by not being presented with the correct answer to the questions but prefer learning the answer myself
(f) Get feedback on my correct and incorrect answers and when I win or lose
(g) Be able to send feedback to the website owner and receive confirmation that my feedback is sent
(h) Easily navigate to different pages and access sicial media networks
(i) To have some auditory clues and alerts when actions happen in the game

### Website Owner Stories

As As the creator of the website I want users to,

(j) Give us feedback about any technical problems or recommend us with new ideas to improve the game
(k) Follow us on social media networks
(l) Learn from the asked questions by replaying the game, in this way, they can build up knowledge and play a fun game!

## Design

### Design idea

The website is designed based on the idea from the classic snake and ladder game. Here, the snakes and ladders are replaced with rewards-punishments in green-red blocks and question pop-ups that move the user back and forth. The user gets visual and auditory feedback when selects correct or incorrect answers.

### Structure

-   The homepage loads as the starting page and shows a welcome box that contains the introduction to the game. The following popups are attached to the homepage:

    -   pop up giving the option to pick up the game level
    -   pop up showing questions and answers
    -   congrats message and a sound popping up when the answer is correct
    -   OH NO! message and a sound popping up when the answer is incorrect
    -   You lost message and a sound popping up when the game time is over
    -   Well done message and a sound popping up when the user wins the game

-   The page contact us contains a form that allows the user to submit feedback to the website owner.
    -   A thank you popup shows up after submitting the feedback.

### Sounds

-   When the user starts the game, the following sounds play:

    -   Background music is played, when the game starts. The user can mute the music by clicking on the speaker at the top left of the game.
    -   A walk sound when dice rolls and the user starts running
    -   A sound alert when the user is in a question block
    -   A sound alert when the user submits a correct answer
    -   A sound alert when the user submits an incorrect answer
    -   A sound alert when the user is in a green block
    -   A sound alert when the user is in a red block
    -   A sound when the game time is over, and the user loses the game
    -   A sound when the user wins the game

### Fonts

Google fonts and Font Awsome were used to style text and for icons.

## Technologies Used

-   HTML
-   CSS
-   JavaScript

### Tools

-   Git
-   GitHub
-   Gitpod-Visual Studio Code
-   Font Awesome
-   Chrome DevTools console
-   Lighthouse
-   W3C Markup validation service
-   W3C Jigsaw CSS validation service
-   WAVE WebAIM web accessibility evaluation tool
-   EmailJS
-   TinyPNG

## Features

The website has 2 pages.

### Header

The header is skipped in this website to make more room for the game board. When the page loads, there is a welcome box that refers to the game name.

### Footer

The footer consists of a text logo that is the name of the game, the navigation menu, and social media links. The footer design satisfies the points mentioned in user (h) and website owner stories (j).

<details><summary>Footer</summary>
<img src="docs/footer.png">
</details>

### Homepage start view

The start page gives an introduction to the game and has a start game button. When the user clicks on the start game button, the introduction box disappears, and a new window pops up and game music is played. The user can see the sound mute option, stop-watch, dice icon, and the game board behind the start window.

<details><summary>Homepage start view</summary>
<img src="docs/game-features/homepage-start.png">
</details>

### Game view

-   Consisting of 8 featured views that address user stories f and i:
    -   The game level option popup window
    -   The game board populated with basic level challenges
    -   The game board populated with hard level challenges
    -   Question and answer popup when arriving at blocks with a question mark
    -   The congrats popup when the correct answer is submitted
    -   The OH No pop up when an incorrect answer is submitted
    -   The "You lost" popup when game time is over, and the user lost the game
    -   The "Well done" popup when user wins the game

<details><summary>Game level selection popup</summary>
<img src="docs/game-features/game-levels.png">
</details>
<details><summary>Game view basic level</summary>
<img src="docs/game-features/game-level-basic.png">
</details>
<details><summary>Game view hard level</summary>
<img src="docs/game-features/game-level-hard.png"">
</details>
<details><summary>Question and answer popup</summary>
<img src="docs/game-features/question-pupup.png">
</details>
<details><summary>The congrats popup</summary>
<img src="docs/game-features/congrats.png">
</details>
<details><summary>The oh no! popup</summary>
<img src="docs/game-features/ohno.png">
</details>

### Game loss popup

If the game time is over before reaching the final block, the user loses and sees a popup window and a sound presenting visual and auditory clues, respectively. There is a restart button in the popup that redirects the user to the level selection section.

<details><summary>Game loss</summary>
<img src="docs/game-features/game-loss.png">
</details>

### Game win popup

<details><summary>Game win</summary>
<img src="docs/game-features/game-win.png">
</details>

### Page Contact us

The contact form in the page contact us, allow the user to leave feedback to the website owner.

<details><summary>Contact Form</summary>
<img src="docs/game-features/contact-us.png">
</details>

### Form Confirmation popup

-   When the user submits the feedback, the thank you page pops up to confirm the submission and has a button to let the user go back to the game. This part satisfies the user story (g).

<details><summary>Form confirmation</summary>
<img src="docs/game-features/thank-you.png">
</details>

## Validation

### HTML and CSS Validation

The HTML and CSS code is validated by W3C HTML and CSS jigsaw validation service, respectively, and no error was detected on the final version of all the HTML pages and CSS stylesheet.

<details><summary>Full page</summary>
<img src="docs/validation/css-validation-full-page.jpg">
</details>
<details><summary>style.css</summary>
<img src="docs/validation/css-validation-custom-css.jpg">
</details>

### JavaScript Validation

JSHint Static Code Analysis Tool for JavaScript is used to validate the Javascript files. No significant issues found.

<details><summary>game.js</summary>
<img src="docs/validation/js-validation-game-settings.jpg">
</details>
<details><summary>utilities.js</summary>
<img src="docs/validation/js-validation-guessing-bee.jpg">
</details>
<details><summary>contact.js</summary>
<img src="docs/validation/js-validation-contact.jpg">
</details>
<details><summary>challenges.js</summary>
<img src="docs/validation/js-validation-contact.jpg">
</details>

### Accessibility

The accessibility for users with impairment is checked by WAVE evaluation tool (https://wave.webaim.org/), and the report showed no error for all pages.

<details><summary>Homepage</summary>
<img src="docs/validations/accessibility-index.png">
</details>
<details><summary>Contact us</summary>
<img src="docs/validations/accessibility-contact.png">
</details>

### Performance

The accessibility and performance is tested by the Lighthouse for mobile and desktop. No significant error was found.

-   Desktop

<details><summary>Homepage</summary>
<img src="docs/validations/desktop - index.png">
</details>
<details><summary>Contact</summary>
<img src="docs/validations/desktop - contact.png">
</details>

-   Mobile

<details><summary>Homepage</summary>
<img src="docs/validations/mobile - index.png">
</details>
<details><summary>Contact</summary>
<img src="docs/validations/mobile - contact.png">
</details>

### Responsive

The responsive design is tested on the following devices:

-   Samsung Galaxy S9
-   iPhone X
-   The website is tested using the built-in Google Chrome Developer Tools Device option for the provided devices.
-   Am I responsive page is used to take the mockup image at different screen sizes.

### Browser Compatability

The website was tested on the following browsers:

-   Google Chrome

### Testing user stories

## Bugs

| **Bug**                                                                                                                                                                | **Fix**                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| When the user wins and is not in the last block it does not move to the last block                                                                                     | Letting the move function to finish moving the user to the last block      |
| When the dice resulted in a question, the question box pops up immediately and does not wait for the user to first reach the question block and then show the question | The question box pops up shows up when the user reaches the question block |
| When the user reached a red block it goes forward instead of backward                                                                                                  | The sign of the value of that block is changed to negative                 |
| The user could submit the answers without selecting any answer                                                                                                         | Disabling the submit button until the user selects an answer               |
| The user could still answer the question even though the game time was over                                                                                            | Hide the question popup when the game is over                              |

## Deployment

The website was deployed using GitHub Pages by following these steps:

1. In the GitHub repository navigate to the Settings tab
2. On the left-hand menu select Pages
3. For the source select Branch: main
4. After the webpage refreshes automatically you will ses a ribbon on the top saying: "Your site is published at https://nedke.github.io/JS-PP2-The-Runner/

You can fork the repository by following these steps:

1. Go to the GitHub repository
2. Click on Fork button in the upper right hand corner

You can clone the repository by following these steps:

1. Go to the GitHub repository
2. Locate the Code button above the list of files and click it
3. Select if you prefer to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard (\$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
   7.Press Enter to create your local clone.

### EmailJS API

1. Create an account at emailjs.com
2. Add a new email service
3. Add a new email template
4. In the integration dashboard, write down the user-id
5. Set the EmailJS SDK in the head of the HTML file
6. Make a function in JavaScript that listens to the submit event and then initializes the SDK with the user id (emailjs.init('YOUR_USER_ID') and submits the form (emailjs.sendForm('contact_service', 'contact_form', this)

## Credits

### Media content

-   Images
-   Musics
-   Background music is Monkeys Spinning by Kevin MacLeod, taken from
    https://www.chosic.com/free-music/all/?keyword=Monkeys%20Spinning
-   The game sound popups are taken from https://freesound.org/
-   Social media and the runner icon
    -   The social media icons are from Font Awesome

### Coding material

-   The sound function is taken from W3schools https://www.w3schools.com/graphics/game_sound.asp
-   Email sending JavaScript API code was written with the help of the official EmailJS tutorial https://www.emailjs.com/docs/tutorial/creating-contact-form/

## Acknowledgments

I would like to appreciate the support and advice given by my mentor Mo Shami.
