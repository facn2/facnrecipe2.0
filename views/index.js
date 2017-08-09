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
  buttonContainer.classList.add("disappear");
  request(`/${this.innerText}`, updateDom);
})

document.getElementById('arabic').addEventListener("click", function() {
  buttonContainer.classList.add("disappear");
  request(`/${this.innerText}`, updateDom);

})
document.getElementById('italian').addEventListener("click", function() {
  buttonContainer.classList.add("disappear");
  request(`/${this.innerText}`, updateDom);

})
document.getElementById('british').addEventListener("click", function() {
  buttonContainer.classList.add("disappear");
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
      name.innerHTML = `<strong>Title:</strong> ${recipe.recipe_name}<br><br>`;
      ul.appendChild(name);
      var ingredients = document.createElement("li");
      ingredients.innerHTML = `<strong>Ingredients:</strong> ${recipe.recipe_ingredients}<br><br>`;
      ul.appendChild(ingredients);
      var directions = document.createElement("li");
      directions.innerHTML = `<strong>Directions:</strong> ${recipe.recipe_directions}<br><br>`;
      ul.appendChild(directions);
      ul.appendChild(document.createElement("hr"));
    });

    var goBack = document.createElement('div');
    goBack.innerText = "Go Back";
    ul.appendChild(goBack);
    //goBack.setAttribute("class", )
    goBack.addEventListener('click', function(){
      ul.classList.add("disappear");
      buttonContainer.classList.remove("disappear");
      goBack.classList.add("disappear");
   })
    div.replaceChild(ul, div.firstChild);
  }
}


//request('/users', updateDom);
