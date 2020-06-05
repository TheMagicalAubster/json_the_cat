const request = require('request');
//take input as to which breed is desired (allow "Siberian" to become "chartreux" etc)

const myArgs = process.argv;  //.slice(2);
console.log("First argument [2]: ", myArgs[2]);
let webString = 'https://api.thecatapi.com/v1/breeds/search?q=';

webString = webString + myArgs[2];
console.log("Website URL search thing: ", webString);

request(webString, function(error, response, body) {
    
  if (typeof error !== "undefined") {
    console.log('Houston, we have a problem: ', error); // Print the error if one occurred
  }
  const data = JSON.parse(body);
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //   console.log('type of' , typeof body);
  //   console.log('body:', body); // Print the HTML for the Google homepage.
  //   console.log("Data is: ", data);
    
  if (data[0] === undefined) {
    console.log("We're sorry, we can't find that breed");
  } else {
    console.log("Breed summary: ", data[0].description);
  }

});
