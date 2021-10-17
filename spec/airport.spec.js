const assertEquals = require('../test-framework');          //import from test-framework.js
const Airport = require('../src/airport');                  //import from airport.js
const Plane = require('../src/plane');

//Empty Variables                                           //create empty variables to be re-used later
let airport, result, plane;

//Test 1//
/*As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane*/


console.log('Has the plane landed at the airport?');             // console log the question at hand

//setup
airport = new Airport();                                        //create a new class instance for Airport

//execute
result = airport.landed('Airbus A350');                         //store landed(add) function into result variable

//verify
console.log(assertEquals(result.length, 1));                    //assertEqual to check both values of array length.

console.log(assertEquals(result.includes('Airbus A350'), true));        //check if Airbus A350 is included true or false
console.log(result);





//Test 2//
/*As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate*/

console.log('Airport has a default capacity of 3');           // create a console.log of question at hand
// setup
airport = new Airport();                                        //create a new class instance of Airport.
//execute

//verify
console.log(assertEquals(airport.defaultCapacity, 3));



console.log('Can override the default capacity of the Airport [3]');           // create a console.log of question at hand
// setup
airport = new Airport(6);                                                       //insert an override value
//execute

//verify
console.log(assertEquals(airport.defaultCapacity, 6));                          //check both values are the same



//Test 3//
/*As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full*/

console.log('Airport is full, unable to land');

//setup
airport = new Airport();                                        //create a new class instance for Airport
plane = new Plane();                                            //create a new class instance for Plane
plane2 = new Plane();
plane3 = new Plane();

//execute
airport.landed(plane);                                          // add each instance of plane  
airport.landed(plane2);
airport.landed(plane3);


//verify
console.log(assertEquals(airport.isFull(), true));

console.log('Airport is full, unable to land');

//setup 
airport = new Airport();                                        //create a new class instance for Airport
plane = new Plane();                                            //create a new class instance for Plane
plane2 = new Plane();
plane3 = new Plane();

//execute 
airport.landed(plane);                                          // add each instance of plane  
//airport.landed(plane2);
//airport.landed(plane3);                                       //commented out to run 2nd test


//verify
console.log(assertEquals(airport.isFull(), true));              //check to see if Airport is full



//Test 4//
/*As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport*/

console.log('Can i remove a plane from the airport?');

airport = new Airport();


result = airport.takeOff('Airbus A350');                            //store takeOff(remove) function into result variable


console.log(assertEquals(result.length, 0));                        //assertEqual to check both values of array length is empty

console.log(assertEquals(result.includes('Airbus A350'), 1));       //check if Airbus A350 is included(still in airport) true or false
console.log(result);                                                // check if array is empty


//Test 5//
/*As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed*/

console.log('can not land if already landed');

//setup
plane = 'Airbus A350';
airport = new Airport();
//execute
result = airport.hasLanded(plane);
result = airport.hasLanded(plane);
//verify
console.log(assertEquals(result, true));



console.log('can not take off if not in airport');

//setup
plane = 'Airbus A350';
airport = new Airport();
//execute
result = airport.hasTookOff(plane);
result = airport.hasTookOff(plane);
//verify
console.log(assertEquals(result, true));