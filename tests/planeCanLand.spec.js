// 1. As an air traffic controller
// So I can get passengers to a destination
// I want to instruct the airport to land a plane

const Airport = require("../src/airport");
const { addToArray } = require("../src/addToArray");
const assertEquals = (Airport) => { Airport++ };


// initial arrange 
let expectedOutput, actualOutput, result;
let input = [];
let testName = ``;

//arrange Test 1
testName = `Test 1 - plane can be added in list of array`
input = [Airport].length;
expectedOutput = [Airport].push(`new plane`);



//act
actualOutput = addToArray(input);

//assert 
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
