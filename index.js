//index.js
const { fetchBreedDescription } = require('./breedFetcher');

//take input as to which breed is desired (allow "Siberian" to become "chartreux" etc)
const myArgs = process.argv;
const breedName = myArgs[2];

fetchBreedDescription(breedName, (error, body) => { //this is calling fetchBreedDescription, and using what's coming back to do one of two things:

if (error) { // this is saying if there's an error with calling it, show it
  console.log('Error fetch details:', error);
} else {
  console.log("Breed summary: ", body);
}


});

 module.exports = { fetchBreedDescription };