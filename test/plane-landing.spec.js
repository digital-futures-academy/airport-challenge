//As an air traffic controller
//So I can get passengers to a destination
//I want to instruct the airport to land a plane

const { assertEquals } = require("./testing-framework");
const airport = require(`../src/airport`)
const plane = {
    id: `plane1`
};

//| Objects | Properties                   |     Messages        | Outputs  |
//| ------- | --------------------------   | -----------------   |  ------- |
//| airport | airportPlanes @array[@plane] | planeLanding(@plane)   | @Void    |
//| plane   | id @String                   |                     |          |


// TEST 1 - add plane to an empty airport(array) and expect airport(array) to increase by 1

console.log(`Test 1 - ['something'] will be added to empty airport(array)`);
console.log(`══════════════════════════════════`);
console.log(``);

// ARRANGE

expectedOutput = 1
//let actualOutput


// ACT
airport.planeLanding(plane);
actualOutput = airport.airportPlanes.length;

console.log(`Actual Output: ${actualOutput}`);
console.log(``);

// ASSERT

result = assertEquals(actualOutput, expectedOutput)

// REPORT
console.log(`Airport has landed at the airport: ${result}`);
console.log(`Test 1: ${result ? `Pass` : `Fail`}`);

// CLEANUP

actualOutput = undefined;
expectedOutput = undefined;
airport.airportPlanes = [];
result = undefined;
console.log(`\n\n\n\n`);



// TEST 2 - add plane to an empty airport(array) and expect airport(array) to increase by 1

console.log(`Test 2 - plane with ID of 'plane1' will be added to an empty airport(array)`);
console.log(`══════════════════════════════════`);
console.log(``);

// ARRANGE


//ExpectedOutput = plane;


// ACT
airport.planeLanding(plane);
actualOutput = airport.airportPlanes[0];

console.log(`Actual Output: ${actualOutput}`);
console.log(``);

// ASSERT

result = assertEquals(actualOutput, plane)

// REPORT
console.log(`Airport has landed at the airport: ${result}`);
console.log(`Test 2: ${result ? `Pass` : `Fail`}`);

// CLEANUP

actualOutput = undefined;
expectedOutput = undefined;
airport.airportPlanes = [];
result = undefined;
console.log(`\n\n\n\n`);
