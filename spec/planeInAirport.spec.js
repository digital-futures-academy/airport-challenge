const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');
const { assertEquals } = require("./testing-framework.js");


let actual, result, expected, airport, plane1, plane2, plane3;

plane1 = new Plane('pl1');
plane2 = new Plane(`pl2`);
plane3 = new Plane(`pl3`);
airport = new Airport;
airport.airportPlaneList = [plane1, plane2];


console.log(`=================================================`);
console.log(`User Story 5 - Test 1`);
console.log(`=================================================`);
console.log(``);

console.log(`Error message is thrown if a plane that is not in the airport tries to take off`);

//Arrange - planes and airport set above
expected = Error;

//Act
try {
    airport.takeOff(plane3);
}
catch (e) {
    if (e instanceof Error) {
        actual = Error;
    }
}

//Assert
result = assertEquals(actual, expected);

// Report
console.log(``);
console.log(`Test 5.1: Error is thrown if plane tries to take off that is not in airport: ${result}`);
console.log(`Test 5.1: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean Up
result = undefined;
actual = undefined;


console.log(`=================================================`);
console.log(`User Story 5 - Test 2`);
console.log(`=================================================`);
console.log(``);

console.log(`Error is thrown if a plane that is already in the airport tries to land`);

//Arrange - planes and airport set above
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

// Report
console.log(``);
console.log(`Test 5.2: Error is thrown if plane that is already in airport tries to land: ${result}`);
console.log(`Test 5.2: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);




