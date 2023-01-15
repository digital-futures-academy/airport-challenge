const Airport = require("../src/airport")
const Plane = require('../src/Plane')
const {assertEquals} =  require('../testing-framework/test-framework')

let expected , actual , result , airport , plane

//----------------Test 1 ---------------------
console.log(`Test 1: the landedList length increases by 1 when we do addPlane`)

//Triple AAA

//Arrange 
airport = new Airport()
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
console.log('default airport capacity that can be overridden')

//Arrange 
airport = new Airport()
plane = new Plane()
expected = 10

//Act 
airport.varyCapacity(10)
actual = airport.airportCapacity
//Assert 
result = assertEquals(expected, actual)
console.log(`varying capacity : ${result ? `Passed` : `Failed`}`)

//Clean up 
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
console.log(`----------------------------------------------------`)

//----------------Test 5 ---------------------
console.log('prevent landing when the airport is full')

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
console.log(actual)
//Assert 
result = assertEquals(expected, actual)
console.log(`airport is full so no plane landing : ${result ? `Passed` : `Failed`}`)

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
console.log('airport to let a plane take off')

//Arrange 
airport = new Airport()
plane = new Plane(1)
plane2 = new Plane(2)
expected = 1

//Act 
airport.addPlane(plane)
airport.addPlane(plane2)
airport.removePlane(plane)
actual = airport.landedList.length - 1
console.log(actual)
//Assert 
result = assertEquals(expected, actual)
console.log(`Plane took off which means landedList is one less: ${result ? `Passed` : `Failed`}`)

//Clean up 
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
plane2 = undefined
console.log(`----------------------------------------------------`)

//----------------Test 7 ---------------------
console.log('check if it is there or not which is the confirmation')

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
console.log(actual)
//Assert 
result = assertEquals(expected, actual)
console.log(`Plane took off which means landedList is one less: ${result ? `Passed` : `Failed`}`)

//Clean up 
expected = undefined
actual = undefined
result = undefined
airport = null
plane = null
plane2 = null
console.log(`----------------------------------------------------`)