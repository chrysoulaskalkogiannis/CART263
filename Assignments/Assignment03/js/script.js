"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
//set our score to 0
let score = 0;

// our animals array
let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];

//store our correct animal
let correctAnimal;

//store our guess
let guess;

//store the answers to choose from
let answers = [];

//ammount of answers on display
const NUM_OPTIONS = 4;


// define the annyang command
if (annyang) {

  var commands = {
    'say it again': function() {
      sayBackwards(correctAnimal);
    }
  };
  //add our command sto annyang
  annyang.addCommands(commands);
  //start listening
  annyang.start();



  var commands2 = {
    'I give up': function() {
      giveUp();
    }
  };
  //add our command sto annyang
  annyang.addCommands(commands2);
  //start listening
  annyang.start();


// is user says 'I think it is *sayGuess' the right answer will start a new round and give a point
  var commands3 = {
    'I think it is *sayGuess': function(sayGuess) {
      if (sayGuess === correctAnimal) {
        $(".guess").remove();
        setTimeout(newRound, 100);
        score++;
        scoreTrack();
      }
    }


  };
  //add our command sto annyang
  annyang.addCommands(commands3);
  //start listening
  annyang.start();
}


$(document).ready(setup);

function setup() {

  // start a new round
  newRound();

  // keep track of the score
  scoreTrack();

}

//show our buttons of animals to choose from
function addButton(label) {

  let $div = $('<div></div>');
  $div.addClass('guess');
  $div.text(label);
  $div.button();
  $div.appendTo('body');
  $div.on('click', handleGuess);


}

// start a new round
function newRound() {

//removed the curent buttons on screen
  $(".guess").remove();
  answers = [];

//adds 4 random new buttons to choose from
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let ans = animals[Math.floor(Math.random() * animals.length)];
    addButton(ans);
    answers.push(ans);

  }
// chooses a correct animal and calls for the name to be said backwards
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];
  sayBackwards(correctAnimal);

}

// actions for when player clicks on a button
function handleGuess() {

// correct animal clicked on will give a point and start a new round
// wrong answer will put score to 0 and shake buttons
  if ($(this).text() === correctAnimal) {

    score++;
    scoreTrack();
    setTimeout(newRound, 500);
  } else {
    $('.guess').effect('shake');
    score = 0;
    scoreTrack();
  }

}

//says the correct answer backwards
function sayBackwards(text) {

  let backwardsText = text.split('').reverse().join('');
  let options = {
    pitch: Math.random(0, 1),
    rate: Math.random(0, 1)
  };

//have an english female say the correct answer backwards
  responsiveVoice.speak(backwardsText, "UK English Female", options);


}

// frunctions for when player says 'I give up'
function giveUp() {
  score = 0;
  scoreTrack();
  newRound()
}

// keeps track of the score when a change happens
function scoreTrack() {
  $('#playerScore').text(score);
}
