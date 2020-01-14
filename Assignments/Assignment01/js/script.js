"use strict";





window.onload = setup;



function setup() {
  console.log("PIPPIN IS AWESOME!!");

  for (let i = 0; i < 1000; i++) {
    let pixel = document.createElement('div');
    pixel.setAttribute('class','pixel');
    document.body.appendChild(pixel);

    pixel.addEventListener('mouseover', paint);
}
}

function paint(e){
let pixel = e.target;
pixel.style.backgroundColor = "blue";
setTimeout(resetPixel,1000, pixel);

}

function resetPixel(pixel){

pixel.style.backgroundColor = "black";

}
