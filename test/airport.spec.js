const { checkDifferent } = require("./testFramework.js");
const { checkSame } = require("./testFramework.js");
const Airport = require("../src/Airport.js");

let actual, expected, result;

const airport = new Airport();
const B737 = 'B737';


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
airport.landAirplane(B737);
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
airport.airplanesOnGround.length = 0;

//===================================================================================================================================================================

console.log(`Test 4`);
console.log(`==============================================`)
console.log(`Description`);




console.log(`instruct the airport to let an airplane take off, and check it is no longer at the airport after it took off`);
//Arrange
airport.landAirplane();
expected = 0;

//Act
airport.letAirplaneTakeOff();
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
airport.letAirplaneTakeOff('B747');
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
airport.landAirplane('A380');
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