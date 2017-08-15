const http = require('http');
const pg = require('pg');
const {handleHomeRoute, handleCuisine, addNewRecipe, handlePublic, handle404} = require('./handlers');

const router = (request, response) => {

  const endpoint = request.url.split('/')[1];

  if (endpoint === '') {
		handleHomeRoute(response);
  } else if (endpoint.match("^Asian|Arabic|British|Italian$")) {
    handleCuisine(request, response);
  } else if (endpoint === 'add') {
    addNewRecipe(request, response)
  } else if (endpoint.match(/public/)) {
    handlePublic(request, response);
  } else {
    handle404(request, response);
  }
};

module.exports = router;
