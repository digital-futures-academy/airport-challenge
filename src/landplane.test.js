const {assertEquals} = require ('./test-framework.js')
const Airport = require('./airport.js');
const Plane = require('./plane.js');

//Test 1
console.log(' Test 1 instruct the airport to land a plane')
let input;
let actualOutput;
let result;

//Arrange
const airport = new Airport ();
const plane = new Plane ();
let expectedOutput = [plane]

//Act
actualOutput = airport.landPlane(plane)

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`plane lands at the airport ${result}`);
console.log(actualOutput)