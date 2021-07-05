//Dependencies
const assertEquals = require('../test-framework.js')
const Airport = require('../src/airport.js');
const Airplane = require('../src/airplane.js');
const flying = require('../src/flying.js');

//Tests
let myAirport1 = new Airport('B1',3);
console.log(`B-1. Can we set the default airport capacity?: ${assertEquals(myAirport1.capacity, 3)}`);
//------------------------------------------------------
let myAirport2 = new Airport('B2', 3);
myAirport2.increaseCapacity(3);
console.log(`B-2. Can we increase airport capacity?: ${assertEquals(myAirport2.capacity, 6)}`);
//------------------------------------------------------
let myAirport3 = new Airport('B3', 3);
myAirport3.increaseCapacity(-2);
console.log(`B-3. Can we decrease airport capacity?: ${assertEquals(myAirport3.capacity, 1)}`);
//------------------------------------------------------
let myAirport4 = new Airport(0);
let myAirplane4 = new Airplane();
myAirport4.call(myAirplane4, flying);

console.log(`B-4. If airport capacity is maximum we can't land?: ${assertEquals(myAirplane4.location,'In Air')}`);
//------------------------------------------------------