"use strict";


let $base;
let $square;

let totalSquares;

let message = ['You can do it!', 'Almost there', 'Keep going', 'Just a little more', 'JUST DO IT!'];

let random;

$(document).ready(setup);

function setup() {

  $base = $(".base");

  $base.droppable({

    drop: onDrop
  });


  $square = $('.square');

  $square.draggable({
    revert: true
  });


  totalSquares = $(".square").length;


  // code to help me with random array found here - https://stackoverflow.com/questions/9960909/random-text-from-jquery-array
  random = Math.floor ( Math.random() * message.length );
  $('#messageDisplay').text(message[random])


}

function onDrop(event, ui) {

ui.draggable.remove();

totalSquares -= 1;

console.log(totalSquares);

if (totalSquares == 0){
      location.reload(true);


}
}
