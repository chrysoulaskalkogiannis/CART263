"use strict";


let $base;
let $square;

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

}

function onDrop(event, ui) {

ui.draggable.remove();

//  ({revert:false});


}
