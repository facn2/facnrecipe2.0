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
