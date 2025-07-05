const functions = require("firebase-functions");
const axios = require("axios");

// https://firebase.google.com/docs/functions/write-firebase-functions

exports.wordnik = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  return axios
    .get(
      `https://api.wordnik.com/v4/word.json/${
        request.params[0]
      }/audio?useCanonical=false&limit=50&api_key=${
        import.meta.env.WORDNIK_API_KEY
      }`
    )
    .then((apiResponse) => {
      return response.send(apiResponse.data);
    })
    .catch((error) => {
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
