const airplane = require("../src/airplane");
const airport = require("../src/airport");
const { assertEquals, assertFalse } = require("../test/test-framework");
//arrange
let plane1 = "MAN44"
let airport1 = new airport;
let expected = plane1;

//act
airport1.land(plane1);
let actual = airport1.planeArr[0];

//assert 
let result = assertEquals(actual, expected);
console.log(`Test to see if plane can be landed at the airport ${result}`);

//clean-up
expected = undefined;
actual = undefined;
result = undefined;


//arrange
expected = 10

//act
actual = airport1.cap;

//assert
result = assertEquals(actual, expected);
console.log(`Test to see if airport capacity has a default ${ result}`);

//clean-up
expected = undefined
actual = undefined
result = undefined
airport1 = undefined;

//arrange 
expected = 5;

//act
airport1 = new airport(5);
actual = airport1.cap;

//assert
result = assertEquals(actual, expected);
console.log(`Test to see if airport capacity can change ${result}`);

//clean-up
expected = undefined
actual = undefined
result = undefined
airport1 = undefined;

//arrange

//act
airport1 = new airport(0);
actual = airport1.land(new airplane);

//assert
result = assertFalse(actual);
console.log(`Test to see if planes cannot land at a full airport ${ result }`);