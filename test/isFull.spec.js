//Test 3a: Checking that airport is full once the airportCapacity has been reached, it is expected to return a boolean

const { assertEquals } = require(`./testing-framework`);
const airport = require(`../src/airport`);

let actual, expected, result;

console.log(``);
console.log(`Test 3a - Expecting true value to be returned from isFull as airportCapacity has been reached`);
console.log(`=============================================================================================`);

// Arrange
expected = true;

airport.landedPlanes = [{ id: "plane1" }, { id: "plane2" }, { id: "plane3" }, { id: "plane4" }, { id: "plane5" }, { id: "plane6" }, { id: "plane7" }, { id: "plane8" }, { id: "plane9" }, { id: "plane10" }];

// Act
actual = airport.isFull();

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);

// Clean up 
airport.landedPlanes = [{ id: "plane1" }, { id: "plane2" }, { id: "plane3" }, { id: "plane4" }, { id: "plane5" }, { id: "plane6" }, { id: "plane7" }, { id: "plane8" }, { id: "plane9" }, { id: "plane10" }];
actual = undefined;
result = undefined;


//Test 3b: Checking that a plane cannot land when the airport is full value when trying to land 
console.log(``);
console.log(`Test 3b - Expecting landedPlanes array to remain of the same length when isFull`);
console.log(`===============================================================================`);

// Arrange
expected = 10;
plane11 = { id: "plane11" };

// Act
airport.landPlane(plane11);
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);

// Clean up 
airport.landedPlanes = [{ id: "plane1" }, { id: "plane2" }, { id: "plane3" }, { id: "plane4" }, { id: "plane5" }, { id: "plane6" }, { id: "plane7" }, { id: "plane8" }, { id: "plane9" }, { id: "plane10" }];
actual = undefined;
result = undefined;