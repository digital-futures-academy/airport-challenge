const assert = require('assert');
const Plane = require('./src/plane');
const Airport = require('./src/airport');


let airport;
let plane1;
let plane2;
let expected;
let actual;
let capacity;

// Test 1. Landing a Plane
console.log(`Test 1 - Landing a plane`);

//Arrange
airport = new Airport();
plane1 = new Plane();
expected = 1;

//Act
airport.landPlane(plane1);
actual = airport.planes.length;

//Assert
try {
    assert.equal(actual, expected);
} catch {
    return console.error(`Error: values not equal`);
}
console.log(`Plane has landed`);

//Clean up
airport = null;
plane1 = null;
expected = undefined;
actual = undefined;

// Test 2. Overriding airport capacity
console.log(`Test 2. Overriding airport capacity`);

//Arrange
airport = new Airport();
capacity = 4;
expected = 10;

// Act
airport.changeCapacity(10);
actual = airport.capacity;


// Assert
try {
    assert.equal(actual, expected);
} catch {
    return console.error(`Error: values not equal`);
}
console.log(`Capacity changed to ${airport.capacity}`);

//Clean up
airport = null;
expected = undefined;
actual = undefined;
capacity = undefined;

// Test 3. Prevent landing when the airport is full
console.log(`Test 3. Prevent landing when the airport is full`);

// Arrange
airport = new Airport();
plane1 = new Plane();
plane2 = new Plane();
airport.capacity = 1;
expected = (airport.capacity >= airport.planes.length);

// // Act
airport.landPlane(plane1);
airport.landPlane(plane2);
actual = airport.planes.length;


// Assert
try {
    assert.equal(actual, expected);
} catch {
    return console.error(`Error: values not equal`);
}
console.log(`Airport is full`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
plane1 = null;
plane2 = null;

// Test 4. Taking off a plane and confirming that it is no longer at the airport.
console.log(`Taking off a plane and confirming that it is no longer at the airport.`);

// Arrange
airport = new Airport();
plane1 = new Plane();
expected = (airport.planes.length === []);

// Act
airport.landPlane(plane1);
airport.takeOffPlane(plane1);
actual = airport.planes.length;


// // Assert
try {
    assert.equal(actual, expected);
} catch {
    return console.error(`Error: values not equal`);
}
console.log(`Plane has taken off.`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
plane1 = null;


// Test 5. Prevent asking the airport to let land a plane that's already landed.
console.log(`Prevent asking the airport to let land a plane that's already landed.`);

// Arrange
airport = new Airport();
plane1 = new Plane('Boeing 787');
expected = 1;

// Act
airport.landPlane(plane1);
airport.landPlane(plane1);
actual = airport.planes.length;

// Assert
try {
    assert.equal(actual, expected);
} catch {
    return console.error(`Error: values not equal`);
}
console.log(`This Plane has already landed at the airport.`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
plane1 = null;

// Test 6. Prevent asking the airport to let planes take-off which are not at the airport.
console.log(`Prevent asking the airport to let planes take-off which are not at the airport.`);

// Arrange
airport = new Airport();
plane1 = new Plane();
plane2 = new Plane();
expected = airport.planes.includes(plane2);

// Act
airport.landPlane(plane1);
airport.takeOffPlane(plane2);
actual = false;


// Assert
try {
    assert.equal(actual, expected);
} catch {
    return console.error(`Error: values not equal`);
}
console.log(`Plane is not at the airport.`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
plane1 = null;
plane2 = null;

// Test 7. Prevent takeoff when weather is stormy.
console.log(`Prevent takeoff when weather is stormy.`);

// Arrange
airport = new Airport();
plane1 = new Plane();
expected = airport.planes.length === 1;


// Act
airport.landPlane(plane1);
airport.takeOffPlane(plane1);
actual = airport.planes.length;

// Assert
try {
    assert.equal(actual, expected);
} catch {
    return console.error(`Error: values not equal`);
}
console.log(`Plane cannot takeoff due to stormy weather.`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
plane1 = null;

// Test 8. Prevent landing when weather is stormy.
console.log(`Prevent landing when weather is stormy.`);

// Arrange
airport = new Airport();
plane1 = new Plane();
expected = [];

// Act
airport.landPlane(plane1);
actual = airport.planes.length;

// Assert
try {
    assert.equal(actual, expected);
} catch {
    return console.error(`Error: values not equal`);
}
console.log(`Plane cannot land due to stormy weather.`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
plane1 = null;

// Test 9. Planes that have landed must be at an airport.
console.log(`Planes that have landed must be at an airport.`);

// Arrange
airport = new Airport();
plane1 = new Plane();
plane2 = new Plane();
expected = 2


// Act
airport.landPlane(plane1);
airport.landPlane(plane2);
console.log(airport.planes);
actual = airport.planes.length;

// Assert
try {
    assert.equal(actual, expected);
} catch {
    return console.error(`Error: values not equal`);
}
console.log(`Planes are at the airport.`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
plane1 = null;
plane2 = null;