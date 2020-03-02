"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

let gameState = false;



let profitScore = 0;
let traumaScore = 0;
let happinessScore = 0;






let profitButton;
let happinessButton;
let traumaButton;


let playerName =  "frank";     //prompt ("Please enter your name");

let voice = 'UK English Male';

let voiceParameters = {
  pitch: 0.1,
  rate: 0.9
}








var commands = {
    "Let's start": function() {
    myFunction()  ;
    }
  };
  annyang.addCommands(commands);
  //start listening
  annyang.start();






$(document).ready(setup);

function setup() {

$('#mainScreen').hide();


$('.messageDisplay').text(profitScore);
$('.messageDisplay').text(traumaScore);
$('.messageDisplay').text(happinessScore);

$("#start").on("click", function(){
$(this).hide(begin());
$('#mainScreen').show();

});


};

function begin(){


  responsiveVoice.speak("Hello "+ playerName + ". I want to play a game. I want to make money, but I need your help.  I need you to approve of the content that will make the most profit for us.  Think you can manage better than the last person who tried to help me?  Alright then. Tell me when you're ready by saying. Let's start",voice, voiceParameters)

}

function myFunction(){

console.log("working");

}
