const test = require('../test-framework');
const AIRPORT = require('../1.classes/classAIRPORT');
const PLANE = require('../1.classes/classPlane');


console.log('---------takeOFF() tests---------');


let globalListOfPlanes = [];
for (let i = 1; i < 11; i++) {
    globalListOfPlanes = [...globalListOfPlanes, new PLANE('PLANE' + i)];
}
Object.freeze(globalListOfPlanes); //no more changes
//console.log(globalListOfPlanes);

test.it('Take Off a plane which is currently landed in airport and give a confirmation', () => {
    // Arrange
    const airport1 = new AIRPORT('airport1');

    airport1.weather = 'clear';//setter for weather

    airport1.copyOfGlobalListOfPlanes = [...globalListOfPlanes];//cloning the array as the landAPlane function makes changes in plane.landedAt property hence changing the array.

    for (let i = 0; i < 4; i++) {
        airport1.landAPlane(airport1.copyOfGlobalListOfPlanes[i]);
    } //fills airport2.listOfLandedPlanes with planeID from PLANE1 to PLANE4


    let testPlaneObject = airport1.copyOfGlobalListOfPlanes[2]; //where planeID =  "PLANE3"



    // Act/Assert
    test.assertEquals(airport1.takeOff(testPlaneObject), `${testPlaneObject.planeID} has Taken Off from airport1!`); //if listOfLandedPlanes includes PLANE1 test should pass
});