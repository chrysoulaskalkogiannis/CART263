"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

let score = 0;


let animals =  [
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

  let correctAnimal;
  let guess;
  let answers = [];
  const NUM_OPTIONS = 4;


// define the annyang command
if(annyang) {

var commands = {
  'say it again': function(){ sayBackwards(correctAnimal);}
};

//add our command sto annyang
annyang.addCommands(commands);

//start listening
annyang.start();



var commands2 = {
  'I give up': function(){giveUp();}
};

//add our command sto annyang
annyang.addCommands(commands2);

//start listening
annyang.start();


}



$(document).ready(setup);

function setup() {
newRound();

}


function addButton(label){


let $div = $('<div></div>');
$div.addClass('guess');
$div.text(label);
$div.button();
$div.appendTo('body');
$div.on('click', handleGuess);


}

function newRound(){


$(".guess").remove();
answers = [];



for (let i = 0; i < NUM_OPTIONS; i++) {
  let ans = animals[Math.floor(Math.random()*animals.length)];
addButton(ans);
answers.push(ans);

}

correctAnimal = answers[Math.floor(Math.random()*answers.length)];
sayBackwards(correctAnimal);

}

function handleGuess(){

if ($(this).text()=== correctAnimal){

setTimeout(newRound,500);
}else{
$('.guess').effect('shake');

}





}

function sayBackwards(text){

let backwardsText = text.split('').reverse().join('');
let options = {
pitch:Math.random(0,1),
rate:Math.random(0,1)
};

responsiveVoice.speak(backwardsText,"Greek Female", options);


}

function giveUp(){

//$(correctAnimal).toggle('.answer');
//setTimeout(2000);
newRound()



}
