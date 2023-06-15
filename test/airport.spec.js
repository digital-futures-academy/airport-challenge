const { checkDifferent } = require("./testFramework.js");
const { checkSame } = require("./testFramework.js");
const Airport = require("../src/Airport.js");

let actual, expected, result;

const airport = new Airport();
const B737 = 'B737';
airport.airplanesOnGround = [];


console.log(`Test 1`);
console.log(`==============================================`)
console.log(`Description`);




console.log(`Land airplane at an airport with landAirplane and test that there is one more airplane at the airport (Array)`);
//Arrange
expected = 1;


//Act
airport.landAirplane(B737);
actual = (airport.airplanesOnGround.length);

//Assert
result = checkSame(actual, expected);

//Report
console.log(`Test 1: 1 airplane landed at the airport: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

//CleanUp
actual = undefined;
expected = undefined;


//===================================================================================================================================================================

console.log(`Test 2`);
console.log(`==============================================`)
console.log(`Description`);




console.log(`change the capacity of an airport and check that it did change to what was expected`);
//Arrange
expected = 15;


//Act
airport.changeCapacityTo(15);
actual = (airport.capacity);

//Assert
result = checkSame(actual, expected);

//Report
console.log(`Test 2: airport capacity is changed to new value: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

//CleanUp
actual = undefined;
expected = undefined;

//===================================================================================================================================================================

console.log(`Test 3`);
console.log(`==============================================`)
console.log(`Description`);




console.log(`do not let airplane land when airport is full`);
//Arrange
airport.airplanesOnGround.length = 10;
expected = airport.airplanesOnGround.length;
// console.log(airport.airplanesOnGround.length);
// console.log(airport.capacity);

//Act
airport.changeCapacityTo(10);
// console.log(airport.capacity);
airport.landAirplane(B737);
actual = airport.airplanesOnGround.length;
// console.log(actual);

//Assert
result = checkDifferent(actual, expected);

//Report
console.log(`Test 3: airplane was allowed to land when airport was full to capacity: ${result}`);
console.log(`Test 3: ${result ? `FAIL` : `PASS`}`);
console.log(``);

//CleanUp
actual = undefined;
expected = undefined;
airport.airplanesOnGround.length = 0;

//===================================================================================================================================================================

console.log(`Test 4`);
console.log(`==============================================`)
console.log(`Description`);




console.log(`instruct the airport to let an airplane take off, and check it is no longer at the airport after it took off`);
//Arrange
// console.log(airport.airplanesOnGround);
airport.landAirplane(B737);
// console.log(airport.airplanesOnGround);
expected = true;

//Act
nextAirplaneInLine = airport.airplanesOnGround[0];
// console.log(nextAirplaneInLine);
airport.letAirplaneTakeOff();
// console.log(airport.airplanesOnGround.length);
// console.log(airport.lastAirplaneTakenOff);
actual = (nextAirplaneInLine === airport.lastAirplaneTakenOff);
// console.log(actual);

//Assert
result = checkSame(actual, expected);

//Report
console.log(`Test 4: the B737 airplane has taken off and is confirmed to be no longer at the airport: ${result}`);
console.log(`Test 4: ${result ? `PASS` : `FAIL`}`);
console.log(``);

//CleanUp
actual = undefined;
expected = undefined;
