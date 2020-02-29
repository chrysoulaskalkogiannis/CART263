"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
let profitScore = 0;
let traumaScore = 0;
let happinessScore = 0;


let playerName = prompt ("Please enter your name");

let voice = 'UK English Male';

let voiceParameters = {
  pitch: 0.1,
  rate: 0.9
}


$(document).ready(setup);

function setup() {
$('.messageDisplay').text(profitScore);
$('.messageDisplay').text(traumaScore);
$('.messageDisplay').text(happinessScore);

  console.log(playerName);

responsiveVoice.speak("Hello "+ playerName + ". I want to play a game. I want to make money, but I need your help.  I need you to approve of the content that will make the most profit for us.  Think you can manage better than the last person who tried to help me?  Alright then, let's begin",voice, voiceParameters)


};
