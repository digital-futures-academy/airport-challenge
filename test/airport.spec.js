const assertEquals = require(`./testFramework.js`); 
const Airport = require(`../src/airportSourceCode`); 
const PlaneSupport = require(`../src/planeSupportSourceCode`);
const Forecast = require(`./../src/forecastSourceCode`);


const checkCanLandPlane = () => {
//Arrange
let testPlane = new Airport(); 
let expected = true

//Setup
let actual = testPlane.landPlane(true); 

//Result
let result = assertEquals(actual, expected); 
console.log(`The airport managed to land the plane: ${result} `);

}



const checkCanOverrideAirportCapacity = () => {
//Arrange
const updatingCapacity = new Airport(); 
let expected = 0

//Setup 
let actual = updatingCapacity.changeCapacity(); 
//console.log(`This is where it is: ${updatingCapacity.airportMaxCapacity}`);
//Result 
let result = assertEquals(actual, expected); 
console.log(`The airport capacity has been updated: ${result}`); 
}



const checkCannotLandWhenAirportFull = () => {
//Arrange
const testPlane = new Airport(); 
let expected = true;

//Setup
let cannotLandResult = testPlane.preventLanding(["flight1"]);
let actual = cannotLandResult instanceof Error;

//Result 
let result = assertEquals(actual, expected); 
console.log(`For safety, the plane cannot land as the max capacity has been reached: ${result}`);

}


const checkCanTakeOff = () => {
//Arrange
const testPlane = new Airport (); 
let expected = 0;
//Set up

let actual = testPlane.allowTakeOff(false, ["plane1"]); 

//Result 
let result = assertEquals (actual, expected); 
console.log(`The plane has taken off and is no longer at the airport: ${result}`);

}

const checkVoidPlaneNotFound= () => {
//Arrange
const testPlane = new Airport;
let expected = false;

//Setup
let actual = testPlane.lookForPlane("plane1")

//Result
let result = assertEquals(actual, expected);
console.log(`Airport takeoff/landing functions are unavailable as flight not in airport: ${result}`);
}


const checkCannotOperateWhenStormy = () => {
//Arrange
const testPlane = new Forecast();
let expected = true;

//Setup
let actual = testPlane.checkWeather();

//Result
let result = assertEquals (actual, expected)
console.log(`No operations can take place when the weather is stormy: ${result}`);
}





module.exports = {assertEquals, checkCanLandPlane, checkCanOverrideAirportCapacity, 
checkCannotLandWhenAirportFull, checkCanTakeOff, checkVoidPlaneNotFound, checkCannotOperateWhenStormy}; 