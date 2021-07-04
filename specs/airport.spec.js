const Airport = require('../src/airport.js')
const Plane = require('../src/plane.js')
const assertEquals = require('../src/test-framework.js')

global.Math.random = () => 0.4

let plane, airport, expectedOutput, actualOutput
//setup
console.log('instruct airport to land plane, results in plane going from inAir=true to false')
airport = new Airport()
plane = new Plane(true)
//execute
airport.instructLand(plane)
//verify
console.log(!plane.inAir ? 'Success' : 'Fail')


console.log('creating new airport has default capacity 30')
plane = new Plane(true)
airport = new Airport()
console.log(airport.capacity === 30 ? 'Success' : 'Fail')

console.log('creating new airport with param1 = 20 changes airport capacity to 20')
airport = new Airport(20)
console.log(airport.capacity === 20 ? 'Success' : 'Fail')

console.log('Airport capacity can be changed from 30 to 20 after initialising')
airport = new Airport()
airport.capacity = 20
console.log(airport.capacity === 20 ? 'Success' : 'Fail')

//setup
console.log('instruct airport to land plane when airport is full results in inAir remaining at true')
airport = new Airport()
plane = new Plane(true)
airport.hangar.length = airport.capacity
expectedOutput = 'Airport at full capacity'
//execute
actualOutput = airport.instructLand(plane)
//verify
console.log(assertEquals(actualOutput, expectedOutput) ? 'Success' : 'Fail')


//setup
console.log('instruct airport to take off plane')
airport = new Airport()
plane = new Plane()
expectedOutput = true
//execute
airport.instructTakeOff(plane)
actualOutput = plane.inAir
//verify
console.log(assertEquals(actualOutput, expectedOutput) ? 'Success' : 'Fail')


console.log('cant ask airport to takeOff planes that are in the air')
airport = new Airport()
plane = new Plane(true)
expectedOutput = 'Plane already in air'
//execute
actualOutput = airport.instructTakeOff(plane)
//verify
console.log(assertEquals(actualOutput, expectedOutput) ? 'Success' : 'Fail')


console.log('cant ask airport to land planes that have landed')
airport = new Airport()
plane = new Plane()
expectedOutput = 'Plane already in airport'
//execute
actualOutput = airport.instructLand(plane)
//verify
console.log(assertEquals(actualOutput, expectedOutput) ? 'Success' : 'Fail')


global.Math.random = () => 0.9

console.log('cant ask airport to land planes when weather is stormy')
airport = new Airport()
plane = new Plane(true)
expectedOutput = 'Weather does not permit'
//execute
actualOutput = airport.instructLand(plane)
//verify
console.log(assertEquals(actualOutput, expectedOutput) ? 'Success' : 'Fail')

console.log('cant ask airport to let planes take off when weather is stormy')
airport = new Airport()
plane = new Plane()
expectedOutput = 'Weather does not permit'
//execute
actualOutput = airport.instructTakeOff(plane)
//verify
console.log(assertEquals(actualOutput, expectedOutput) ? 'Success' : 'Fail')

global.Math.random = () => 0.2

console.log('airplane that has landed must be at airport')
airport = new Airport()
plane = new Plane(true)
expectedOutput = true
//execute
airport.instructLand(plane)
//console.log(`plane name : ${plane.name} Airport hangar : ${airport.hangar} it is in the air: ${plane.inAir}`)
actualOutput = airport.hangar.includes(plane.name)
//verify
console.log(assertEquals(actualOutput, expectedOutput) ? 'Success' : 'Fail')
