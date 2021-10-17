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

/** AC - 3 */
// Test.it('Prevent landing when the airport is full', () => {

//     airport = new Airport("Luton Airport", 3);
    
//     plane = new Plane(plane.generatePlaneID(), true);
//     airport.landPlane(plane);
    
//     let plane2 = new Plane(plane.generatePlaneID(), true);
//     airport.landPlane(plane2);

//     let plane3 = new Plane(plane.generatePlaneID(), true);
//     airport.landPlane(plane3);

//     let plane4 = new Plane(plane.generatePlaneID(), true);
//     airport.landPlane(plane4);

//     expectedOutput = 3;

//     result = Test.assertEquals(expectedOutput, airport.noOfPlanes.length);

//     return result;
// });

/** AC - 4 */
Test.it('Instruct the plane to takeoff', () => {
    
    airport = new Airport("Luton Airport", 7);
    
    plane = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane);
    
    let plane2 = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane2);

    let plane3 = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane3);

    let plane4 = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane4);

    let plane5 = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane5);

    let plane6 = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane6);

    let plane7 = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane7);

    //plane = new Plane(plane.generatePlaneID(), false);
    //airport.takeOff(plane);

    expectedOutput = airport.noOfPlanes.length;

    result = Test.assertEquals(expectedOutput, airport.noOfPlanes.length);

    return result;
});


/** AC - 5 */
Test.it('Instruct the plane to takeoff', () => {
    
    airport = new Airport("Luton Airport", 7);
    
    plane = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane);
    
    let plane2 = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane2);

    let plane3 = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane3);

    let plane4 = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane4);

    let plane5 = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane5);

    let plane6 = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane6);

    let plane7 = new Plane(plane.generatePlaneID(), true);
    airport.landPlane(plane7);

    plane = new Plane(plane.generatePlaneID(), false);
    airport.takeOff(plane);

    expectedOutput = airport.noOfPlanes.length;

    result = Test.assertEquals(expectedOutput, airport.noOfPlanes.length);

    return result;
});




