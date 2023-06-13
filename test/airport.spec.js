const { checkSame } = require("./testFramework.js");
const Airport = require("../src/Airport.js");

let actualIncrease, expectedIncrease, result;
const airport = new Airport();
const B737 = {};


console.log(`Test 1`);
console.log(`==============================================`)
console.log(`Description`);




console.log(`Land airplane at an airport with landAirplane and test that there is one more airplane at the airport (Array)`);
//Arrange
expectedIncrease = 1;


//Act
airport.landAirplane(B737);
actualIncrease = (airport.airplanes.length);

//Assert
result = checkSame(actualIncrease, expectedIncrease);

//Report
console.log(`Test 1: 1 item added to basket: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

//CleanUp
actualIncrease = undefined;
expectedIncrease = undefined;
