const Airport = require("../src/airport")
const Plane = require('../src/Plane')
const Weather = require("../src/Weather")
const {assertEquals} =  require('../testing-framework/test-framework')

let expected , actual , result , airport , plane 

//----------------Test 1 ---------------------
console.log(`Test 1: the landedList length increases by 1 when we do addPlane`)

//Triple AAA

//Arrange 
airport = new Airport(plane)
plane = new Plane()
expected = 1

//Act 
airport.addPlane(plane)
actual = airport.landedList.length 

//Assert
result = assertEquals(expected, actual)
console.log(`Test 1: a plane landed in the airport: ${result ? `Passed` : `Failed`}`)

//Clean Up
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
console.log(`----------------------------------------------------`)
//----------------Test 2 ---------------------
console.log(`Test 2 : Adding only Plane instances`)

//Triple AAA

//Arrange
airport = new Airport()
plane = 'anyPlane'
expected = 0

//Act
airport.addPlane(plane)
actual = airport.landedList.length

//Assert 
result = assertEquals(expected, actual)
console.log(`Test 2: a Plane instance landed in the airport : ${result ? `Passed` : `Failed`}`)

//Clean Up
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
console.log(`----------------------------------------------------`)

//----------------Test 3 ---------------------
console.log(`Test 3 : addPlane should not add null value `)

//Triple AAA

//Arrange
airport = new Airport()
plane = null
expected = 0

//Act
airport.addPlane(plane)
actual = airport.landedList.length

//Assert 
result = assertEquals(expected, actual)
console.log(`Test 3: Not adding null value  : ${result ? `Passed` : `Failed`}`)

//Clean Up
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
console.log(`----------------------------------------------------`)


//----------------Test 4 ---------------------
console.log('Test 4: default airport capacity that can be overridden')

//Arrange 
airport = new Airport()
plane = new Plane()
expected = 10

//Act 
airport.varyCapacity(10)
actual = airport.airportCapacity
//Assert 
result = assertEquals(expected, actual)
console.log(`Test 4: varying capacity : ${result ? `Passed` : `Failed`}`)

//Clean up 
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
console.log(`----------------------------------------------------`)

//----------------Test 5 ---------------------
console.log('Test 5: prevent landing when the airport is full')

//Arrange 
airport = new Airport()
plane = new Plane()
plane1 = new Plane()
plane2 = new Plane()
expected = true
//Act 
airport.addPlane(plane)
airport.addPlane(plane1)
airport.addPlane(plane2)
airport.varyCapacity(3)
actual = airport.isFullCheck()
//Assert 
result = assertEquals(expected, actual)
console.log(`Test 5: airport is full so no plane landing : ${result ? `Passed` : `Failed`}`)

//Clean up 
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
plane1 = undefined
plane2 = undefined
console.log(`----------------------------------------------------`)

//----------------Test 6 ---------------------
console.log('Test 6: airport to let a plane take off')

//Arrange 
airport = new Airport()
plane = new Plane(1)
plane2 = new Plane(2)
expected = 1

//Act 
airport.addPlane(plane)
airport.addPlane(plane2)
airport.removePlane(plane)
actual = airport.landedList.length 
//Assert 
result = assertEquals(expected, actual)
console.log(`Test 6: Plane took off which means landedList is one less: ${result ? `Passed` : `Failed`}`)

//Clean up 
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
plane2 = undefined
console.log(`----------------------------------------------------`)

//----------------Test 7 ---------------------
console.log('Test 7: check if it is there or not which is the confirmation')

//Arrange 
airport = new Airport()
plane = new Plane(1)
plane2 = new Plane(2)
expected = true

//Act 
airport.addPlane(plane)
airport.addPlane(plane2)
airport.removePlane(plane2)
actual = airport.checkList(plane2)
//Assert 
result = assertEquals(expected, actual)
console.log(`Test 7: Plane took off which means landedList is one less: ${result ? `Passed` : `Failed`}`)

//Clean up 
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
plane2 = null
console.log(`----------------------------------------------------`)

//----------------Test 8 ---------------------
console.log(`Test 8: prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
`)

//Arrange 
airport = new Airport()
plane = new Plane(1)
plane1 = new Plane(2)
expected = true

//Act 
airport.addPlane(plane1)
actual = airport.isPlaneThere(plane1)
//Assert 
result = assertEquals(expected, actual)
console.log(`Test 8: check id the plane already landed: ${result ? `Passed` : `Failed`}`)

//Clean up 
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
plane2 = null
console.log(`----------------------------------------------------`)

//----------------Test 9 ---------------------
// console.log(`Test 9: checking the weather stormy`)

// //Arrange 
// airport = new Airport()
// weather = new Weather('stormy')
// expected = 'stormy'

// //Act 
// actual = weather.getWeather()
// //Assert 
// result = assertEquals(expected, actual)
// console.log(`Test 9: check the weather is stormy: ${result ? `Passed` : `Failed`}`)

// //Clean up 
// expected = undefined
// actual = undefined
// result = undefined
// airport = null
// plane = null
// console.log(`----------------------------------------------------`)

//----------------Test 10 ---------------------
console.log(`Test 10: prevent takeoff`)

//Arrange 
airport = new Airport()
weather1 = new Weather('stormy')
expected = false

//Act 

actual = airport.removePlane(plane, weather1.weather)
//Assert 
result = assertEquals(expected, actual)
console.log(`Test 10: take off checking: ${result ? `Passed` : `Failed`}`)

//Clean up 
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
console.log(`----------------------------------------------------`)

//----------------Test 11 ---------------------
console.log(`Test 11: prevent landing`)

//Arrange 
airport = new Airport()
weather1 = new Weather('stormy')
expected = false

//Act 


actual = airport.addPlane(plane, weather1.weather)
//Assert 
result = assertEquals(expected, actual)
console.log(`Test 11: check landing when it is stormy: ${result ? `Passed` : `Failed`}`)

//Clean up 
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
weather = undefined
console.log(`----------------------------------------------------`)

//----------------Test 12 ---------------------
console.log(`Test 12: count the planes`)

//Arrange 
airport = new Airport()
plane = new Plane(1)
plane1 = new Plane(2)
plane2 = new Plane(3)
weather = new Weather('stormy')
expected = 2

//Act 
airport.addPlane(plane, weather1.weather)
airport.addPlane(plane1)
airport.addPlane(plane2)
actual = airport.landedList.length
//Assert 
result = assertEquals(expected, actual)
console.log(`Test 12: Total number of planes in the airport: ${result ? `Passed` : `Failed`}`)

//Clean up 
expected = undefined
actual = undefined
result = undefined
airport = null
plane = undefined
console.log(`----------------------------------------------------`)