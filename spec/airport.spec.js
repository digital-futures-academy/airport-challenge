const Airport = require('../src/airport')
const assertEquals = require('../assertEquals')
const colors = require('colors')

let airport, result, expectedResult

console.log('\n    Feature 1: I want to instruct the airport to land a plane'.bold)

console.log('\n > Test 1.1: If i call askToLand(plane1) is plane1 added to the end of airport.parkedPlanes?\n')
// Setup
airport = new Airport()
expectedResult = 'plane1'

// Execute
airport.askToLand('plane1')
result = airport.parkedPlanes[airport.parkedPlanes.length-1]

// Verify
console.log(assertEquals(result, expectedResult))


console.log('\n > Test 1.2: If i call askToLand(plane1) is the parkedPlanes array returned?\n')
// Setup
airport = new Airport()
expectedResult = airport.parkedPlanes

// Execute

result = airport.askToLand('plane1')

// Verify
console.log(assertEquals(result, expectedResult))


console.log('\n    Feature 2: I would like a default airport capacity that can be overridden as appropriate'.bold)

console.log('\n > Test 2.1: If i pass 100 as an argument to the airport object will its capacity property equal 100?\n')
// Setup
airport = new Airport(100)
expectedResult = 100

// Execute
result = airport.capacity

// Verify
console.log(assertEquals(result, expectedResult))

console.log('\n > Test 2.2: If i pass no argument to the airport object, will its capacity property default to 50?\n')
// Setup
airport = new Airport()
expectedResult = 50

// Execute
result = airport.capacity

// Verify
console.log(assertEquals(result, expectedResult))


console.log('\n    Feature 3: I want to prevent landing when the airport is full'.bold)

console.log('\n > Test 3.1: If an airport asks a plane to land when at max capacity, will the plane NOT be added to parkedPlanes?\n')
// Setup
airport = new Airport(2)
airport.askToLand('plane1')
airport.askToLand('plane2')
airport.askToLand('plane3')
expectedResult = false

// Execute
result = airport.parkedPlanes.includes('plane3')

// Verify
console.log(assertEquals(result, expectedResult))

console.log('\n > Test 3.2: If an airport asks a plane to land when below max capacity, will the plane be added to parkedPlanes?\n')
// Setup
airport = new Airport(2)
airport.askToLand('plane1')
airport.askToLand('plane2')
expectedResult = true

// Execute
result = airport.parkedPlanes.includes('plane2')

// Verify
console.log(assertEquals(result, expectedResult))




console.log('\n    Feature 4: I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport'.bold)

console.log('\n > Test 4.1: If an airport asks a parked plane to takeoff, that plane will no longer be in parkedPlanes?\n')
// Setup
airport = new Airport(2)
airport.parkedPlanes.push('plane1','plane2')
expectedResult = false

// Execute
airport.askToTakeOff('plane2')
result = airport.parkedPlanes.includes('plane2')

// Verify
console.log(assertEquals(result, expectedResult))


console.log('\n > Test 4.2: If an airport calls askToTakeOff, airport.parkedPlanes will be printed?\n')
// Setup
airport = new Airport(2)
airport.parkedPlanes.push('plane1','plane2')
expectedResult = airport.parkedPlanes

// Execute
result = airport.askToTakeOff('plane2')

// Verify
console.log(assertEquals(result, expectedResult))


console.log('\n    Feature 5: I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane thats already landed'.bold)

console.log('\n > Test 5.1: If an airport asks a plane to take off, but that plane is not in the airport, return false and log a message\n')
// Setup
airport = new Airport(2)
expectedResult = false

// Execute
result = airport.askToTakeOff('plane1')

// Verify
console.log(assertEquals(result, expectedResult))


console.log('\n > Test 5.2: If an airport asks a plane to land, but that plane is already in the airport, return false and log a message\n')
// Setup
airport = new Airport(2)
airport.parkedPlanes.push('plane1')
expectedResult = false

// Execute
result = airport.askToLand('plane1')

// Verify
console.log(assertEquals(result, expectedResult))


console.log('\n > Test 5.3: If an airport asks a plane to land, but that plane is already in the airport, airport.parkedPlanes.length will remain the same\n')
// Setup
airport = new Airport(2)
airport.parkedPlanes.push('plane1')
expectedResult = 1

// Execute
airport.askToLand('plane1')
result = airport.parkedPlanes.length

// Verify
console.log(assertEquals(result, expectedResult))


console.log('\n    Feature 6: I want to prevent takeoff when weather is stormy'.bold)

console.log('\n > Test 6.1: Simulate stormy weather and check that askToTakeOff returns false and logs a warning\n')
console.log('\n > PLEASE NOTE: in order to eliminate random behaviour for testing, Math.random() has been replaced by an argument. We simulate Math.random by passing a number between 0 and 1 into askToTakeOff\n')
// Setup
airport = new Airport(2)
airport.parkedPlanes.push('plane1')
expectedResult = false

// Execute
// Any number greater than 0.9 will result in stormy weather
result = airport.askToTakeOff('plane1',0.95)

// Verify
console.log(assertEquals(result, expectedResult))

console.log('\n > Test 6.2: Simulate sunny weather and check that the plane will no longer be in parked planes\n')
console.log('\n > PLEASE NOTE: in order to eliminate random behaviour for testing, Math.random() has been replaced by an argument. We simulate Math.random by passing a number between 0 and 1 into askToTakeOff\n')

// Setup
airport = new Airport(2)
airport.parkedPlanes.push('plane1')
expectedResult = false

// Execute
// Any number greater than 0.9 will result in stormy weather
airport.askToTakeOff('plane1',0.4)
result = airport.parkedPlanes.includes('plane1')

// Verify
console.log(assertEquals(result, expectedResult))



console.log('\n    Feature 7: I want to prevent landing when weather is stormy'.bold)

console.log('\n > Test 7.1: Simulate stormy weather and check that askToLand returns false and logs a warning\n')
console.log('\n > PLEASE NOTE: in order to eliminate random behaviour for testing, Math.random() has been replaced by an argument. We simulate Math.random by passing a number between 0 and 1 into askToLand\n')
// Setup
airport = new Airport(2)

expectedResult = false

// Execute
// Any number greater than 0.9 will result in stormy weather
result = airport.askToLand('plane1',0.95)

// Verify
console.log(assertEquals(result, expectedResult))

console.log('\n > Test 7.2: Simulate sunny weather and check that the plane is no longer in parked planes\n')
console.log('\n > PLEASE NOTE: in order to eliminate random behaviour for testing, Math.random() has been replaced by an argument. We simulate Math.random by passing a number between 0 and 1 into askToLand\n')

// Setup
airport = new Airport(2)
airport.parkedPlanes.push('plane1')
expectedResult = false

// Execute
// Any number greater than 0.9 will result in stormy weather
airport.askToTakeOff('plane1',0.4)
result = airport.parkedPlanes.includes('plane1')

// Verify
console.log(assertEquals(result, expectedResult))



console.log('\n    Feature 8: Planes that have landed must be at an airport'.bold)

console.log('\n > Test 8.1: If askToLand is called on a plane, that plane will be in the airport.parkedPlanes\n')
// Setup
airport = new Airport(2)
expectedResult = true

// Execute
airport.askToLand('plane1',0.5)
result = airport.parkedPlanes.includes('plane1')

// Verify
console.log(assertEquals(result, expectedResult))