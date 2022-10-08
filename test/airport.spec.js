const { assertEquals } = require('./testing-framework');
const Airport = require('../src/Airport');
const plane = require('../src/plane')
const weather = require('../src/weather')

let airport, expected, actual, result;

//test1-land a plane
console.log('=====================');
console.log('test1-land a plane')
//arrange
airport = new Airport();
let plane1 = new plane();
expected = airport.airportPlanes.length + 1;
//act
airport.land(plane1);
actual = airport.airportPlanes.length
//assert
result = assertEquals(actual, expected);
console.log(`Test1: The plane has landed; ${result}`)
//cleanup
airport = null;
plane1 = null;
expected = undefined;
actual = undefined;
result = undefined;

//test2-create a airport capacity
console.log('=====================');
console.log('test2-create a airport capacity')
//arrange
airport = new Airport();
expected = 20;
//act
airport.setCapacity(20);
actual = airport.defaultCapacity;
//assert
result = assertEquals(actual, expected);
console.log(`Test2: Create a airport capacity; ${result}`)
//cleanup
airport = null;
expected = undefined;
actual = undefined;
result = undefined

//test3-Prevent landing when the airport is full
console.log('=====================');
console.log('test3-Prevent landing when the airport is full')
//arrange
airport = new Airport();
let plane2 = new plane;
let plane3 = new plane;
airport.land(plane2);
airport.land(plane3);
expected = "Sorry, the airport is full";
//act
actual = airport.isFull();
//assert
result = assertEquals(actual, expected);
console.log(`Test3: Prevent landing when the airport is full; ${result}`)
//cleanup
airport = null;
plane2 = null;
plane3 = null;
expected = undefined;
actual = undefined;
result = undefined;

//test4.1-let a plane take off 
console.log('=====================');
console.log('test4.1-let a plane take off')
//arrange
airport = new Airport();
let plane4 = new plane();
expected = 0;
//act
airport.send(plane4)
actual = airport.airportPlanes.length;
//assert
result = assertEquals(actual, expected);
console.log(`Test4.1-let a plane take off; ${result}`)
//cleanup
airport = null;
plane4 = null;
expected = undefined;
actual = undefined;
result = undefined;

//test4.2-Confirm that the plane taking off is no longer at the airport 
console.log('=====================');
console.log('test4.2-Confirm that the plane taking off is no longer at the airport')
//arrange
airport = new Airport();
plane5 = new plane();
airport.send(plane5)
expected = "Sorry, this plane is already taken off";
//act
actual = airport.takeoffConfirm(plane5);
//assert
result = assertEquals(actual, expected);
console.log(`Test4.2-Confirm that the plane taking off is no longer at the airport; ${result}`)
//cleanup
airport = null;
expected = undefined;
plane5 = null;
actual = undefined;
result = undefined;

//test5.1-Prevent let planes take-off which are not at the airport 
console.log('=====================');
console.log('test5.1-Prevent let planes take-off which are not at the airport')
//arrange
airport = new Airport();
let plane6 = new plane;
airport.send(plane6)
expected = "Sorry, this plane is not at the airport so it cannot take off";
//act
actual = airport.planeHasTakenOff(plane6);
//assert
result = assertEquals(actual, expected);
console.log(`test5.1-Prevent let planes take-off which are not at the airport; ${result}`)
//cleanup
airport = null;
plane6 = null;
expected = undefined;
actual = undefined;
result = undefined;

//test5.2-Prevent landing a plane that's already landed 
console.log('=====================');
console.log('test5.2-Prevent landing a plane that\'s already landed')
//arrange
airport = new Airport();
let plane7 = new plane;
airport.planeHasLanded(plane7)
expected = "Sorry, this plane is already at the airport so it cannot land";
//act
actual = airport.planeHasLanded(plane7);
//assert
result = assertEquals(actual, expected);
console.log(`test5.2-Prevent landing a plane that's already landed ; ${result}`)
//cleanup
airport = null;
plane7 = null
expected = undefined;
actual = undefined;
result = undefined;

//test6-prevent takeoff when weather is stormy 
console.log('=====================');
console.log('test6-prevent takeoff when weather is stormy')
//arrange
airport = new Airport();
let plane8 = new plane;
airport.weathergenerator(plane8)
expected = "Sorry, as weather is stormy the plane cannot take off";
//act
actual = airport.stormyTakeOff(plane8);
//assert
result = assertEquals(actual, expected);
console.log(`test6-prevent takeoff when weather is stormy; ${result}`)
//cleanup
airport = null;
plane7 = null
expected = undefined;
actual = undefined;
result = undefined;


