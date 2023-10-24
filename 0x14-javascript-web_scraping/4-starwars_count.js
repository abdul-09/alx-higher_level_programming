#!/usr/bin/node

// import the module
const request = require('request');

// The first argument is the API URL
const apiUrl = process.argv[2];

// Make an HTTP GET request to the API
request(apiUrl, function (error, response, body) {
  if (!error) {
    // parse the JSON response
    const results = JSON.parse(body).results;

    // count no of movies where "Wedge Antilles" is present
    const moviesWithWedge = results.reduce((count, movie) => {
      return movie.characters.some(character => character.includes('/18/'))
        ? count + 1 // if found
        : count; // if not found
    }, 0); // initializing count to zero

    console.log(moviesWithWedge);
  }
});

