BEGIN;

DROP TABLE IF EXISTS recipe, users cascade;

CREATE TABLE IF NOT EXISTS recipe (
  id            SERIAL        PRIMARY KEY,
  name          VARCHAR(100)  NOT NULL,
  ingredients   TEXT          NOT NULL,
  procedure     TEXT          NOT NULL,
  cusine        VARCHAR(100)  NOT NULL,
  user_id       INTEGER       DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id            SERIAL        PRIMARY KEY,
  username      VARCHAR(15)   NOT NULL UNIQUE,
  password      VARCHAR(20)   NOT NULL,
  name          VARCHAR(20)   DEFAULT NULL,
  surname       VARCHAR(20)   DEFAULT NULL,
  email         VARCHAR(30)   DEFAULT NULL UNIQUE
);

INSERT INTO recipe (name, ingredients, directions, cusine) VALUES
('Falafel', '1 pound (about 2 cups) dry chickpeas/garbanzo beans - you must start with dry', 'garbanzo, salt, cumin', 'Arabic'),
('Sushi', 'Salmon or tuna, nori paper, cucumber', 'roll fish in nori paper and you are done', 'Asian'),
('Pasta', 'Bag of pasta, water, salt', 'Boil water, add 3 tablespoons of salt, add pasta and cook', 'Italian'),
('Apple Padding', 'Sugar, apples, flour, butter', 'Place all ingredients in blender and call it "padding"', 'British'),
('Crepes', 'Eggs, flour, sugar, milk, butter, salt', 'Mix everything together, put in a hot pan', 'French');

INSERT INTO users (username, password, name, surname, email) VALUES
('admin', '123456', 'Facn', 'Admin', 'admin@facn.com'),
('king', 'king', 'Matt', 'mathewdking', 'matt@mathewdking.com'),
('heather', 'heather', 'Heather', 'Coraje', 'heather@coraje.com'),
('stefano', 'rinoma', 'Stefano', 'Rinoma', 'stefano@rinoma.com');

COMMIT;
