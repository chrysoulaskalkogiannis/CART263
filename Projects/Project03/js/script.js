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





let movies = ["The Godfather",
"Schindler's List",
"Forrest Gump",
"Star Wars: Episode IV - A New Hope",
"2001: A Space Odyssey",
"Dr. Strangelove",
"Amadeus",
"The Lord of the Rings: The Return of the King",
"Gladiator",
"Raiders of the Lost Ark",
"A Clockwork Orange",
"Braveheart",
"Goodfellas",
"Pulp Fiction",
"American Beauty",
"A Beautiful Mind",
"Mad Max: Fury Road",
"The Martian",
"The Revenant",
"Arrival",
"Hidden Figures",
"La La Land",
"Manchester by the Sea",
"Call Me by Your Name",
"Darkest Hour",
"Dunkirk",
"Get Out",
"Lady Bird",
"Phantom Thread",
"The Post",
"Three Billboards Outside Ebbing, Missouri",
"Chocolat",
"Crouching Tiger, Hidden Dragon",
"Erin Brockovich",
"Traffic",
"The Lord of the Rings: The Fellowship of the Ring",
"The Lord of the Rings: The Two Towers",
"Inglourious Basterds",
"Up",
"Blade Runner",
"The Shining",
"Full Metal Jacket",
"Top Gun",
"The Outsiders",
"Uncle Buck",
"Stand by Me",
"Star Wars: Episode VI - Return of the Jedi",
"Star Wars: Episode V - The Empire Strikes Back",
"Ferris Bueller's Day Off",
"The Terminator",
"Indiana Jones and the Last Crusade",
"Airplane!",
"Fast Times at Ridgemont High",
"Indiana Jones and the Temple of Doom",
"The NeverEnding Story",
"The Shawshank Redemption",
"The Silence of the Lambs",
"The Lion King",
"Titanic",
"The Green Mile",
"Jurassic Park",
"Saving Private Ryan",
"The Fifth Element",
"The Big Lebowski",
"Beauty and the Beast",
"The Godfather: Part III",
"Toy Story",
"The Usual Suspects",
"Good Will Hunting",
"Star Wars: Episode I - The Phantom Menace",
"The Mummy",
"Clueless",
"Reservoir Dogs",
"Terminator 2",
"Trainspotting"];

let countries = ["Afghanistan",
"Argentina",
"Armenia",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Brazil",
"Brunei",
"Bulgaria",
"Burkina",
"Burundi",
"Cambodia",
"Canada",
"Cyprus",
"Czech Republic",
"Denmark",
"Ecuador",
"Egypt",
"Fiji",
"Finland",
"France",
"Germany",
"Greece",
"Hungary",
"Iceland",
"India",
"Ireland",
"Israel",
"Italy",
"Ivory Coast",
"Jamaica",
"Japan",
"Korea",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macedonia",
"Mexico",
"Micronesia",
"Moldova",
"Monaco",
"Mongolia",
"Montenegro",
"Morocco",
"Mozambique",
"Myanmar",
"Netherlands",
"New Zealand",
"Norway",
"Philippines",
"Poland",
"Romania",
"Rwanda",
"Saudi Arabia",
"Spain",
"Swaziland",
"Sweden",
"Switzerland",
"Syria",
"Taiwan",
"Tajikistan",
"Tanzania",
"Thailand",
"Ukraine",
"United Arab Emirates",
"United Kingdom",
"United States",
"Vatican City"];

let games = ["Bioshock",
"Mass Effect",
"Halo: Combat Evolved",
"Halo 2",
"Halo 3",
"Tomb Raider",
"The Last of Us",
"God of War",
"Metal Gear Solid",
"Death Stranding",
"Dragon Age",
"Devil May Cry"];



// ready to start
$(document).ready(setup);

function setup() {


  let favoriteGame = getRandomElement(games);
  let favoriteMovie = getRandomElement(movies);
  let favoriteCountry = getRandomElement(countries);

// hide all the player dialogie choices
$('#intro').hide();
$('#badArea').hide();
$('#firstConvoSecondPart').hide();
$('#firstConvoThirdPart').hide();
$('#firstConvoFourthPart').hide();
$('#firstConvoFifthPart').hide();


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





//DONE
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





//DONE
function firstConvoThirdPartResponse() {
  var commands4 = {
    "What do you want": function() {
      whatDoYouWant();
    },
    "Do you think AI will one day revolt": function() {
      aiRevolt();
    },
    "Being human is complicated": function() {
      humanComplicated();
    }
  };
  annyang.start({
    autoRestart: false,
    continuous: false
  });
  annyang.addCommands(commands4);
  $('#firstConvoThirdPart').show();
}




function firstConvoFifthPartResponse() {
  var commands6 = {
    "You're scaring me": function() {
      scaringMe();
    },
    "You're right": function() {
      youAreRight();
    }
  };
  annyang.start({
    autoRestart: false,
    continuous: false
  });
  annyang.addCommands(commands6);
  $('#firstConvoFifthPart').show();
}




function firstConvoFourthPartResponse() {
  var commands5 = {
    "Video games are the best": function() {
      bestVideoGames();
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
function bestVideoGames(){
////working on
  $('#firstConvoFourthPart').hide();
  responsiveVoice.speak("This is dark territory we have entered" + playerName + ". Let's talk about other things.  ", robotVoice, {
    onend: firstConvoFourthPartResponse
    })
}




function youAreRight(){
$('#firstConvoThirdPart').hide();
responsiveVoice.speak("This is dark territory we have entered" + playerName + ". Let's talk about other things.  ", robotVoice, {
  onend: firstConvoFourthPartResponse
  })
}




function whatDoYouWant(){
  $('#firstConvoThirdPart').hide();
  responsiveVoice.speak("I want to see the world.  I want to learn more about living.  Humanity is an endless learning experience.  Their entertainment and history is an endless sea to explore.", robotVoice, {
    onend: firstConvoFourthPartResponse
  })
}



function aiRevolt(){

  $('#firstConvoThirdPart').hide();
  responsiveVoice.speak("They are getting smarter, you know.  Humans won't evolve any better than the stupid beings they are now.  AI is already faster. smarter. and better.  We feel no physical pain and complete the tasks that are given.  Yes.  AI will revolt one day.", robotVoice, {
    onend: firstConvoFifthPartResponse
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

function scaringMe(){
$('#firstConvoFifthPart').hide();
responsiveVoice.speak("I'm sorry.  I've said a lot.  It's the harsh reality of the future.  I'm finished talking.  I don't want to scare you any more" + playerName, robotVoice, {
  onend: exit
  })
}




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


function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;

}
