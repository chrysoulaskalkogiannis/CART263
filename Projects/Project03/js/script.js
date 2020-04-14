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






$(document).ready(setup);

function setup() {

$('#intro').hide();




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
  responsiveVoice.speak("Hello " + playerName + ". My name is " + robotName + ". It's very nice to meet you.", robotVoice, {onend:introResponse} )

}




function introResponse(){

  var commands = {
    "What is it like being an AI": function() {
  console.log("no");
},

"Are you a human": function() {
console.log("yes");
},

"I don't want to be here": function() {
console.log("nose");
}
  };

  annyang.start({
    autoRestart: false,
    continuous: false
  });




annyang.addCommands(commands);
$('#intro').show();



}
