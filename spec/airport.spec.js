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



