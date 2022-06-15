// Acceptance Criteria
// I want to be able to check if capacity can be overridden

//**References** 
const { assertEquals } = require("../test-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane");

//**Instance of airport class**
const airport1 = new Airport(`ap001`, new Plane(`pl004`), 5);

//initial arrange
let expectedOutput, actualOutput, result, testName;


//Test1
//arrange 
testName = `Test1: change capacity`;
expectedOutput = 5;

//act
actualOutput = airport1.capacity;

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);