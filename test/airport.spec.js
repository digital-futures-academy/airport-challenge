const test = require('../test-framework.js');
const Airport = require("../src/airport");
const Airplane = require("../src/airplane");

let expected;
let result;

// Test 1 - Airport#land()

console.log(`============================`);
console.log(`Test 1 - Airport#land()`);

//
test.it('Instruct the plane to land then Check whether the plane is landed or not', function() {
    // setup
    let airport = new Airport();
    let airplane1 = new Airplane(1);
    airport.land(airplane1);
    // execute
   result = airport.planesAtAirport.includes((airplane1));
    // verify
      test.assertEquals(result, true);
    });

   // Test 2 - Able to change the capacity of the Airport
   console.log(`============================`);
console.log(`Test 2 - New Airport()`);

//
test.it('Capacity of the Airport can be adjusted if required', function() {
    // setup
    let airport = new Airport();
    expected = 3;
   airport.setCapacity(3);
    // execute
      result = airport.capacity
    // verify
      test.assertEquals(result, expected);
    });

    // Test 3 - Check is the airport full or not
   console.log(`============================`);
   console.log(`Test 3 - Airport#land()`);
   
   //
   test.it('plane cannot land if airport is full', function() {
       // setup
       let airport = new Airport();
       let airplane1 =new Airplane(1);
       let airplane2 =new Airplane(2);
       let airplane3 =new Airplane(3);
       airport.land(airplane1);
       airport.land(airplane2);
       expected = "Sorry, The airport is full";
        // execute
       result= airport.land(airplane3);      
       // verify
         test.assertEquals(result, expected);
       });


  // Test 4 - Instruct the plane to takeoff then check is it still at the airport
   console.log(`============================`);
   console.log(`Test 4 - Airport#takeOff()`);
   
   //
   test.it('Check whether the plane still at the airport after instruct it to takeoff', function() {
       // setup
       let airport = new Airport();
       let airplane1 =new Airplane(1);
       airport.land(airplane1);
       airport.takeOff(airplane1);  
       expected ="Plane is no longer at the airport"
        // execute
       result= airport.takeOff(airplane1);      
       // verify
         test.assertEquals(result, expected);
       });

    // Test 5