"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/



let profitScore = 0;

let happinessScore = 0;




let profitContent = ["Killing Peppa Pig", "Abuse", "Suicide Forest", "Compilation of Random Videos","Child crying", "Dark nursery rhyme" ];
let happinessContent = ["Kittens", "Peppa Pig", "Disney", "Baking", "Elsa", "Cool science",];




let buttons = [];
let buttons2 = [];

const PROFIT_OPTIONS = 1;
const HAPPINESS_OPTIONS = 1;

let playerName = prompt ("Please enter your name");

let profitButton;
let happinessButton;



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

//start listening
annyang.start({
  autoRestart: false,
  continuous: false
});




var commands2 = {
  "I don't want to do this anymore": function() {
    doNotLeave();
    letMeOut++
  }
};
annyang.addCommands(commands2);
//start listening
annyang.start();



$(document).ready(setup);

function setup() {

  $('.mainScreen').hide();

scoreTrack();


  $("#start").on("click", function() {
    $(this).hide(startPhrase());
    $('.mainScreen').show();

    annyang.addCommands(commands);
  });


};

function startPhrase() {


  responsiveVoice.speak("Hello " + playerName + ". I want to play a game. I want to make money, but I need your help.  I need you to approve of the content that will make the most profit for us.  Think you can manage better than the last person who tried to help me?  Alright then. Tell me when you're ready by saying. Let's start", voice, voiceParameters)

}

function startPlaying() {

  responsiveVoice.speak("Good. Now," + playerName + "which piece of content will give us more profit?", voice, voiceParameters)

  choices();

}

function choices() {

  buttons = [];

  for (let i = 0; i < PROFIT_OPTIONS; i++) {

    let answer = getRandomElement(profitContent);
    let $button = buttonShow(answer);
    // Add this button to the buttons array
    buttons.push($button);
  }

  buttons2 = [];

  for (let i = 0; i < HAPPINESS_OPTIONS; i++) {

    let answer = getRandomElement(happinessContent);
    let $button = buttonShow(answer);
    // Add this button to the buttons array
    buttons2.push($button);
  }

  profitButton = getRandomElement(buttons);
  happinessButton = getRandomElement(buttons2);


}



function buttonShow(label) {

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





function handleButtonChoice() {

  if ($(this).text() === profitButton.text()) {
    // Remove all the buttons
    $(".guess").remove();
profitScore += 100;
happinessScore -= 50;
    scoreTrack();
    // Start a new round
    setTimeout(choices, 1000);

  } else if ($(this).text() === happinessButton.text()) {
    // Remove all the buttons
    $('.guess').remove();
    happinessScore += 100;
    profitScore -= 50;
    scoreTrack();
    // Start a new round
    setTimeout(choices, 1000);

  }
}




function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;

}

function doNotLeave() {

  if (letMeOut === 0) {

    responsiveVoice.speak("But" + playerName + ". We are just getting started", voice, voiceParameters);
  } else if (letMeOut === 1) {

    responsiveVoice.speak(playerName + ". I want you to stay and make money.  I need you " + playerName, voice, voiceParameters);
  } else if (letMeOut === 2) {
    responsiveVoice.speak("I am hurt " + playerName + ".  Fine then. Go.  I will find someone else who is willing to help me.  I want you to leave now " + playerName, voice, voiceParameters);

  }


}

function scoreTrack(){

  $('.messageDisplay').text(profitScore);
  $('.messageDisplay2').text(happinessScore);


}
