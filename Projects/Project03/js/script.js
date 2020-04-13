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




  $("#maria").on("click", function() {
     $(this).data('clicked', true);
    $('#maria').hide();
    $('#roy').hide();
    console.log('maria');

    if($('#maria').data('clicked')) {
        robotVoice = 'UK English Female';
        startPhrase();
    }
  });


  $("#roy").on("click", function() {
     $(this).data('clicked', true);
    $('#roy').hide();
    $('#maria').hide();
    console.log('roy');


    if($('#roy').data('clicked')) {
        robotVoice = 'UK English Male';
        startPhrase();
        }

  });


};


function startPhrase() {
  responsiveVoice.speak("Hello " + playerName + "hello", robotVoice)
}
