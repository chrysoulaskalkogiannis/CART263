"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

let gameState = false;



let profitScore = 0;

let happinessScore = 0;




let profitContent = ["Dieing Peppa Pig", "Abuse", "Suicide Forest"];
let happinessContent = ["Kittens", "Peppa Pig", ];

let buttons = [];

const PROFIT_OPTIONS = 1;
const HAPPINESS_OPTIONS = 2;

let playerName =  "frank";     //prompt ("Please enter your name");


let letMeOut = 0;



let voice = 'UK English Male';

let voiceParameters = {
  pitch: 0.1,
  rate: 0.9
}








var commands = {
    "Let's start": function() {
    startPlaying();
    }
  };
  annyang.addCommands(commands);
  //start listening
  annyang.start();



/*
  var commands2 = {
      "I don't want to do this anymore": function() {

      choices()  ;
      }
    };
    annyang.addCommands(commands);
    //start listening
    annyang.start();
*/


$(document).ready(setup);

function setup() {

$('#mainScreen').hide();


$('.messageDisplay').text(profitScore);
$('.messageDisplay').text(happinessScore);

$("#start").on("click", function(){
$(this).hide(startPhrase());
$('#mainScreen').show();

});


};

function startPhrase(){


  responsiveVoice.speak("Hello "+ playerName + ". I want to play a game. I want to make money, but I need your help.  I need you to approve of the content that will make the most profit for us.  Think you can manage better than the last person who tried to help me?  Alright then. Tell me when you're ready by saying. Let's start",voice, voiceParameters)

}

function startPlaying(){

responsiveVoice.speak("Good. Now," + playerName + "which piece of content will give us more profit?", voice, voiceParameters)

choices();

}

function choices(){


buttons = [];

for (let i = 0; i < PROFIT_OPTIONS; i++) {

let answer = getRandomElement(happinessContent);
let $button = buttonShow(answer);
   // Add this button to the buttons array
   buttons.push($button);
}


}



function buttonShow(label){



  let $button = $('<div></div>');
    // Give it the guess class
    $button.addClass("guess");
    // Set the text in the div to our label
    $button.text(label);
    // Turn the div into a button using jQuery UI's .button() method
    $button.button();
    // Listen for a click on the button which means the user has guessed
    $button.on('click', handleButtonChoice);
    // Finally, add the button to the page so we can see it
    $('body').append($button);
    // Return the button
    return $button;

}





function handleButtonChoice(){


}


function getRandomElement(){

  function getRandomElement(array) {
    let element = array[Math.floor(Math.random() * array.length)];
    return element;

}

}
