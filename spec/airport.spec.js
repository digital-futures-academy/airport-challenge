const Airport = require("../src/airport");
const Plane = require("../src/plane");
const assertEquals = require("./test-framework");


let plane, airport, result, capacity;


console.log('Test 1 - has the plane landed at this airport?');
//Arrange
airport = new Airport();
//Act
result = airport.landed('plane1')
//Assert
console.log(assertEquals(result.length, 1));

console.log('Test 2 - Can the airport capacity be changed?')

airport = new Airport();
result = assertEquals(capacity, 10);
console.log(result);


console.log('Test 3 - Is the airport full?')
let expectedOutcome = true
plane = new Plane();
airport = new Airport();
plane2 = new Plane();
plane3 = new Plane();

airport.landed(plane);
airport.landed(plane2);
airport.landed(plane3);

console.log(assertEquals(airport.isFull(), expectedOutcome));

