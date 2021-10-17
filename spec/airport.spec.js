const Airport = require("../src/airport");
const assertEquals = require("./test-framework");
console.log('Test 1 - has landed at airport')

let airport, plane, expectedOutput;
//Arrange
airport = new Airport();
capacity = 10;
plane = 1

expectedOutput = 9;
//Act
airport.addPlane(plane);

//Assert
result = assertEquals(capacity, expectedOutput);



// Test 2 - Can we change the capacity of airport for different airports use.
console.log('Test 2 - can the capacity of an airport be change and still run')
//Arrange
capacity = new Capacity
let expectedOutput = 20

//Act
let capacity = 20

//Assert
result = assertEquals(capacity, expectedOutput)
console.log(result);

// Test 3 - Prevent landing when airport is full
console.log('Test 3- if airport is full then plane cannot land')
//Arrange
capacity = new Capacity
expectedOutput = 'No space to land'
//Act
let capacity = 0;
if (capacity = 0) {
    fullAirport = 'No space to land'
} else {
    notFullAirport = 'Yes you can land'
}

// Assert 
result = assertEquals(capacity, expectedOuput)
console.log(result);

// Test 4 - Let a plane take off and confirm it is not in the airport
console.log(' Test 4 - confirm the plane is not at the airport after take off')
//Arrange
let airport, pos;
expectedOutput = 0, plane1
//Act
let pos = airport.indexOf('plane1');

//Assert
result = assertEquals(pos, expectedOutput)

//Test 5 - To prevent planes that arent in the airport from taking off and planes that are in the airport landing again
console.log('Test 5 - if plane is in the airport or not.')
//Arrange
let airport, pos;
expectedOutput = true
//Act
let pos = airport.indexOf('plane2')
if (airport.indexOf('plane2') >= 0) {
    console.log('plane is in the airport')
} else {
    console.log('plane is not in the airport')
}
//Assert

