const assertEquals = require('../test-framework');          //import from test-framework.js
const Airport = require('../src/airport');                  //import from airport.js


//Empty Variables                                           //create empty variables to be re-used later
let airport, result;

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




