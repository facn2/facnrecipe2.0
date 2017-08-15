const dbConnection = require ('../database/db_connection');

const addNewRecipeQuery = `INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ($1, $2, $3, $4);`;

const addNewRecipe = (recipeInput, callback) => {
  const { name, ingredients, directions, origin} = recipeInput
    dbConnection.query(addNewRecipeQuery, [name, ingredients, directions, origin], (err, res) => {
    if (err) {
      console.log(err)
      return callback(err);
    } else {
      console.log('new data entered');
      callback(null);
    }
  });
}

module.exports = addNewRecipe;
