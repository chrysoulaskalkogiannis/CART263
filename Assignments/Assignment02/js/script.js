"use strict";

/*****************

Raving Redactionist
Pippin Barr

Assignment02 edit
Chrysoula Skalkogiannis 

You are redacting a document, but it keeps becoming unredacted!
Click the secret information to hide it, don't let all the
secrets become revealed!

******************/

// The chance a span will be revealed per update
const REVEAL_POSSIBILITY = 0.1;
// How often to update the spans (potentially revealing them)
const UPDATE_FREQUENCY = 500;

//our number of found secrets
let secretsFound = 0;

//our number of total secrets
let secretsTotal;

// A place to store the jQuery selection of all spans
let $spans;

// A place to store the selection of secrets
let $secrets;



// When the document is loaded we call the setup function
$(document).ready(setup);

// setup()
//
// Sets the click handler and starts the time loop
function setup() {
  // Save the selection of all spans (since we do stuff to them multiple times)
  $spans = $('span');
  // Set a click handler on the spans (so we know when they're clicked)
  $spans.on('click', spanClicked);
  // Set an interval of 500 milliseconds to update the state of the page
  setInterval(update, UPDATE_FREQUENCY);

//total number of secrets is calculated by the secrets we have in our HTML
 secretsTotal = $(".secret").length;
 console.log(secretsTotal);


//assign .secret as our variable
$secrets = $('.secret');

//a secret is found when our mouse hovers over a secret in our text
$secrets.on('mouseover', secretFound);

//display the UI for secrets found at the botton of the page
$('#scoreDisplay').text(secretsFound + " OF " + secretsTotal + " SECRETS FOUND");

};

// spanClicked()
//
// When a span is clicked we remove its revealed class and add the redacted class
// thus blacking it out
function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

//When a secret is clicked it Highlights yellow and 1 is added to our total secrets found
function secretFound() {

  $(this).addClass('found');
  $(this).off('mouseover');
  secretsFound += 1;
  console.log(secretsFound);

  //our UI updates based on the number of secrets found
  $('#scoreDisplay').text(secretsFound + " OF " + secretsTotal + " SECRETS FOUND");
}


// update()
//
// Update is called every 500 milliseconds and it updates all the spans on the page
// using jQuery's each() function which calls the specified function on _each_ of the
// elements in the selection
function update() {
  $spans.each(updateSpan);
}

// updateSpan()
//
// With random chance it unblanks the current span by removing the
// redacted class and adding the revealed class. Because this function is called
// by each(), "this" refers to the current element that each has selected.
function updateSpan() {
  let r = Math.random();
  if (r < REVEAL_POSSIBILITY) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}
