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
        

        var table = document.getElementById("users-table");
        /* create a row in table for each user returned from DB */
        recipes.forEach(function(recipe) {
            var row = document.createElement("tr");
            var name = document.createElement("td");
            name.innerHTML = recipe.recipe_name;
            row.appendChild(name);
            var ingredients = document.createElement("td");
            ingredients.innerHTML = recipe.recipe_ingredients;
            row.appendChild(ingredients);
            table.appendChild(row);
        });
    }
}

request('/users', updateDom);
