const test = require('../test-framework.js');
const Plane = require('../src/plane.js');
const Airport = require('../src/airport.js');


console.log('Test 1: Land plane');
test.it('Add plane to airport', () => {
    //setup
    let plane = 'plane A';
    let airport = new Airport;
    let expectedOutput = 1;
    let actualOutput;

    //execute
    actualOutput = airport.land(plane).length;
    
    //verify
    test.assertEquals(actualOutput, expectedOutput);
});

console.log('Test 2: Override default capacity'); 
test.it('Expand original capacity', () => {
    //setup
    let planes = [1, 2, 3];
    let airport = new Airport;
    let expectedOutput = 3;
    let actualOutput;
    //execute
    actualOutput = airport.capacity(planes).length;
    
    //verify
    test.assertEquals(actualOutput, expectedOutput);
});

console.log('Test 3: Prevent landing when airport is full'); 
test.it('Cannot let plane land at airport', () => {
    //setup
    //let planes = new Plane(3);
    let airport = new Airport;
    let planeA = new Plane;
    let planeB = new Plane;
    let planeC = new Plane;
    let expectedOutput = 3;
    let actualOutput;
    
    //execute
    actualOutput = (airport.land(planeA), airport.land(planeB), airport.land(planeC)).length;      

    //verify
    test.assertEquals(actualOutput, expectedOutput);  

});
console.log('Test 4: Plane take off and confirm');
test.it('Plane leaves airport', () => {

    //setup
   // let plane = new Plane;
    let airport = new Airport;
    airport.planeList = [1, 2, 3];
    
    let expectedOutput = 2;
    //airport.planeList = [1, 2, 3];
    //execute
    let actualOutput = airport.takeOff().length;
    
    //verify
    console.log(actualOutput);
    test.assertEquals(actualOutput, expectedOutput);
});
console.log('Test 5A: Prevent takeoff of planes not in airport');
test.it('False takeoff', () => {
    //setup
    
    let airport = new Airport;
    let actualOutput;
    let landed = false;
    let expectedOutput = false;
    //execute
    actualOutput = airport.isLanded(landed);
    
    //verify
    test.assertEquals(actualOutput, expectedOutput);
});
console.log('Test 5B: Prevent landing of already landed planes');
test.it('False landing', () => {
    //setup
    
    let airport = new Airport;
    let actualOutput;
    let flying = false;
    let expectedOutput = false;
    
    //execute
    actualOutput = airport.isFlying(flying);
    
    //verify
    test.assertEquals(actualOutput, expectedOutput);
});   

    
    

// //ATTEMPT AT JASMINE
// //Test 1
// describe('Tests 1-5', () => {

//     it('Test 1: Should land plane', () => {
//         let plane = new Plane;
//         let airport = new Airport;
//         let total = airport.land(plane);
//         expect(total.length).toBe(1);
//     });

// //Test 2
//     it('Test 2: Can default capacity be overridden', () => {
//         let airport = new Airport(12);
//         let new Airport = 12;
//         let total = airport.capacity;
//         expect(total).toBe(12);
//     });

// //Test 3
//     it('Test 3: Prevent landing when airport is full', () => {
//         let airport = new Airport;
//         let capacity = new Capacity;
//         airport.land(plane);
//         airport.land(plane);
//         airport.land(plane);
//         let total = airport.land(plane);
//         expect(total).toBe('Error: Airport full');
//     });
// //Test 4
//     it('Test 4: Plane take off and confirm', () => {
//         let airport = new Airport;
//         let total = airport.takeOff(plane);
//         expect(total).toBe(0);
//     });
// // Test 5(A)
//     it('Test 5 pt 1: Prevent takeoff of planes not in airport', () => {
//         let airport = new Airport;
//         let plane = new Plane;
//         let total = airport.takeOff(plane);
//         expect(total).toBe('Err: Plane not in airport');
//     });

// // Test 5(B)
// it('Test 5 pt 2: Prevent landing of already landed planes', () => {
//     let airport = new Airport;
//     let plane = new Plane;
//     let total = airport.land(plane);
//     expect(total).toBe('Err: Plane has already landed');
// });
    
