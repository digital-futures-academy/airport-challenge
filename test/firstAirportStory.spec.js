const Plane = require(`../src/Plane`);
const Airport = require(`../src/Airport`);
const chalk = require("chalk"); // got the idea for the chalk stuff from Michael Keenan.
const { assertEquals } = require(`./testing-framework`);

let actual, expected, result, plane, airport;


console.log(chalk.blueBright(`Airport tests`));

// Adding 1 to the Airport increases the planes in the airport by 1
console.log(chalk.cyan('User Story 1:- Test 1: Adding 1 plane to the Airport using landPlane() and expect array (planesAtAirport) has increased in length to 1'));

// Arrange
plane = new Plane();
airport = new Airport();
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.getPlanesLength()

// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 1:- Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;





// Test that an actual plane with an id of 'Fj101' is added to the array
console.log(chalk.cyan('User Story 1:- Test 2: Test that an actual plane with an id of "FJ101" is added to the array'));


// Arrange
plane = new Plane('FJ101');
plane1 = new Plane('plane1');
plane2 = new Plane('plane2');
airport = new Airport();
expected = 'FJ101';

// Act
airport.landPlane(plane);
airport.landPlane(plane1);
airport.landPlane(plane2);
const fetchPlane = airport.getPlane('FJ101');

if (fetchPlane) {
  actual = fetchPlane.getId();
} else {
  actual = undefined;
}

// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 1:- Test 2  Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;



// Test that only instances of Plane is passed into the Array(#planesAtAirport)
console.log(chalk.cyan('User Story 1:- Test 3: Test that only instances of Plane is passed into the Array and length of Array should be 0'));


// Arrange
const car = { id: 'ferrari' };
plane = new Plane('FJ101');
airport = new Airport(plane);
expected = 0;

// Act
airport.landPlane(car);
actual = airport.getPlanesLength();


// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 1:- Test 3  Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;


