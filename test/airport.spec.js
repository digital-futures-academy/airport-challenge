const Airport = require('../src/airport');
const { assertEquals } = require("../testframework")
const { assertTrue } = require("../testframework")
const { assertFalse } = require("../testframework")

let testName, testAirport, expectedResult, actualResult, result;


console.log(`===Airport Test 1===`)
//arrange
testAirport = new Airport();
testName = `Test to see if plane can be instructed to land`;
const testPlane = {
    id: `Test plane`
};
expectedResult = testPlane.name;

//act
testAirport.landPlane(testPlane) //accesses the plane 
actualResult = testAirport.planesAtAirport[0]?.id;
//?. only accesses id if it exists.
//assert
result = assertEquals(actualResult, testPlane.id)

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);



console.log(`===Airport Test 2===`)
//arrange
testAirport = new Airport();
testName = `Test to see if default airport capacity can be overridden when appropriate`;
testAp = {
    defaultCapacity: `default number`,
    newCapacity: `new number`
};
//expectedResult = testAp.name;

//act
testAirport.overrideCapacity(testAp)
actualResult = testAirport.capacity[0]?.newCapacity;

// assert
result = assertEquals(actualResult, testAp.defaultCapacity)

//report
console.log(`${testName}: ${result ? `FAIL` : `PASS`}`);



console.log(`===Airport Test 3===`)
//arrange
testName = `Test to see if airport has space for plane to land`;
testAp = {
    spaces: `test space`
}

//act
testAirport = new Airport();
actualResult = testAirport.airportFull(testAp);
//testAirport.capacity?.spaces; testAp.spaces

//assert
result = assertTrue(actualResult?.spaces)

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`)



//if (spaces < capacity) {
 //   loop Array find first undefined and replace with plane
//}
//loop array in test and populate
//or have test array and set airport array to it