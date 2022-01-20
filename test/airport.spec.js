const assertEquals = require(`./testFramework.js`); 
const Airport = require(`../src/airportSourceCode`); 


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
//Report 
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
console.log(actual, 'This is where is is')

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

//Report 
let result = assertEquals (actual, expected); 
console.log(`The plane has taken off and is no longer at the airport: ${result}`);

}





module.exports = {assertEquals, checkCanLandPlane, checkCanOverrideAirportCapacity, 
checkCannotLandWhenAirportFull, checkCanTakeOff}; 