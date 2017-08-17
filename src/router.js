const http = require('http');
const pg = require('pg');
const jwt = require('jsonwebtoken');
const {
  handleHomeRoute,
  handleCuisine,
  handleNewRecipe,
  handlePublic,
  handleLogin,
  handleSignup,
  handle404
} = require('./handlers');


const router = (request, response) => {

  const endpoint = request.url.split('/')[1];

  if (endpoint === '') {
    handleHomeRoute(response);
  } else if (endpoint.match("^Asian|Arabic|British|Italian|Latest$")) {
    handleCuisine(request, response);
  } else if (endpoint.match(/add/)) {
    handleNewRecipe(request, response)
  } else if (endpoint.match(/public/)) {
    handlePublic(request, response);
  } else if (endpoint.match(/login/)) {
    handleLogin(request, response);
  } else if (endpoint.match(/signup/)) {
    handleSignup(request, response);
  } else {
    handle404(request, response);
  }
};

module.exports = router;
