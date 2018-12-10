## Test Assignment 

This is a test web app that gets EV (electric vehicle) Charging stations from the Virta Api and pins them on the map. On pin clicked there is Info Window with station's details (name and EV Chargers' status). 

In this project I used :
- React.js, 
- react-google-maps, 
- Webstorm as IDE, 
- axios for networking,
- Virta API for data

"containers" folder has:
- App.js file which is responsible for holding the map, getting the EV stations list from the server and
holding this data,
- App.css which sets the styles for App.js.

"components" folder has 2 components:
- Marker component that is responsible for handling the marker click and showing EV station's name and EvChargers' status in the info window
- Map component that is responsible for drawing zooming the map and setting the markers


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

