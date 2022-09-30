const { assertEquals } = require("./testing-framework");
const Airport = require("../src/airport")


let expectedOutput, actualOutput, result;
let input = [];
let test = ``;
console.log('All testing begins')


//arrange
console.log('Start test 1')
test = `Test 1 - Instruct the airport to land a plane`;

let airport1 = new Airport();

input = { id: `Plane1` };
expectedOutput = "1";

//act
airport1.add(input)
actualOutput = 0
console.log(actualOutput);

//assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`${test}: ${result ? `Pass` : `Fail`}`);
console.log("End test 1")

//cleanup

expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;
