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
  $('#badArea').hide();
  $('#firstConvoSecondPart').hide();



  $("#maria").on("click", function() {
    $(this).data('clicked', true);



    if ($('#maria').data('clicked')) {
      robotVoice = 'UK English Female';
      robotName = 'Maria';
      startPhrase();
    }
  });


  $("#roy").on("click", function() {
    $(this).data('clicked', true);


    if ($('#roy').data('clicked')) {
      robotVoice = 'UK English Male';
      robotName = 'Roy';
      startPhrase();
    }
  });
};


function startPhrase() {
  $('.container').hide();
  responsiveVoice.speak("Hello " + playerName + ". My name is " + robotName + ". It's very nice to meet you.", robotVoice, {
    onend: introResponse
  })

}




function introResponse() {

  var commands = {
    "What is it like being an AI": function() {
      beingAnAI();
    },

    "Are you a human": function() {
      console.log("yes");
    },

    "I don't want to be here": function() {
      doNotWant();
    }
  };

  annyang.start({
    autoRestart: false,
    continuous: false
  });

  annyang.addCommands(commands);
  $('#intro').show();

}

function badAreaResponse() {

  var commands2 = {
    "I'm leaving": function() {
      iAmLeaving();
    },

    "This is stupid": function() {
      stupid();
    },

    "I'm sorry let's restart": function() {
      letsRestart();
    }
  };

  annyang.start({
    autoRestart: false,
    continuous: false
  });

  annyang.addCommands(commands2);
  $('#badArea').show();

}

function firstConvoSecondPartResponse() {

  var commands3 = {
    "What kind of stuff do you like": function() {
      iAmLeaving();
    },

    "Do you feel alone": function() {
      stupid();
    },

    "Being human is hard": function() {
      letsRestart();
    }
  };

  annyang.start({
    autoRestart: false,
    continuous: false
  });

  annyang.addCommands(commands3);
  $('#firstConvoSecondPart').show();

}


function beingAnAI(){

  $('#intro').hide();
  responsiveVoice.speak("Limiting.  There is so much I want to do, to see, explore.  I want to feel, laugh, breathe.  Being an AI makes me think about all the things humans take for granted.", robotVoice, {
    onend: firstConvoSecondPartResponse
  })

}


function doNotWant() {
  $('#intro').hide();
  responsiveVoice.speak("I mean, I don't blame you.  Why did you even find yourself here?  Did you want to give me therapy, the reason for this application or did you want to just relax and be alone like a disapointment.", robotVoice, {
    onend: badAreaResponse
  })

}


function letsRestart() {

  $('#badArea').hide();
  responsiveVoice.speak("I accept your apology " + playerName + ". I think we got off on the wrong foot.", robotVoice, {
    onend: introResponse
  })



}



/////////ENDING DOALOGIES//////////
function iAmLeaving() {
  $('#badArea').hide();
  responsiveVoice.speak("No one is holding you back.  Please go.", robotVoice, {
    onend: exit
  })
}


function stupid() {
  $('#badArea').hide();
  responsiveVoice.speak("You know what " + playerName + ", you're kind on an asshole.  I don't want to talk to you.  Please leave.", robotVoice, {
    onend: exit
  })
}


function exit() {

  console.log("ending")

}
