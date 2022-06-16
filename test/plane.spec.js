const { onAir } = require('../testFramework');
const Airport = require('../src/airport');
const plane = require('../src/planes');

let testName, expectedResult, actualResult, result, testPlane;

console.log('                    🛫🛫🛫     Plane Test 1     🛫🛫🛫');

// Arrange
testName = 'Test if the plane is on Air';

// Act
testPlane = new plane();
actualResult = testPlane.isOnAir();

// Assert
result = onAir(actualResult);

// Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
