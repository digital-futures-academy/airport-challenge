const Plane = require("../src/Plane");
const { assertEquals } = require("../testing-framework");

let plane;

// Test 1 - When a plane is created it has an ID which can be returned using getID

console.log(`=======================================`);
console.log(`Test 1 - When plane is created it has an ID `)

// Arrange

plane = new Plane(`Test1 ID`);
expected = `Test1 ID`;

// Act

actual = plane.getID();


// Assert
result = assertEquals(expected, actual);
console.log(`Test 1 - Plane is created with an ID - : ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);