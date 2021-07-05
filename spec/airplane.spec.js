//Dependencies
const assertEquals = require('../test-framework.js');
const Airplane = require('../src/airplane.js');
const Airport = require('../src/airport.js');
const flying = require('../src/flying.js');

//Tests

let myAirplane1 = new Airplane();
let myAirport1 = new Airport('A1', 4);

myAirport1.call(myAirplane1, flying);

console.log(`A-1. Can we tell a plane to land?: ${assertEquals(myAirplane1.location, 'A1')}`);
//------------------------------------------------------
let myAirport2 = new Airport('A2', 4)
let myAirplane2 = new Airplane();
myAirport2.call(myAirplane2, flying);
flying.call(myAirplane2, myAirport2);

console.log(`A-2. Can we tell a plane to take off?: ${assertEquals(myAirplane2.location, 'In Air')}`);
//------------------------------------------------------
let myAirport3 = new Airport('A3', 4)
let myAirplane3 = new Airplane(myAirport3);
flying.call(myAirplane3, myAirport3);

console.log(`A-3. Can we check if plane is not at the airport?: ${assertEquals(myAirplane3.location, 'In Air')}`);
//------------------------------------------------------
let myAirport4= new Airport('A4', 2);
let myAirport4_2 = new Airport('A4_2', 3);
let myAirplane4 = new Airplane(myAirport4);
flying.call(myAirplane4, myAirport4_2);

console.log(`A-4. Can we prevent asking planes to take-off which are not at the airport?: ${assertEquals(myAirplane4.location,myAirport4.name)}`); 
//------------------------------------------------------
let myAirport5 = new Airport(7);
let myAirport5_2 = new Airport(9);
let myAirplane5 = new Airplane(myAirport5);
myAirport5_2.call(myAirplane5, flying);

console.log(`A-5. Can we prevent planes landing that are already landed?: ${assertEquals(myAirplane5.location,myAirport5.name)}`); 
//------------------------------------------------------
