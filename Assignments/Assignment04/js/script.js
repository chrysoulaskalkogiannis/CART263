/*

Condiments
Pippin Barr

Chooses random words from local JSON data to fill out a sentence
describing a condiment based on cats and rooms... weird.

Uses:

Corpora
https://github.com/dariusk/corpora

*/

$(document).ready(function() {

  // The first thing we need to do is load the data we're going
  // to use to get random words.
  //
  // For that we use jQuery's .getJSON() function, which we give
  // the location of the file, and a function to call when the data
  // is available...
  $.getJSON('data/data.json')
    .done(gotData)
    .fail(dataError);
});

// gotData (data)
//
// This function gets called by getJSON when the data has been loaded.
// The data itself will be in the 'data' argument as a JavaScript object.
function gotData(data) {
  // Now we select random elements from the three arrays inside
  // our JSON to get a random condiment, cat, and room. Then we add those
  // words onto our page by setting the text of the appropriate span.

  // First the condiment
  // Get a random condiment from the condiments array in the JSON
  let condiment = getRandomElement(data.condiments);
  // Assume it's singular
  let verb = 'is';
  // Check if the last latter of the condiment is an 's'
  if (condiment.charAt(condiment.length - 1) === 's') {
    // If so, assume it's plural (this is a flawed assumption)
    verb = 'are';
  }

  // Now the cat
  let cat = getRandomElement(data.cats);
// 'a' cat and 'an' when cat name starts with a vowel
  let articleCat = 'a';
  if (cat.charAt(0) === 'A' || cat.charAt(0) === 'E' || cat.charAt(0) === 'I' || cat.charAt(0) === 'O') {
    articleCat = 'an';

  }

   // now the flower
  let flower = getRandomElement(data.flowers);
// 'a' flowe and 'an' when flower name starts with a vowel
  let articleFlower = 'a';
  if (flower.charAt(0) === 'a' || flower.charAt(0) === 'e' || flower.charAt(0) === 'e' || flower.charAt(0) === 'o') {
    articleFlower = 'an';

  }

// now the room
  let room = getRandomElement(data.rooms);
// 'a' room and 'an' when room name starts with a vowel
  let articleRoom = 'a';
  if (room.charAt(0) === 'a' || room.charAt(0) === 'e' || room.charAt(0) === 'e' || room.charAt(0) === 'o') {
    articleRoom = 'an';

  }

// now the movie names
  let movie = getRandomElement(data.movies);

  // Now we can construct our description with a template string
  // We have the basic structure of a sentence and we substitute in the
  // values we've just calculated
  let description = `${condiment} ${verb} like ${articleCat} ${cat} with ${articleFlower} ${flower} in ${articleRoom} ${room} watching ${movie}.`;

  // Finally, we add it to the page and hey presto!
  $('body').append(description)

// when the page is clicked on it calls handleClick
   $('html').on('click', handleClick);
}

// dataError()
//
// Called if the JSON does not load for some reason.
// Reports the error to the console.
function dataError(request, text, error) {
  console.error(error);
}

// getRandomElement ()
//
// Returns a random element from the array provided
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}


// reloads the page
function handleClick() {
 location.reload(true);
}
