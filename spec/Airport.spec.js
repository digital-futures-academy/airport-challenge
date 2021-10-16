const Test = require('../test-framework/test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

let airport = new Airport();
let plane = new Plane();
let  expectedOutput, result, airportCap;

/** AC - 1 */
// Test.it('Instruct plane to land at the airport', () => {
//     const currentPlaneID = plane.generatePlaneID();
    
//     airport = new Airport();

//     plane = new Plane(currentPlaneID, true);

//     expectedOutput = 1;

//     airport.landPlane(plane);
    
//     result = Test.assertEquals(expectedOutput, airport.planes.length);

//     console.log(result);
//     console.log(currentPlaneID);

// });

// /** AC - 2 */
// Test.it('Check Airport Capacity and change airport capacity', () => {
//     airportCap = 3;

//     airport = new Airport("Gatwick", airportCap);

//     expectedOutput = 3;

//     result = Test.assertEquals(expectedOutput, airport.airportCapacity);
//     airport._airportCapacity
//     console.log(result);

// });

Test.it('Prevent landing when the airport is full', () => {
    airportCap = 3;
    // const currentPlaneID = plane.generatePlaneID();

    airport = new Airport("Luton Airport", airportCap);
    plane = new Plane(plane.generatePlaneID(), true);
    let plane2 = new Plane(plane.generatePlaneID(), true);
    let plane3 = new Plane(plane.generatePlaneID(), true);
    let plane4 = new Plane(plane.generatePlaneID(), true);


    expectedOutput = 3;

    airport.landPlane(plane);
    airport.landPlane(plane2);
    airport.landPlane(plane3);
   //airport.landPlane(plane4);

    result = Test.assertEquals(expectedOutput, airport.hanger.length);

    console.log(result);
});




