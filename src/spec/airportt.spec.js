const Airport = require('/Users/safaa/airport-challenge/src/airport.js')
const Test = require('/Users/safaa/airport-challenge/test-framework.js')
let test = new Test

// 1. setup
console.log('Does the airplane land in the airport?')

let input = 'airplane'
let expectedOutput = [input]
let airport = new Airport(input)

// 2. execute
let actualOutput = airport.landPlane(input)

// 3. verify
let result = test.it(expectedOutput, actualOutput)
console.log(result)

// 1. setup
let input1 = 10
expectedOutput1 = `This airport's capacity is ${input1}`

// 2. execute
actualOutput1 = airport.changeCap(input1)

// 3. verify
result1 = test.it(expectedOutput1, actualOutput1)
console.log(result1)


// 1. setup
input2 = 'airplane 1'
expectedOutput2 = `Airport is full. Cannot land ${input2}`

airport.landPlane('airplane')
airport.landPlane('airplane 2')
airport.landPlane('airplane 3')

// 2. execute 
actualOutput2 = airport.landPlane(input2)

// 3. verify
result2 = test.it(expectedOutput2, actualOutput2)
console.log(result2)



module.exports = testAirport