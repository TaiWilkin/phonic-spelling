const functions = require("firebase-functions");
const axios = require("axios");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.giphy = functions.https.onRequest((request, response) => {
  return axios
    .get(
      `https://api.giphy.com/v1/gifs/search?q=${request.params[0]}&limit=5&rating=g&api_key=${process.env.GIPHY_API_KEY}`
    )
    .then((apiResponse) => {
      response.set("Access-Control-Allow-Origin", "*");
      return response.send(apiResponse.data);
    })
    .catch((error) => {
      functions.logger.info("Error: ", error);
      return response.send("Error fetching GIF");
    });
});

exports.wordnik = functions.https.onRequest((request, response) => {
  return axios
    .get(
      `https://api.wordnik.com/v4/word.json/${request.params[0]}/audio?useCanonical=false&limit=50&api_key=${process.env.WORDNIK_API_KEY}`
    )
    .then((apiResponse) => {
      response.set("Access-Control-Allow-Origin", "*");
      return response.send(apiResponse.data);
    })
    .catch((error) => {
      response.set("Access-Control-Allow-Origin", "*");
      functions.logger.info("Error: ", error);

      let message = "";
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        message = error.response.data?.message || message;
        return response.status(error.response.status).send(message);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        message = error.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        message = error.message;
      }
      return response.status(500).send({ error: true, message: message });
    });
});
