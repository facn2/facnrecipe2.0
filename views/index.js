var div = document.getElementById("recipe-container");
//div for showing the result

var asian = document.createElement("div");
asian.setAttribute("id", "asian");
asian.innerText = 'Asian';

var arabic = document.createElement("div");
arabic.setAttribute("id", "arabic");

arabic.innerText = 'Arabic';


var italian = document.createElement("div");
italian.setAttribute("id", "italian");

italian.innerText = 'Italian';

var british = document.createElement("div");
british.setAttribute("id", "british");
british.innerText = 'British';

var buttonContainer = document.getElementById('button-container');
buttonContainer.appendChild(asian);
buttonContainer.appendChild(arabic);
buttonContainer.appendChild(italian);
buttonContainer.appendChild(british);

document.getElementById('asian').addEventListener("click", function() {
  request(`/${this.innerText}`, updateDom);
})

document.getElementById('arabic').addEventListener("click", function() {
  request(`/${this.innerText}`, updateDom);

})
document.getElementById('italian').addEventListener("click", function() {
  request(`/${this.innerText}`, updateDom);

})
document.getElementById('british').addEventListener("click", function() {
  request(`/${this.innerText}`, updateDom);
})



/* generic XHR request */


function request(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cb(null, xhr.responseText);
    } else {
      console.log(xhr);
      cb("error" + xhr.responseType);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}


function updateDom(err, data) {
  if (err) {
    console.log(err);
  } else {
    var recipes = JSON.parse(data);

    var ul = document.createElement("ul");
    /* create a row in table for each user returned from DB */
    recipes.forEach(function(recipe) {
      var name = document.createElement("li");
      name.innerHTML = recipe.recipe_name;
      ul.appendChild(name);
      var ingredients = document.createElement("li");
      ingredients.innerHTML = recipe.recipe_ingredients;
      ul.appendChild(ingredients);
      var directions = document.createElement("li");
      directions.innerHTML = recipe.recipe_directions;
      ul.appendChild(directions);
      var recipeOrigin = document.createElement("li");
      recipeOrigin.innerHTML = recipe.recipe_origin;
      ul.appendChild(recipeOrigin);
    });
    div.replaceChild(ul, div.firstChild);
  }
}


//request('/users', updateDom);
