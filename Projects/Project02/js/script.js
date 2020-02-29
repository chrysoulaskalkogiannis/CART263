"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
let playerName = prompt ("Please enter your name");




$(document).ready(setup);

function setup() {

  console.log(playerName);

responsiveVoice.speak("Hello "+ playerName + ". I want to play a game", "UK English Male",
{pitch: 0.1,
rate: 1});


}
