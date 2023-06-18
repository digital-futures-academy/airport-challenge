const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const { assertEquals } = require("./testing-framework.js");

let actual, result, expected, airport, plane1, plane2;

airport = new Airport;
plane1 = new Plane('pl1');
plane2 = new Plane('pl2');


console.log(`=================================================`);
console.log(`User Story 3 - Test 1`);
console.log(`=================================================`);
console.log(``);

console.log(`isAirportFull return true if airportPlaneList is equal to airportCapacity`);

//Arrange
airport.modifyAirportCapacity(1);
airport.airportPlaneList = [plane1];
expected = true;

//Act
actual = airport.isAirportFull();

//Assert
result = assertEquals(actual, expected);

//Report
console.log(``);
console.log(`Test 3.1: with number of planes in airport equal to airport capacity return true: ${result}`);
console.log(`Test 3.1: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean Up
airport.airportPlaneList = [];
airport.airportCapacity = 5;
result = undefined;
actual = undefined;


console.log(`=================================================`);
console.log(`User Story 3 - Test 2`);
console.log(`=================================================`);
console.log(``);

console.log(`isAirportFull return false if airportPlaneList is less than airportCapacity`);

//Arrange
airport.airportPlaneList = [plane1];
expected = false;

//Act
actual = airport.isAirportFull();

//Assert
result = assertEquals(actual, expected);

//Report
console.log(``);
console.log(`Test 3.2: Returns false when isAirportFull is called but there are less than capacity in airportPlaneList: ${result}`);
console.log(`Test 3.2: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean up
airport.airportPlaneList = [];
result = undefined;
actual = undefined;


console.log(`=================================================`);
console.log(`User Story 3 - Test 3`);
console.log(`=================================================`);
console.log(``);

console.log(`If airport is at capacity then landPlane does not modify airportPlaneList`);

//Arrange
airport.modifyAirportCapacity(1);
airport.airportPlaneList = [plane1];
expected = Error;

//Act
try {
    airport.landPlane(plane2);
}
catch (e) {
    if (e instanceof Error) {
        actual = Error;
    }
}

//Assert
result = assertEquals(actual, expected);

//Report
console.log(``);
console.log(`Test 3.3: landPlane does not modify airportPlaneList as airport is full: ${result}`);
console.log(`Test 3.3: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean Up
result = undefined;
actual = undefined;


console.log(`=================================================`);
console.log(`User Story 3 - Test 4`);
console.log(`=================================================`);
console.log(``);

console.log(`If airport is full and a plane tries to land then an error is thrown`);

//Arrange - airport is at capacity from previous test
expected = Error;

//Act
try {
    airport.landPlane(plane2);
}
catch (e) {
    if (e instanceof Error) {
        actual = Error;
    }
}

//Assert
result = assertEquals(actual, expected);

//Report
console.log(``);
console.log(`Test 3.4: Error is thrown: ${result}`);
console.log(`Test 3.4: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);






