document.getElementById('openloginform').addEventListener("click", function() {
  loginForm();
})
document.getElementById('opensignupform').addEventListener("click", function() {
  signupForm();
})
document.getElementById('add-recipe').addEventListener("click", function() {
  addRecipeForm();
})
document.getElementById('arabic').addEventListener("click", function() {
  request(`/${this.innerText}`, loadRecipes);
})
document.getElementById('asian').addEventListener("click", function() {
  request(`/${this.innerText}`, loadRecipes);
})

/* generic XHR request */

function request(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
    cb(null, xhr.responseText);
  });
  xhr.addEventListener("error", function() {
    cb("error" + xhr.responseType);
  });
  xhr.open("GET", url, true);
  xhr.send();
}

/* DOM manipulation functions */

var container = document.getElementById('container');

function createElements(typeOfElement, className, idName, innerText, action, type, name, placeholder, value, required, href, method) {
  var createdElement = document.createElement(typeOfElement);
  if (className) createdElement.setAttribute("class", className);
  if (idName) createdElement.setAttribute("id", idName);
  if (innerText) createdElement.innerText = innerText;
  if (action) createdElement.setAttribute("action", action);
  if (type) createdElement.setAttribute("type", type);
  if (name) createdElement.setAttribute("name", name);
  if (placeholder) createdElement.setAttribute("placeholder", placeholder);
  if (value) createdElement.setAttribute("value", value);
  if (required) createdElement.required = true;
  if (href) createdElement.setAttribute("href", href);
  if (method) createdElement.setAttribute("method", method);
  return createdElement;
}

function loadRecipes(err, data) {
  if (err) {
    console.log("There is an error: ", err);
  } else {
    var recipeObj = JSON.parse(data);
    var div = document.createElement("div");
    var title = createElements("h2", "recipe-title", "recipe-title", recipeObj[0] + " recipes")
    // document.createElement("h2")
    //
    // title.innerHTML = recipeObj[0] + " recipes";
    div.appendChild(title);
    var ul = document.createElement("ul");

    recipeObj[1].forEach(function(singleRecipe) {
      var recipeBox = document.createElement("div");
      recipeBox.setAttribute("class", "recipe-box");
      var title = document.createElement('li');
      title.innerHTML = `<strong>Title:</strong> ${singleRecipe.name}<br><br>`;
      recipeBox.appendChild(title);
      var ingredients = document.createElement("li");
      ingredients.innerHTML = `<strong>Ingredients:</strong> ${singleRecipe.ingredients}<br><br>`;
      recipeBox.appendChild(ingredients);
      var directions = document.createElement("li");
      directions.innerHTML = `<strong>Directions:</strong> ${singleRecipe.procedure}<br><br>`;
      recipeBox.appendChild(directions);
      ul.appendChild(recipeBox);
    })
    if (recipeObj[0] !== 'Latest') {
      var cusineGoBack = createElements("a", "goback-button", "goback-button", "Go Back", null, null, null, null, null, null, "/");
      ul.appendChild(cusineGoBack);
    }
    div.appendChild(ul);
    container.replaceChild(div, container.firstChild)
  }
}

function loginForm() {
  var loginForm = createElements("form", "form", null, null, "/login", null, null, null, null, null, null, "post");
  var arrOfElements = [
    ["header", "formheader", null, "Login"],
    ["label", null, null, "Username: "],
    ["input", null, null, null, null, "text", "username", "At least 6 characters", "", "required"],
    ["label", null, null, "Password: "],
    ["input", null, null, null, null, "password", "password", "*********", "", "required"],
    ["div", "validation", "validation"],
    ["button", "approve-button", "approve-button", "Login", null, "submit", "submit"],
    ["a", "goback-button", "goback-button", "Go Back", null, null, null, null, null, null, "/"]
  ]
  arrOfElements.forEach(function(element) {
    loginForm.appendChild(createElements.apply(this, element));
  })
  container.replaceChild(loginForm, container.firstChild)
}

function signupForm() {
  var signupForm = createElements("form", "form", null, null, "/signup", null, null, null, null, null, null, "post");
  var arrOfElements = [
    ["header", "formheader", null, "Sign Up"],
    ["label", null, null, "Name: "],
    ["input", null, null, null, null, "text", "name", "name", "", "required"],
    ["label", null, null, "Surname: "],
    ["input", null, null, null, null, "text", "surname", "surname", "", "required"],
    ["label", null, null, "Email: "],
    ["input", null, null, null, null, "text", "email", "email@domain.com", "", "required"],
    ["label", null, null, "Username: "],
    ["input", null, null, null, null, "text", "username", "At least 6 characters", "", "required"],
    ["label", null, null, "Password: "],
    ["input", null, null, null, null, "password", "password", "*********", "", "required"],
    ["label", null, null, "Confirm Password: "],
    ["input", null, null, null, null, "password", "confirm", "*********", "", "required"],
    ["div", "validation", "validation"],
    ["button", "approve-button", "approve-button", "Sign Up", null, "submit", "submit"],
    ["a", "goback-button", "goback-button", "Go Back", null, null, null, null, null, null, "/"]
  ]
  arrOfElements.forEach(function(element) {
    signupForm.appendChild(createElements.apply(this, element));
  })
  container.replaceChild(signupForm, container.firstChild);
}

function addRecipeForm() {
  var addRecipeForm = createElements("form", "form", null, null, "/addrecipe", null, null, null, null, null, null, "post");
  var addRecipeHeader = createElements("header", "formheader", null, "Add Recipe");
  addRecipeForm.appendChild(addRecipeHeader);
  var selectOrigin = createElements("select", null, null, null, null, null, "origin");
  var option = createElements("option", null, null, "Asian", null, null, null, null, "Asian");
  selectOrigin.appendChild(option);
  var option = createElements("option", null, null, "Arabic", null, null, null, null, "Arabic");
  selectOrigin.appendChild(option);
  var option = createElements("option", null, null, "Italian", null, null, null, null, "Italian");
  selectOrigin.appendChild(option);
  var option = createElements("option", null, null, "British", null, null, null, null, "British");
  selectOrigin.appendChild(option);
  addRecipeForm.appendChild(selectOrigin);
  var arrOfElements = [
    ["label", null, null, "Title: "],
    ["textarea", null, null, null, null, "text", "name", "Name of your recipe...", "", "required"],
    ["label", null, null, "Ingredients: "],
    ["textarea", null, null, null, null, "text", "ingredients", "Ingredients of your recipe...", "", "required"],
    ["label", null, null, "Procedure: "],
    ["textarea", null, null, null, null, "text", "directions", "Please add directions", "", "required"],
    ["div", "validation", "validation"],
    ["button", "approve-button", "approve-button", "Add Recipe", null, "submit", "submit"],
    ["a", "goback-button", "goback-button", "Go Back", null, null, null, null, null, null, "/"]
  ]
  arrOfElements.forEach(function(element) {
    addRecipeForm.appendChild(createElements.apply(this, element));
  })
  container.replaceChild(addRecipeForm, container.firstChild)
}

request('/Latest', loadRecipes);
