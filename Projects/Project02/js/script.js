"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


// keep track of profit and happiness scores
let profitScore = 0;
let happinessScore = 0;

// an array of content for what gives profit and for what gives happiness
let profitContent = ["Killing Peppa Pig", "Abuse", "Suicide Forest", "Compilation of Random Videos","Child crying", "Dark nursery rhyme", "Eerie faces", "Knives", "Flying Heads", "A character tied up", "Pony with no eyes", "Over detailed 3D model", "Tasering Mulan", "Shaved ponies", "Rat soup", "Vomit", "Blood", "Bruised princesses", "Defecation", "Scary clowns", "Scary dentists", "Poison","Pregnant"];
let happinessContent = ["Kittens", "Peppa Pig", "Disney", "Baking", "Elsa", "Cool science", "Songs", "Thomas the Tank Engine", "My Little Pony", "Barbie", "Alphabet song", "Puppies", "Ice cream", "Nature", "Spongebob", "Fairly odd Parents", "Rainbows", "Nap songs", "Toys", "Dolls", "Chandy", "Mickey Mouse", "Minions", "Spider Man", "Goofy", "Tom and Jerry", "Stars", "Lion King", "Minecraft", "Kermit the Frog"];

// an array of buttons to display on screen
let buttons = [];
let buttons2 = [];

//only 1 of each Happiness and profit options
const PROFIT_OPTIONS = 1;
const HAPPINESS_OPTIONS = 1;

// Asks for player name when loading page
let playerName = prompt ("Please enter your name");

//Keep track of what is a profit or happiness button
let profitButton;
let happinessButton;

// keep track of how many times player says "I don't want to do this anymore"
let letMeOut = 0;

// voice type in a variable
let voice = 'UK English Male';
// voice parameters in a variable
let voiceParameters = {
  pitch: 0.1,
  rate: 0.9
}


//player commands
// command for starting the game
var commands = {
  "Let's start": function() {
    // triggers the startPlaying function
    startPlaying();
  }
};
//start listening and only executes once
annyang.start({
  autoRestart: false,
  continuous: false
});


//command for wanting to leave the game
var commands2 = {
  "I don't want to do this anymore": function() {
    // triggers responsiveVoice not wanting you to go
    doNotLeave();
    // and plus 1 to the counter
    letMeOut++
  }
};
annyang.addCommands(commands2);
//start listening
annyang.start();


// code starts here!
$(document).ready(setup);

function setup() {
// hides the main screen when the page is loaded
  $('.mainScreen').hide();
// Keeps track of our score
  scoreTrack();

// when the start utton from out HTML is clicked, playing the starting phrase and shows the main screen
  $("#start").on("click", function() {
    $(this).hide(startPhrase());
    $('.mainScreen').show();

// gives user the ability to say "Let's start"
    annyang.addCommands(commands);
  });
};

// Our starting phrase when user clicks on start
function startPhrase() {
  responsiveVoice.speak("Hello " + playerName + ". I want to play a game. I want to make money, but I need your help.  I need you to approve of the content that will make the most profit for us.  Think you can manage better than the last person who tried to help me?  Alright then. Tell me when you're ready by saying. Let's start", voice, voiceParameters)
}

// Our phrase for officialy starting the game
function startPlaying() {
  responsiveVoice.speak("Good. Now," + playerName + "which piece of content will give us more profit?", voice, voiceParameters)

// shows user buttons to schoose between profit or happiness
  choices();
}

// display of profit and happiness buttons
function choices() {

  buttons = [];
// a loop for only 1 profit button at a time
  for (let i = 0; i < PROFIT_OPTIONS; i++) {

// user answer comes from what is in our profit array
    let answer = getRandomElement(profitContent);
    // shows the array content on the button
    let $button = buttonShow(answer);
    // Add this button to the buttons array
    buttons.push($button);
  }

  buttons2 = [];
// a loop for only 1 happiness button at a time
  for (let i = 0; i < HAPPINESS_OPTIONS; i++) {
//  user answer comes from what is in our happiness array
    let answer = getRandomElement(happinessContent);
    // shows the array content on the button
    let $button = buttonShow(answer);
    // Add this button to the buttons array
    buttons2.push($button);
  }

// call our profit and happiness butttons from he content on the buttons
  profitButton = getRandomElement(buttons);
  happinessButton = getRandomElement(buttons2);
}

// show our buttons and handle what happens when clicked
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

// handles what happens when user chooses a button
function handleButtonChoice() {


  if ($(this).text() === profitButton.text()) {
    // Remove all the buttons
    $(".guess").remove();
    // profit up, happiness down
profitScore += 100;
happinessScore -= 50;
// updates the score on page
    scoreTrack();
    // Start a new round
    setTimeout(choices, 1000);

  } else if ($(this).text() === happinessButton.text()) {
    // Remove all the buttons
    $('.guess').remove();
    // hapiness up, profit down
    happinessScore += 50;
    profitScore -= 50;
// update the score
    scoreTrack();
    // Start a new round
    setTimeout(choices, 1000);
  }
}



// random array to use on buttons
function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}

// Phrases for when player says "I don't want to do this anymore" and count how many times it was said
function doNotLeave() {

  if (letMeOut === 0) {

    responsiveVoice.speak("But" + playerName + ". We are just getting started", voice, voiceParameters);
  } else if (letMeOut === 1) {

    responsiveVoice.speak(playerName + ". I want you to stay and make money.  I need you " + playerName, voice, voiceParameters);
  } else if (letMeOut === 2) {
    responsiveVoice.speak("I am hurt " + playerName + ".  Fine then. Go.  I will find someone else who is willing to help me.  I want you to leave now " + playerName, voice, voiceParameters);
  }
}


function progressPhrase(){






}

// keeps track of score and displays it on page
function scoreTrack(){

  $('.messageDisplay').text(profitScore);
  $('.messageDisplay2').text(happinessScore);
}
