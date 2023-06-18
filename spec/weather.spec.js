const Airport = require('../src/airport');
const Plane = require('../src/plane');
const { assertEquals } = require("./testing-framework.js");

let actual, result, expected, airport;

airport = new Airport;
plane1 = new Plane('pl1');

console.log(`=================================================`);
console.log(`User Story 6 & 7 - Test 1`);
console.log(`=================================================`);
console.log(``);

console.log(`setWeather function alters weatherCondition property`);

//Arrange - airport set above
expected = "sunny";

// Act
airport.setWeather("sunny");
actual = airport.weatherCondition;


//Assert
result = assertEquals(actual, expected);

// Report
console.log(``);
console.log(`Test 6/7.1: weather condition has been set to sunny: ${result}`);
console.log(`Test 6/7.1: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean Up
result = undefined;
actual = undefined;
airport.weatherCondition = undefined;


console.log(`=================================================`);
console.log(`User Story 6 & 7 - Test 2`);
console.log(`=================================================`);
console.log(``);

console.log(`isStormy returns true when setWeather has the parameters of 'stormy'`);

//Arrange - airport set above
airport.weatherCondition = "stormy";
expected = true;

// Act
actual = airport.isStormy();

//Assert
result = assertEquals(actual, expected);

// Report
console.log(``);
console.log(`Test 6/7.2: isStormy should be true: ${result}`);
console.log(`Test 6/7.2: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean Up
result = undefined;
actual = undefined;


console.log(`=================================================`);
console.log(`User Story 6 & 7 - Test 3`);
console.log(`=================================================`);
console.log(``);

console.log(`takeOffError thrown if Plane does not take off if airport isStormy is true`);

//Arrange - weather conditions set above
airport.airportPlaneList = [plane1];
expected = Error;

// Act
try {
    airport.takeOff(plane1);
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
console.log(`Test 6/7.3: isStormy should be true: ${result}`);
console.log(`Test 6/7.3: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean Up
result = undefined;
actual = undefined;


console.log(`=================================================`);
console.log(`User Story 6 & 7 - Test 4`);
console.log(`=================================================`);
console.log(``);

console.log(`Plane can take off if weather condition is sunny`);

//Arrange - airport array set above
airport.setWeather("sunny");
expected = 0;

// Act
airport.takeOff(plane1);
actual = airport.airportPlaneList.length;

//Assert
result = assertEquals(actual, expected);

// Report
console.log(``);
console.log(`Test 6/7.4: plane1 should takeOff: ${result}`);
console.log(`Test 6/7.4: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean Up
result = undefined;
actual = undefined;



console.log(`=================================================`);
console.log(`User Story 6 & 7 - Test 5`);
console.log(`=================================================`);
console.log(``);

console.log(`Error is thrown if plane tries to land when it is storm`);

//Arrange 
airport.setWeather("stormy");
expected = Error;

// Act
try {
    airport.landPlane(plane1);
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
console.log(`Test 6/7.5: Error is thrown: ${result}`);
console.log(`Test 6/7.5: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean Up
result = undefined;
actual = undefined;


console.log(`=================================================`);
console.log(`User Story 6 & 7 - Test 6`);
console.log(`=================================================`);
console.log(``);

console.log(`Plane will land if it is not stormy`);

//Arrange 
airport.setWeather("sunny");
expected = 1;

// Act
airport.landPlane(plane1);
actual = airport.airportPlaneList.length;

//Assert
result = assertEquals(actual, expected);

// Report
console.log(``);
console.log(`Test 6/7.6: plane 1 is able to land: ${result}`);
console.log(`Test 6/7.6: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean Up
result = undefined;
actual = undefined;







