# FACN Recipe 2.0
The new and improved facnrecipe.
A simple recipe application for members of Founders & Coders community in Nazareth.

### To get started:
Click [here](https://facnrecipe2.herokuapp.com/) to use FACN Recipe 2.0.

Or you can clone this repository.
```
git clone
```
Install the dependencies
```
npm i
```
Run start
```
npm run devStart
```

### User story:
As a student/mentor of Founders & Coders based in Nazareth, she/he can...
+ login securely to the app
+ create a new recipe
+ browse available recipes
+ filter recipes by origin food type
+ view the most recent recipes

### Schema
**recipes**

| id  | recipe_name    | ingredients | directions | origin | user_id |
| --- | ------------ | ------ | -------- | ------- | ------- |

**users**

| id  |  username | password | name | surname | email |
| --- |:-----:|:-----:|:-----:|:-------:|:-----:|


### Wireframe

<iframe width="1922" height="1080" src="https://xd.adobe.com/embed/ded14afb-cf35-4a00-b8b2-f7f39760710a/" frameborder="0" allowfullscreen></iframe>

### Architecture
![App architecture](https://user-images.githubusercontent.com/25408167/29314857-9cb73692-81c8-11e7-9144-8a7b5e67e3c1.JPG)

### To do list:   
- [ ] create repository
- [ ] create file structure
- [ ] create wireframe
- [ ] create architecture diagram
- [ ] write this beautiful readme :tada:
- [ ] create server, router and handler
  - test the routes
  - refactor
- [ ] create the database
- [ ] create the login and sign up forms
- [ ] hash passwords and store in database
- [ ] create token and save in cookie
- [ ] try login
- [ ] attempt the stretch goals

### Stretch goals
- Function for editing/deleting recipes only for the user that created the original recipe
- Admin authentication to edit/delete any recipes

### Rules
- All branches should be understood and reviewed by all team members prior to pushing/merging to master
- Writing core functionality as a three but splitting up when team members feel comfortable
-
