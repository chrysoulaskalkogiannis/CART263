"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
let playerName = prompt("Please enter your name");

let robotVoice;





$(document).ready(setup);

function setup() {

console.log(playerName);

};


function startPhrase() {
  responsiveVoice.speak("Hello " + playerName)
}
