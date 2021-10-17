const Airport = require("../src/airport");
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


console.log('Test 3 - ')
