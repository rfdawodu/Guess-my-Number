"use strict";
// PROJECT 1: GUESS MY NUMBER

// SELECTING AND MANIPULATING ELEMENT
// how to select an element from html in j.s we use..i.e how to establish our connection code between the user interface
console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "😎 Correct Number!";

document.querySelector(".number").textContent = "?";
document.querySelector(".score").textContent = 20;
// for input field, we use value
// document.querySelector(".guess").value = 23;

// HANDLING CLICK EVENTS i.e to make our applcation do something when we click on the check button. we us an EVENTLISTENER: it is some thing that happens on the page e.g, a mouse click, a mouse moving or key press and many other event.with an event listener,we can wait for a certain event to happen and then react to it ...in other to listen to an event, we need to first select when where we want the event to happen and then addEventListener ,then type in what we want the event to do. in this case , we want it to click as the first argument and afterwards tell the event listener what to do i.e theat is to specify what reaction we want the event to do.by this , we declare a function which will contain the code which should be executed whenever the click event happpens on the checkbutton
// IMPLEMENTING THE GAME LOGIC i.e to implement whta happens whwn the guess the correct and also implement what happens when the guess is too low or too high. so to start, we need to define that secrete number otherwise ,there will be nothing to compare the guess to. so we need to define the secrete number outside the handler function,otherwise,if dne inside that means on each click,we get a new secrete number which will make the game make no sence at all

// MANIPULATING CSS STYLES
// the css styles can also be manipulated like the background color and so on. we get the selector then .style +. whatever property we want to change = a string + the value we want to set it to.* whenever we are manipulating a style , we always need to specify a string

// defining the secreet number here
let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log("guess", typeof guess);
  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🤷‍♀️ No Number!";
    // when player wins
  } else if (guess === secreteNumber) {
    document.querySelector(".message").textContent = "😎 Correct Number!";
    document.querySelector(".number").textContent = secreteNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // when guess is too high
  } else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🤦‍♂️ too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector("body").style.backgroundColor = "#222";

      document.querySelector(".score").textContent = 0;
    }
    // document.querySelector(".message").textContent = "🤦‍♂️ too high!";
    // score--;
    // document.querySelector(".score").textContent = score;
    // when guess is too low
  } else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🙅‍♂️ too low";
      score--;
      document.querySelector(".score").textContent = score;

      //   when player lose
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector("body").style.backgroundColor = "#222";

      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "rgb(192, 192, 119)";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "🤔 Start guessing...";

  if (!secreteNumber) {
    document.querySelector(".again").textContent = "restore";
  } else if (score === 0) {
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "45rem";
  }
});

// correction
/* document.querySelector('.again').addEventListener('click', function(){
  score = 20
  secereteNumber = Maths.trunc(Math.random() * 20) + 1
document.querySelector('.message').textContent = 'start guessing ...'
document.querySelector('.score').textContent = score
document.querySelector('.score').textContent = ?
document.querySelector('.score').value = ''
document.querySelector(body).style.bacgroundColor = 
document.querySelector('.number').style.width = '15rem'


})*/
