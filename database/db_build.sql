BEGIN;

DROP TABLE IF EXISTS recipe;

CREATE TABLE IF NOT EXISTS recipe (
    recipe_id           SERIAL     PRIMARY KEY,
    recipe_name         TEXT       NOT NULL,
    recipe_ingredients  TEXT       NOT NULL,
    recipe_directions   TEXT       NOT NULL,
    recipe_origin       TEXT       NOT NULL
);

INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ('Falafel', '1 pound (about 2 cups) dry chickpeas/garbanzo beans - you must start with dry', 'garbanzo, salt, cumin', 'Arabic');

INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ('Sushi', 'Salmon or tuna, nori paper, cucumber', 'roll fish in nori paper and you are done', 'Asian');


INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ('Kimchi', '2 cups radish matchsticks, 1 cup carrot matchsticks,7 to 8 green onions, chopped
1 cup chopped Asian chives (buchu), optional (substitute with 3 green onions, chopped)
1 cup water dropwort (minari), optional', 'To split a cabbage in half without shredding the densely packed leaves inside, first cut a short slit in the base of the cabbage, enough to get a grip on either half, and then gently pull the halves apart so the cabbage splits open.', 'Asian');

INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ('Knafeh', '700 g akkawi cheese (or substitute 500 g ricotta),200 g mozzarella (if using ricotta, use 400 g mozzarella),1 package (500 g) frozen kunafe pastry (thawed one hour on the counter),1½ cups butter to make slightly more than 1 cup clarified butter, melted and hot, 4 Tablespoons sugar,3 Tablespoons orange blossom water,4-8 drops orange food coloring (powder, paste or drops),3 cups rose-scented simple syrup,½ cup ground pistachio, to garnish', ' Place pastry in a large bowl and gradually pour the remaining hot clarified butter over top. Use the full amount of butter or the pastry will be dry or stick to the pan. Using your fingers, mix in the butter to evenly coat the strands of pastry.', 'Arabic');

INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ('Fish and chips', '4x175g/6oz thick cod or haddock fillets, taken from the head end rather than the tail end of the fish, 225g/8oz self-raising flour, plus extra for dusting salt and freshly ground black pepper
300ml/10fl oz fridge-cold lager', 'To make the batter, sift the flour and a pinch of salt into a large bowl and whisk in the lager to give a thick batter, adding a little extra beer if it seems over-thick. It should be the consistency of very thick double cream and should coat the back of a wooden spoon. Season with salt and thickly coat 2 of the fillets with the batter. Carefully place in the hot fat and cook for 8-10 minutes until golden and crispy. Remove from the pan, drain and sit on a baking sheet lined with greaseproof paper, then keep warm in the oven while you cook the remaining 2 fillets in the same way. Once the fish is cooked, return the chips to the fryer and cook for 2-3 minutes or until golden and crispy. Shake off any excess fat and season with salt before serving with the crispy fish. If liked, you can serve with tinned mushy peas and bread and butter', 'British');

INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ('Potato & Bacon Pizza', '1 pound pizza dough, at room temperature cornmeal, for the baking sheets 8 ounces Havarti, grated (2 cups) 1/2 pound red potatoes (about 2), sliced very thinly 4 scallions, sliced 4 strips uncooked bacon, cut into ½-inch pieces kosher salt and black pepper', 'Dividing evenly, top the rounds with the Havarti, potatoes, scallions, and bacon; season with ¼ teaspoon each salt and pepper. Bake until the crust is golden brown, 18 to 20 minutes.', 'Italian');

-- INSERT INTO recipe (recipe_name, recipe_ingredients, recipe_directions, recipe_origin) VALUES ('PostgreSQL Server Programming - Second Edition', 2015, 10, 'The British Library');
-- INSERT INTO books (book_name, year, max_reservation_time, library) VALUES ('Don''t Make Me Think', 2000, 7, 'Finland national library');
-- INSERT INTO books (book_name, year, max_reservation_time, library) VALUES ('Pride and Prejudice', 1813, 21, 'The British Library');
-- INSERT INTO books (book_name, year, max_reservation_time, library) VALUES ('Harry Potter and the Philosopher''s Stone', 1998, 14, 'The British Library');
--
-- CREATE TABLE IF NOT EXISTS mentors (
--     name    TEXT,
--     location    TEXT
-- );
--
-- INSERT INTO mentors (name, location) VALUES ('Tom', 'London');
-- INSERT INTO mentors (name, location) VALUES ('Shireen', 'Nazareth');
-- INSERT INTO mentors (name, location) VALUES ('Emily', 'Nazareth');
-- INSERT INTO mentors (name, location) VALUES ('Steve', 'London');
-- INSERT INTO mentors (name, location) VALUES ('Jack', 'Nazareth');
--
-- CREATE TABLE IF NOT EXISTS posts (
--     id    INTEGER,
--     mentor_name    TEXT
-- );
--
-- INSERT INTO posts (id, mentor_name) VALUES (20, 'Steve');
-- INSERT INTO posts (id, mentor_name) VALUES (32, 'Shireen');
-- INSERT INTO posts (id, mentor_name) VALUES (44, 'Shireen');
-- INSERT INTO posts (id, mentor_name) VALUES (19, 'Tom');
-- INSERT INTO posts (id, mentor_name) VALUES (57, 'Shireen');
--
-- CREATE TABLE IF NOT EXISTS likes (
--     mentor_name    TEXT,
--     post_id    INTEGER
-- );
--
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Emily', 20);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Emily', 44);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Emily', 19);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Emily', 57);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Shireen', 20);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Shireen', 19);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Jack', 20);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Jack', 19);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Jack', 32);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Jack', 44);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Tom', 20);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Tom', 32);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Tom', 44);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Steve', 32);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Steve', 44);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Steve', 19);
-- INSERT INTO likes (mentor_name, post_id) VALUES ('Steve', 57);
--
COMMIT;
