"use strict";


let $base;
let $square;

let totalSquares;

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

}

function onDrop(event, ui) {

ui.draggable.remove();

totalSquares -= 1;

console.log(totalSquares);


if (totalSquares == 0){
      location.reload(true);
}
}
