"use strict";



// create our main objects
let $memeGuy;
let $memes;
//count how many squares are in the area
let totalMemes;
//an array of messages every time the page loads
let message = ['You can do it!', 'Almost there', 'Keep going',"It's just the same memes", 'Just a little more', 'JUST DO IT!', 'Remind you of someone?', 'Fred wants more memes', 'He seems to like the same memes', 'Memes will always make us happy'];
// a random variable for randomizing our messages
let random;

// sound for page start
let startSFX = new Audio("assets/sounds/start.wav");

//sound for dropping a meme on fred
let dropSound = new Audio("assets/sounds/drop.wav");

$(document).ready(setup);
function setup() {


  //play a starting sound when page reloads
  startSFX.play();

  //let's have our base variable be the fred class from our css
  $memeGuy = $(".fred");
  //Make it droppable
  $memeGuy.droppable({
    //When something is dropped in it, the onDrop function is activated
    drop: onDrop
  });

  //let's have our memes variable be the memes class from our css
  $memes = $('.memes');

  //We are making it draggable and if it does not drop on Fred it goes back in it's original place
  $memes.draggable({
    revert: true
  });

  //Let's have our totalmemes equal to the amount of memes in the page
  totalMemes = $(".memes").length;

  //Let's have an array of messages display a message every time the page loads
  // code to help me with random array found here - https://stackoverflow.com/questions/9960909/random-text-from-jquery-array
  random = Math.floor(Math.random() * message.length);
  $('#messageDisplay').text(message[random])

}


//Our function for when a meme drops on Fred
function onDrop(event, ui) {

  //it removes the draggable from the page
  ui.draggable.remove();

  //play sound on drop
  dropSound.play();

  //On draggable being removed means that there is one less meme and the total in the page is minused by 1
  totalMemes -= 1;

  //output the amount on the console to see that it is working
  console.log(totalMemes);

  // if there are no more memes the page reloads and brings everything back
  //A new message array also shows
  if (totalMemes == 0) {
    location.reload(true);


  }
}
