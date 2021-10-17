const test = require('../test-framework.js');
const Plane = require('../src/plane.js');
const Airport = require('../src/airport.js');


console.log('Test 1: Land plane');
test.it('Add plane to airport', () => {
    //setup
    let plane = new Plane;
    let airport = new Airport;
    //execute
    let result = airport.land(plane);
    //verify
    test.assertEquals(result.length, 1);
});
console.log('Test 2: Override default capacity'); 
test.it('Expand original capacity', () => {
    //setup
    let plane = new Plane;
    let airport = new Airport;
    //execute
    let result = airport.capacity(plane);
    //verify
    test.assertEquals(result, 3);
});
console.log('Test 3: Prevent landing when airport is full'); 
test.it('Cannot let plane land at airport', () => {
    //setup
    let plane = new Plane(3);
    let airport = new Airport;
    let planeA = new Plane;
    let planeB = new Plane;
    let planeC = new Plane;
    airport.land(planeA);
    airport.land(planeB);
    airport.land(planeC);
       
    //execute
    let result = airport.land(plane);      

    //verify
    test.assertEquals(result, 3);  

});
console.log('Test 4: Plane take off and confirm');
test.it('Plane leaves airport', () => {

    //setup
    let plane = new Plane;
    let airport = new Airport;
    //execute
    let result = airport.takeOff(plane);
    //verify
    test.assertEquals(result, 0);
});
console.log('Test 5A: Prevent takeoff of planes not in airport');
test.it('False takeoff', () => {
    //setup
    let plane = new Plane;
    let airport = new Airport;
    //execute
    let result = airport.takeOff(plane);
    //verify
    test.assertEquals(result, 'error');
});
console.log('Test 5B: Prevent landing of already landed planes');
test.it('False landing', () => {
    //setup
    let plane = new Plane;
    let airport = new Airport;
    //execute
    let result = airport.land(plane);
    //verify
    test.assertEquals(result, 'error');
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
    
