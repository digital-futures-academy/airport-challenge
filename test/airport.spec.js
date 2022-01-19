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
let expected = 1

//Setup 
let actual = updatingCapacity.changeCapacity(1); 
console.log(`This is where it is: ${updatingCapacity.airportMaxCapacity}`);
//Report 
let result = assertEquals(actual, expected); 
console.log(`The airport capacity has been updated: ${result}`); 
}



const checkCannotLandWhenAirportFull = () => {
//Arrange
const testPlane = new Airport(); 
let expected = false

//Setup
let actual = testPlane.preventLanding();

//Result 
let result = assertEquals(actual, expected); 
console.log(`For safety, the plane cannot land as the max capacity has been reached: ${result}`);

}




module.exports = {assertEquals, checkCanLandPlane, checkCanOverrideAirportCapacity, 
checkCannotLandWhenAirportFull}; 