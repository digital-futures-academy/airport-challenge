const Airport = require('../src/airport.js')
const assertEquals = require('../test-framework.js')

const testAirport = () => {

let airport = new Airport()
// 1. setup
let input = 'plane 0'
let expectedOutput = [input]

// 1. execute
let actualOutput = airport.land(input)

// 1. verify
let result = assertEquals(expectedOutput, actualOutput)
console.log(result)
//console.log(result)

// 2. setup
input = 2 
expectedOutput = input
// 2. execute
actualOutput = airport.override(input)

// 2. verify
result = assertEquals(expectedOutput, actualOutput)
console.log(result)

// 3. setup
input = 'plane 1'
expectedOutput = `Airport is full. Cannot land ${input}`

// 3. execute 
actualOutput = airport.land(input)

// 3. verify
result = assertEquals(expectedOutput, actualOutput)
console.log(result)


// 4. setup
input = 'plane 2'
expectedOutput = [] && `${input} has left the airport`

// 4. execute
actualOutput = airport.takeOff(input)

// 4. verify
result = assertEquals(expectedOutput, actualOutput)
console.log(result)


// 5. setup
input = 'plane 3'
expectedOutput = `${input} has already landed`

// 5. execute
actualOutput = airport.land(input)

// 5. verify
result = assertEquals(expectedOutput, actualOutput)
console.log(result)

// 6. setup
input = 'plane 4'
expectedOutput = `${input} has already taken off`

// 6. execute
actualOutput = airport.takeOff(input)

// 6. verify
result = assertEquals(expectedOutput, actualOutput)
console.log(result)

}

module.exports = testAirport