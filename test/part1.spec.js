//As an air traffic controller
//So I can get passengers to a destination
//I want to instruct the airport to land a plane

const { assertEquals } = require("./test-framework")
const { landPlane } = require("../src/airport")

//Test 1
//initial arrange

let expectedOutput, actualOutput, result;
let airport = [];
let testName = ``;

//arrange

testName = `Test 1 - return 'Plane has landed'`
let plane = {
    passenger1: 'Shaf',
    passenger2: 'Tom'
}

airport = ['Shaf']
expectedOutput = `Plane has landed`;

//act
actualOutput = landPlane(airport)

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
