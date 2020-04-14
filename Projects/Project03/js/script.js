"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
let playerName = prompt("Please enter your name");

let robotVoice;
let robotName;


var commands = {
  "Do you like being an AI": function() {
console.log("no");
}
};

annyang.start({
  autoRestart: false,
  continuous: false
});



$(document).ready(setup);

function setup() {

$('#introResponse').hide();




  $("#maria").on("click", function() {
     $(this).data('clicked', true);



    if($('#maria').data('clicked')) {
        robotVoice = 'UK English Female';
        robotName = 'Maria';
        startPhrase();
    }
  });


  $("#roy").on("click", function() {
     $(this).data('clicked', true);


    if($('#roy').data('clicked')) {
        robotVoice = 'UK English Male';
        robotName = 'Roy';
        startPhrase();
        }
  });
};


function startPhrase() {
  $('.container').hide();
  responsiveVoice.speak("Hello " + playerName + ". My name is " + robotName + ". It's very nice to meet you.", robotVoice, introResponse())

}




function introResponse(){

$('#introResponse').show();
annyang.addCommands(commands);


}
