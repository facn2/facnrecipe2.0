const fs = require('fs');
const path = require('path');
const getData = require('./queries/getData');
const dbConnection = require('./database/db_connection');
const qs = require('querystring');

const handleHomeRoute = (response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html')
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, 'Content-Type: text/html')
      response.end('<h1> sorry, the page doesnt response </h1>')
    } else {
      response.writeHead(200, 'Content-Type: text/html')
      response.end(file);
    }
  });
}

const handlePublic = (request, response) => {
  const fileName = request.url;
  const fileType = fileName.split(".")[1];
  const filePath = path.join(__dirname, "..", fileName);

  fs.readFile(filePath, function(error, file) {
    if (error) {
      response.writeHead(500, 'Content-Type:text/html');
      response.end('<h1>Sorry, there was a problem loading this page</h1>');
    } else {
      response.writeHead(200, {
        "Content-Type": "text/" + fileType
      });
      response.end(file);
    }
  });
}

const handleCuisine = (request, response) => {
  const endpoint = request.url.split('/')[1];
  getData(endpoint, (err, res) => {
    if (err)
      return console.log('error querying the db');
    const data = JSON.stringify(res);
    response.writeHead(200, {
      'content-type': 'application/json'
    });
    response.end(data);
  });
}

const addNewRecipe = (request, response) => {
  let str = '';
  request.on('data', (chunk) => {
    str += chunk;
  });
  request.on('end', () => {
    const {
      name,
      ingredients,
      directions,
      origin
    } = qs.parse(str);

    const updateData = `INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ($1, $2, $3, $4);`;
    dbConnection.query(updateData, [name, ingredients, directions, origin], (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log('new data entered');
      }
    });
    response.writeHead(302, {
      'location': '/'
    });
    response.end();
  });
}

const handle404 = (request, response) => {
  response.writeHead(404, "Content-Type:text/html");
  response.end("<h1>404 not found</h1>");
}






module.exports = {
  handleHomeRoute,
  handlePublic,
  handleCuisine,
  addNewRecipe,
  handle404
};
