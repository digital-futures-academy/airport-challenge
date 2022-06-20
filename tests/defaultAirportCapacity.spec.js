//2. As the system designer
//So that the software can be used for many different airports
//I would like a default airport capacity that can be overridden as appropriate

// initial arrange 
let expectedOutput, actualOutput, result;
let inputCapacity = Number;
let testName = ``;
const { assertEquals2 } = require("../src/assertEquals2");
const { airportCapacity } = require("../src/airportCapacity");
//arrange Test 1
testName = `Test 2 - default airport capacity`
inputCapacity = 20
expectedOutput 
    
//act
actualOutput = airportCapacity(inputCapacity);

//assert 
result = assertEquals2(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

