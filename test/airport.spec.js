const { assertEquals } = require('./testing-framework');
const Airport = require('../src/Airport');

let airport, plane, expected, actual, result;

//test1-land a plane
console.log('=====================');
console.log('test1-land a plane')
//arrange
airport = new Airport();
plane = { id: 'plane' };
expected = 1;
//act
airport.land(plane);
actual = airport.airportPlanes.length
//assert
result = assertEquals(actual, expected);
console.log(`Test1: The plane has landed; ${result}`)
//cleanup
airport = null;
plane = null;
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
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//test3-Prevent landing when the airport is full
console.log('=====================');
console.log('test3-Prevent landing when the airport is full')
//arrange
airport = new Airport();
plane = { id: 'plane' };
const plane2 = { id: 'plane2' };
airport.land(plane);
airport.land(plane2);
expected = "Sorry, the airport is full";
//act
actual = airport.isFull();
//assert
result = assertEquals(actual, expected);
console.log(`Test3: Prevent landing when the airport is full; ${result}`)
//cleanup
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//test4.1-let a plane take off 
console.log('=====================');
console.log('test4.1-let a plane take off')
//arrange
airport = new Airport();
plane = { id: "plane" };
expected = 0;
//act
airport.send(plane)
actual = airport.airportPlanes.length;
//assert
result = assertEquals(actual, expected);
console.log(`Test4.1-let a plane take off; ${result}`)
//cleanup
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//test4.2-Confirm that the plane taking off is no longer at the airport 
console.log('=====================');
console.log('test4.2-Confirm that the plane taking off is no longer at the airport')
//arrange
airport = new Airport();
expected = "Sorry, this plane is not at the airport so it cannot take off";
//act
actual = airport.send();
//assert
result = assertEquals(actual, expected);
console.log(`Test4.2-Confirm that the plane taking off is no longer at the airport; ${result}`)
//cleanup
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//test5.1-Prevent let planes take-off which are not at the airport 
console.log('=====================');
console.log('test5.1-Prevent let planes take-off which are not at the airport')
//arrange
airport = new Airport();
plane = { id: "plane" };
expected = "Sorry, this plane is not at the airport so it cannot take off";
//act
airport.send()
actual = airport.send();
//assert
result = assertEquals(actual, expected);
console.log(`test5.1-Prevent let planes take-off which are not at the airport; ${result}`)
//cleanup
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//test5.2-Prevent landing a plane that's already landed 
console.log('=====================');
console.log('test5.2-Prevent landing a plane that\'s already landed')
//arrange
airport = new Airport();
plane = { id: "plane" };
expected = "Sorry, this plane is already at the airport so it cannot land";
//act
airport.land()
actual = airport.land();
//assert
result = assertEquals(actual, expected);
console.log(`test5.2-Prevent landing a plane that's already landed ; ${result}`)
//cleanup
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


