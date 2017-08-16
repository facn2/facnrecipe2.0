const fs = require('fs');
const path = require('path');
const getData = require('./queries/getData');
const dbConnection = require('./database/db_connection');
const qs = require('querystring');
const addNewRecipe = require('./queries/addData.js')
const cookie = require('cookie')
const {
  validateLogin,
  createUser
} = require('./queries/userData.js');
const {
  sign,
  verify
} = require('jsonwebtoken');
require('env2')('./config.env');

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
  if (!request.headers.cookie) {
    response.writeHead(200, 'Content-type:text/html');


  }
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

const handleNewRecipe = (request, response) => {
  let string = '';
  if (!request.headers.cookie) {
    response.writeHead(200, 'content-type:text/html');
    response.end('<h1>you are not logged in !</h1>');
  } else {
    const parsedCookie = cookie.parse(request.headers.cookie);
    const userSession = parsedCookie.user_session;
    const userName = parsedCookie.user_name;


    verify(userSession, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return console.log(err); //server shit error
      } else if (userName === decoded) {
        request.on('data', (chunk) => {
          string += chunk;
        });
        request.on('end', () => {
          const recipeInput = qs.parse(string);
          addNewRecipe(recipeInput, (err) => {
            if (err) {
              response.writeHead(500, 'Content-Type: text/html');
              response.end('we cannot add your recipe')
            }
            response.writeHead(302, {
              'location': '/'
            });
            response.end();
          })
        });
      } else {
        response.writeHead(200, 'content-type:text/html');
        response.end('<h1>you are not logged in !</h1>')
      }
    });
  }
}

const maxAge = new Date();
maxAge.setDate(maxAge.getDate() + 14);
//sets max date to two weeks from today
//for creating a token
const handleLogin = (request, response) => {
  let string = '';
  request.on('data', (chunk) => {
    string += chunk;
  });
  request.on('end', () => {
    const loginInfo = qs.parse(string);
    const username = loginInfo.username
    validateLogin(loginInfo, (err, res) => {
      if (err) {
        console.log(err);
        response.writeHead(500, 'content-type: text/html')
        response.end('<h1>Server error has occured.</h1>')
      } else if (res == 'Incorrect username') {
        response.writeHead(401, 'content-type: text/html');
        response.end('<h1>Incorrect username</h1>')
      } else if (res) { //if true
        const token = sign(username, process.env.SECRET_KEY);
        response.writeHead(301, {
          'location': '/',
          'set-cookie': [`logged_in=true; HttpOnly; Max-Age=${maxAge}`, `user_session=${token}; Max-Age=${maxAge}`, `user_name=${username}; Max-Age=${maxAge}`]
        }); //set Max-Age for each element in cookie
        response.end()
      } else {
        console.log('hello'); //your pw is wrong
        response.writeHead(401, 'content-type: text/html');
        response.end('<h1>Incorrect password</h1>')
      }
    })
  })
}


const handleSignup = (request, response) => {
  let string = '';

  request.on('data', (chunk) => {
    string += chunk;
  });
  request.on('end', () => {
    const signupInfo = qs.parse(string);
    const username = signupInfo.username;
    createUser(signupInfo, (err) => {
      if (err) {
        console.log(err);
        response.writeHead(500, 'content-type: text/html')
        response.end('<h1>Server error has occured.</h1>')
      } //
      else {
        const token = sign(username, process.env.SECRET_KEY);
        response.writeHead(301, {
          'location': '/',
          'set-cookie': [`logged_in=true; HttpOnly; Max-Age=${maxAge}`, `user_session=${token}; Max-Age=${maxAge}`, `user_name=${username}; Max-Age=${maxAge}`]
        }); //set Max-Age for each element in cookie
        response.end()
      }
    })
  })
}

const handle404 = (request, response) => {
  response.writeHead(404, "Content-Type:text/html");
  response.end("<h1>404 not found</h1>");
}

module.exports = {
  handleHomeRoute,
  handlePublic,
  handleCuisine,
  handleNewRecipe,
  handleLogin,
  handleSignup,
  handle404
};
