/*As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
*/

const { assert } = require("console");
const assertEquals = require("../../../Week 2/mse-software-design/units/ood/Demo-18-01-22/SecretDiaryDecoupled/test-framework");

const testPlanesLandAtAirport = () => {

    //arrange 
    const testAirport = new Airport()
    const expected = true;

    //act
    const actual = airport.planeLanded

    //assert
    const result = assertEquals(actual, expected);

    //report
    console.log(`Plane has landed at airport ${result}`)
}