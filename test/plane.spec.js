const { Plane } = require("../src/plane")
const { assertEquals } = require("../testing-framework");

console.log(`Test 5a: Plane contains an id and a method to return it`);

let expected, actual, result;

//Arrange
plane = new Plane();
expected = "";

//Act
