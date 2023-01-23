const { assertEquals } = require('../test-framework.js')
const Airport = require('../src/airport.js')
const Plane = require('../src/plane.js')

let expected, actual, result, airport, plane

//**Test 1 **
console.log('TEST 1')

//arrange
airport = new Airport()
plane = new Plane()
expected = true

//act
airport.landPlane(plane)
actual = airport.landPlane(plane)

//assert
result = assertEquals(expected, actual)
console.log(`Only plane instances can land in airport.`)


//clean up (resetting the variables for the next test)
expected, actual, result, airport, plane = null


//**Test 2 **
console.log('TEST 2')

//arrange
airport = new Airport()
plane = new Plane()
expected = 1

//act
airport.landPlane(plane)
actual = airport.landPlane.length

//assert
result = assertEquals(expected, actual)
console.log(`The plane landed in the airport ${result}.`)

//clean up (resetting the variables for the next test)
expected, actual, result, airport, plane = null


//**Test 3 **
console.log('TEST 3')

//arrange
airport = new Airport()
expected = 10

//act
actual = airport.airportCapacity

//assert
result = assertEquals(expected, actual)
console.log(`The airport has a default capacity ${result}.`)

//clean up (resetting the variables for the next test)
expected, actual, result, airport, plane = null


//**Test 4 **
console.log('TEST 4')
//arrange
airport = new Airport()
expected = 0

//act
actual = airport.isAirportFull()

//assert
result = assertEquals(expected, actual)
console.log(`The airport is full ${result}.`)

//clean up (resetting the variables for the next test)
expected, actual, result, airport, plane = null


//**Test 5 **
console.log('TEST 5')

//arrange
airport = new Airport()
plane = new Plane()
expected = 0

//act
airport.landPlane();
actual = airport.airportArray.length

//assert
result = assertEquals(expected, actual)
console.log(`The plane cannot land because the airport is full ${result}.`)

//clean up (resetting the variables for the next test)
expected, actual, result, airport, plane = null


//**Test 6 **
console.log('TEST 6')

//arrange
airport = new Airport()
expected = airport.airportArray.length - 1

//act
airport.planeTakeoff();
actual = airport.airportArray.length

//assert
result = assertEquals(expected, actual)
console.log(`The plane has taken off and the airportArray decreased by 1 ${result}.`)

//clean up (resetting the variables for the next test)
expected, actual, result, airport, plane = null


//**Test 7 **
console.log('TEST 7')

//arrange
airport = new Airport()
plane = new Plane()
expected = false

//act
airport.isPlaneInAirport();
actual = airport.AirportArray

//assert
result = assertEquals(expected, actual)
console.log(`The plane is not in the airport ${result}.`)

//clean up (resetting the variables for the next test)
expected, actual, result, airport, plane = null


//**Test 8 **
console.log('TEST 8')

//arrange
airport = new Airport()
plane = new Plane()
expected = 'Plane is already in the airport.'

//act
airport.landPlane(plane)
actual = airport.landPlane(plane)

//assert
result = assertEquals(expected, actual)
console.log(`The plane is already in the airport so it cannot land again ${result}.`)


//**Test 9 **
console.log('TEST 9')

//arrange
airport = new Airport()
plane = new Plane()
expected = 1

//act)
airport.planeTakeoff(plane)
actual = airport.airportArray.length

//assert
result = assertEquals(expected, actual)
console.log(`The plane is not in the airport so it cannot takeoff ${result}.`)