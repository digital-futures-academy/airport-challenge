const { Plane } = require("../src/plane")
const { assertEquals } = require("../testing-framework");

console.log(`Test 5a: Plane contains an id and a method to return it`);

let expected, actual, result;

//Arrange
plane = new Plane();
expected = "";

//Act
plane.id = "";
actual = plane.getID();

//Assert
result = assertEquals(expected, actual);
console.log(`Test 5a: ${result}`);

//Clean-up
expected = undefined;
actual = undefined;
result = undefined;
plane = undefined;

console.log(`Test 5b: Planes contain an isLanded method to tell when they are landed or not`)

//Arrange
plane = new Plane();
plane.landed = true;
expected = true;

//Act
actual = plane.isLanded();

//Assert
result = assertEquals(expected, actual);
console.log(`Test 5b: ${result}`);

//Clean-up
expected = undefined;
actual = undefined;
result = undefined;
plane = undefined;