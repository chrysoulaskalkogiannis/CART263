"use strict";



// create our main objects
let $base;
let $square;
//count how many squares are in the area
let totalSquares;
//an array of messages every time the page loads
let message = ['You can do it!', 'Almost there', 'Keep going', 'Just a little more', 'JUST DO IT!', 'Remind you of someone?'];
// a random variable for randomizing our messages
let random;



$(document).ready(setup);
function setup() {

  //let's have our base variable be the base class from our css
  $base = $(".base");
  //Make it droppable
  $base.droppable({
    //When something is dropped in it, the onDrop function is activated
    drop: onDrop
  });

  //let's have our square variable be the square class from our css
  $square = $('.square');

  //We are making it draggable and if it does not drop on the base it goes back in it's original place
  $square.draggable({
    revert: true
  });

  //Let's have our totalSquares equal to the amount of squares in the page
  totalSquares = $(".square").length;

  //Let's have an array of messages display a message every time the page loads
  // code to help me with random array found here - https://stackoverflow.com/questions/9960909/random-text-from-jquery-array
  random = Math.floor(Math.random() * message.length);
  $('#messageDisplay').text(message[random])
}


//Our function for when a square drops on the base
function onDrop(event, ui) {

  //it removes the draggable from the page
  ui.draggable.remove();

  //On draggable being removed means that there is one less square and the total in the page is minused by 1
  totalSquares -= 1;

  //output the amount on the console to see that it is working
  console.log(totalSquares);

  // if there are no more squares the page reloads and brings everything back
  //A new message array also shows
  if (totalSquares == 0) {
    location.reload(true);


  }
}
