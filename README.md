# MERN Pagination App

In this project I made a MERN Pagination app which dynamically creates pagination pages based on total documents and the page size. The page size is the amount of records shown per page.  This app shows the next five pages each time the page number reaches the last page number displayed to the user.  The limit of pages shown to the user each time is five. The data was stored in mongodb (NoSQL) database. For the frontend of this application I used React to display the pagination pages and react-router-dom package for the pages routing.
noteworthy npm packages used for backend of this app are:
* mongoose: ODM used for the model and interacting with mongodb database.
* dotenv: used for the environmental variables in the app
* express: used for the backend routing and server


Below is a snapshot of the project.

![Mini Food App](/Assets/MERN-pagination.png)

#


## Instructions

1. Install Node.
2. Install Mongodb database.
3. Install git.
4. Git clone the repository from github.
5. Go to the utils folder from commandline and import the importData.js file to mongodb by "node importData.js --import" command.
6. Go to the root of the app and install the Node.js dependencies by using the "npm install" command.
7. Go to the client folder and install the React.js dependencies by using the "npm install" command.
8. In the root of the app run "npm start" from the commandline.
9. In the cliend folder of the app run "npm start" from the commandline.

## Usage
This app provides visitors with the recipes posted by different users and allows them to search recipes by ingredients.

## Tests
This app was tested manually.


