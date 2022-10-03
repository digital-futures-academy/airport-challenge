const airplane = require("../src/airplane");
const airport = require("../src/airport");
const { assertEquals } = require("../test/test-framework");
//arrange
let plane1 = "MAN44"
let airport1 = new airport;
let expected = plane1;

//act
airport1.land(plane1);
let actual = airport1.planeArr[0];
let result = assertEquals(actual, expected);

//assert 
console.log(`Test to see if plane can be landed at the airport ${ result }`);