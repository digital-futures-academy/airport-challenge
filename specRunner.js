const Airport = require("./src/airport") 
const { assertEquals, assertLarger } = require("./testing-framework");


let expected;
let result;
let actual;
let airport;
let plane;

//test 1 // As an air traffic controller So I can get passengers to a destination
// I want to instruct the airport to land a plane

console.log(`============================`);
console.log(`Test 1 - plane land in airport`);

//arrange

airport = new Airport();
plane = { id: `plane1` };
expected = 1;
capacity = 1

//act
airport.addPlane(plane)
airport.addPlane(plane)
actual = airport.airport.length;
console.log(airport.airport.length);

//Assert

result = assertEquals(actual, expected);
console.log(`Test 1: plane landed in airport: ${result}`);



basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;

// // As the system designer
// // So that the software can be used for many different airports
// // I would like a default airport capacity that can be overridden as appropriate

console.log(`============================`);
console.log(`Test 2 - defualt airport capacity`);

airport = new Airport(3);
plane = { id: `plane1` };
expected = 3;


airport.addPlane(plane);
airport.addPlane(plane);
airport.addPlane(plane);
//airport2.addPlane(plane);

console.log(airport);

actual = airport.airport.length;

result = assertEquals(actual, expected);
console.log(`Test 2: capacity default ${result}`);


basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;


console.log(`============================`);
console.log(`Test 2.5 - increase airport capacity`);

airport = new Airport();
plane = { id: `plane1` };
expected = 2;

airport.increaseCapacity(2)
airport.addPlane(plane);
airport.addPlane(plane);
//airport2.addPlane(plane);
//airport2.addPlane(plane);

console.log(airport);

actual = airport.airport.length;

result = assertEquals(actual, expected);
console.log(`Test 2.5: capacity default increase ${result}`);

basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

// // As an air traffic controller
// // To ensure safety
// // I want to prevent landing when the airport is full

console.log(`============================`);
console.log(`Test 3 - when airport is full prevent landing`);

airport = new Airport(2);
plane = { id: `plane1` };
expected = 'Airport full'

airport.addPlane(plane);
airport.addPlane(plane);
airport.addPlane(plane);

console.log(airport);

actual = airport.addPlane(plane);

result = assertEquals(actual, expected);
console.log(`Test 2: prevented landing ${result}`);




basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

// // As an air traffic controller
// // So I can get passengers on the way to their destination
// // I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport




console.log(`============================`);
console.log(`Test 4 - I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport`);

airport2 = new Airport(2);
plane = { id: `plane1` };
expected = 0;


airport2.addPlane(plane);
airport2.removePlane(plane);


console.log(airport2);

actual = airport2.airport.length;

result = assertEquals(actual, expected);
console.log(`Test 4: plane left airport ${result}`);




basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;




// As an air traffic controller
// To avoid confusion
// I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed


console.log(`============================`);
console.log(`Test 5 -land a plane that's already landed`);

airport = new Airport(3);
plane = { id: `plane1` };
plane2 = { id: `plane2` };
expected = 'plane already in airport'


airport.addPlane(plane);

actual = airport.addPlane(plane);
console.log(airport);

result = assertEquals(actual, expected);
console.log(`Test 5: plane is already in airport ${result}`);




// basket = null;
// item = null;
// expected = undefined;
// actual = undefined;
// result = undefined;




// console.log(`============================`);
// console.log(`Test 5.5 - I want to prevent asking the airport to let planes take-off which are not at the airport`);

// airport2 = new Airport(3);
// plane = { id: `plane1` };
// plane2 = { id: `plane2` };
// expected = 'plane not in airport'


// airport2.addPlane(plane);
// airport2.addPlane(plane2);
// airport2.addPlane(plane2);

// airport2.removePlane(plane);


// console.log(airport2);

// actual = airport2.removePlane(plane);


// result = assertEquals(actual, expected);
// console.log(`Test 5: plane is not in airport ${result}`);



 


