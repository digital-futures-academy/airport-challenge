const { checkDifferent } = require("./testFramework.js");
const { checkSame } = require("./testFramework.js");
const Airport = require("../src/Airport.js");


let actual, expected, result;
const airport = new Airport();
let weather = false;


//===================================================================================================================================================================


console.log(`Test 1`);
console.log(`==============================================`)
console.log(`Description`);




console.log(`Land airplane at an airport with landAirplane and test that there is one more airplane at the airport (Array)`);
//Arrange
expected = 1;

//Act
airport.landAirplane('A340', weather);
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
airport.airplanesOnGround = [];

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
airport.capacity = 10;

//===================================================================================================================================================================

console.log(`Test 3`);
console.log(`==============================================`)
console.log(`Description`);




console.log(`do not let airplane land when airport is full`);
//Arrange
airport.airplanesOnGround.length = 10;
expected = airport.airplanesOnGround.length;

//Act
airport.changeCapacityTo(10);
airport.landAirplane('B737', weather);
actual = airport.airplanesOnGround.length;

//Assert
result = checkDifferent(actual, expected);

//Report
console.log(`Test 3: airplane was allowed to land when airport was full to capacity: ${result}`);
console.log(`Test 3: ${result ? `FAIL` : `PASS`}`);
console.log(``);

//CleanUp
actual = undefined;
expected = undefined;
airport.airplanesOnGround = [];

//===================================================================================================================================================================

console.log(`Test 4`);
console.log(`==============================================`)
console.log(`Description`);




console.log(`instruct the airport to let an airplane take off, and check it is no longer at the airport after it took off`);
//Arrange
weather = false;
console.log(weather);
airport.landAirplane('B637', weather);
expected = 0;

//Act
airport.letAirplaneTakeOff('B637', weather);
actual = airport.airplanesOnGround.length;

//Assert
result = checkSame(actual, expected);

//Report
console.log(`Test 4: the airplane has taken off and is confirmed to be no longer at the airport: ${result}`);
console.log(`Test 4: ${result ? `PASS` : `FAIL`}`);
console.log(``);

//CleanUp
actual = undefined;
expected = undefined;

//===================================================================================================================================================================

console.log(`Test 5`);
console.log(`==============================================`)
console.log(`Description`);




console.log(`let the airport not give a takeoff clearance to airplanes that are not at the airport`);
//Arrange
airport.airplanesOnGround = ['B737', 'B777', 'A380', 'A340'];
expected = airport.airplanesOnGround.length;

//Act
airport.letAirplaneTakeOff('B747', weather);
actual = airport.airplanesOnGround.length;

//Assert
result = checkSame(actual, expected);

//Report
console.log(`Test 5: the airplane was not told to takeoff because it was not at the airport: ${result}`);
console.log(`Test 5: ${result ? `PASS` : `FAIL`}`);
console.log(``);

//CleanUp
actual = undefined;
expected = undefined;
airport.airplanesOnGround = [];

//===================================================================================================================================================================

console.log(`Test 6`);
console.log(`==============================================`)
console.log(`Description`);




console.log(`let the airport only give landing clearances to airplanes which are not at the airport`);
//Arrange
airport.airplanesOnGround = ['B737', 'B777', 'A380', 'A340'];
expected = airport.airplanesOnGround.length;

//Act
airport.landAirplane('A380', weather);
actual = airport.airplanesOnGround.length;

//Assert
result = checkSame(actual, expected);

//Report
console.log(`Test 6: the airport did not land the airplane because it was already at the airport: ${result}`);
console.log(`Test 6: ${result ? `PASS` : `FAIL`}`);
console.log(``);

//CleanUp
actual = undefined;
expected = undefined;
airport.airplanesOnGround = [];

//===================================================================================================================================================================

console.log(`Test 7`);
console.log(`==============================================`)
console.log(`Description`);


console.log(`stop airport from letting airplanes take off in stormy weather`);
//Arrange
weather = true;
airport.landAirplane('B787');
expected = true;
let airplanesOnGroundBefore = airport.airplanesOnGround.length;

//Act
airport.letAirplaneTakeOff('B787', weather);
actual = (airport.airplanesOnGround.length === airplanesOnGroundBefore);

//Assert
result = checkSame(actual, expected);

//Report
console.log(`Test 7: the airport did not let an airplane take of in stormy weather: ${result}`);
console.log(`Test 7: ${result ? `PASS` : `FAIL`}`);
console.log(``);

//CleanUp
actual = undefined;
expected = undefined;

//===================================================================================================================================================================

console.log(`Test 8`);
console.log(`==============================================`)
console.log(`Description`);


console.log(`stop airport from letting airplanes land in stormy weather`);
//Arrange
weather = true;
expected = true;

//Act
airport.landAirplane('B787', weather);
actual = (airport.airplanesOnGround.length === airplanesOnGroundBefore);

//Assert
result = checkSame(actual, expected);

//Report
console.log(`Test 8: the airport did not let an airplane take of in stormy weather: ${result}`);
console.log(`Test 8: ${result ? `PASS` : `FAIL`}`);
console.log(``);

//CleanUp
actual = undefined;
expected = undefined;

//===================================================================================================================================================================

console.log(`Test 9`);
console.log(`==============================================`)
console.log(`Description`);


console.log(`an airplane which has landed is at an airport`);
//Arrange
expected = true;

//Act

//Assert
result = checkSame(actual, expected);

//Report
console.log(`Test 9: the landed airplane is at an airport: ${result}`);
console.log(`Test 9: ${result ? `PASS` : `FAIL`}`);
console.log(``);

//CleanUp
actual = undefined;
expected = undefined;