const request = require('request');



const fetchBreedDescription = function(breedName, callback) { //takes in breedName, and callback that is error and description

  let webString = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName; 
  request(webString, function(error, response, body) {
    if (error) {
        return callback(error, null);
    } 
    const data = JSON.parse(body);

    // If no results, data = []
    if (data.length === 0) {
      return callback("Breed not found");
    } else {
      return callback(null, data[0].description);
    }

  });

};

module.exports = { fetchBreedDescription };
