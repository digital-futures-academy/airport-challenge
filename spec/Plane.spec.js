const Plane = require('../src/Plane');
const Test = require('../test-framework/test-framework');

/** AC - 1 */
Test.it('Check plane flying status when landed', () => {

    let plane;

    plane = new Plane(777, true);
    expectedOutput = false;

    plane.landed();
    
    result = Test.assertEquals(expectedOutput, plane.landed());

    console.log(result);
});