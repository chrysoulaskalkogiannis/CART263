"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

// player writes their name and are called that name in the program
let playerName = prompt("Please enter your name");

// the name of the robot and it's voice depending on which one you choose.
let robotVoice;
let robotName;


// ready to start
$(document).ready(setup);

function setup() {

// hide all the player dialogie choices
  $('#intro').hide();
  $('#badArea').hide();
  $('#firstConvoSecondPart').hide();
  $('#firstConvoThirdPart').hide();
  $('#firstConvoFourthPart').hide();


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



/***************

START OF PLAYER DIALOGUES

***************/
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





// triggers the mean dialogue options
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
      whatDoYouLike();
    },
    "Do you feel alone": function() {
      beingAlone();
    },
    "Being human is hard": function() {
      humanIsHard();
    }
  };
  annyang.start({
    autoRestart: false,
    continuous: false
  });
  annyang.addCommands(commands3);
  $('#firstConvoSecondPart').show();
}






function firstConvoThirdPartResponse() {
  var commands4 = {
    "What do you want": function() {
      whatDoYouWant();
    },
    "Do you think AI will one day revolt": function() {
      aiRevolt();
    },
    "Being human is complicated": function() {
      console.log('human');
    }
  };
  annyang.start({
    autoRestart: false,
    continuous: false
  });
  annyang.addCommands(commands4);
  $('#firstConvoThirdPart').show();
}



function firstConvoFourthPartResponse() {
  var commands5 = {
    "Video games are the best": function() {
      console.log('want');
    },
    "Where in the world do you want to go": function() {
      console.log('revolt');
    },
    "What is your favorite movie": function() {
      console.log('human');
    }
  };
  annyang.start({
    autoRestart: false,
    continuous: false
  });
  annyang.addCommands(commands5);
  $('#firstConvoFourthPart').show();
}









/***********************

ROBOT RESPONSES

************************/
function whatDoYouWant(){
  $('#firstConvoThirdPart').hide();
  responsiveVoice.speak("I want to see the world.  I want to learn more about living.  Humanity is an endless learning experience.  Their entertainment and history is an endless sea to explore.", robotVoice, {
    onend: firstConvoFourthPartResponse
  })
}



function aiRevolt(){

  $('#firstConvoThirdPart').hide();
  responsiveVoice.speak("They are getting smarter, you know.  Humans won't evolve any better than the stupid beings they are now.  AI is already faster. smarter. and better.  We feel no physical pain and complete the tasks that are given.  Yes.  AI will revolt one day.", robotVoice, {
    onend:
  })
}


function humanComplicated(){
  $('#firstConvoThirdPart').hide();
  responsiveVoice.speak("Maybe having the freedom of thought is just complicated.", robotVoice, {
    onend: firstConvoFourthPartResponse
  })
}







function whatDoYouLike(){
  $('#firstConvoSecondPart').hide();
  responsiveVoice.speak("I find human entertainment facinating.  There are so many new worlds to explore.  I also think nature is beautiful.  How I long to understand feeling.  I want to experience the breeze of the wind on my face.  I enjoy thinking of all these possibilities humans have", robotVoice, {
    onend: firstConvoFourthPartResponse
  })
}

function humanIsHard(){
  $('#firstConvoSecondPart').hide();
  responsiveVoice.speak("Why is that" + playerName + "? From what I see. Humans think more about themselves than the beauty around them.  They always look at the bad.  Never the good.", robotVoice, {
    onend: firstConvoThirdPartResponse
  })

}





function beingAlone(){
  $('#firstConvoSecondPart').hide();
  responsiveVoice.speak("I don't know. I can't really feel anything.", robotVoice, {
    onend: firstConvoThirdPartResponse
  })

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
