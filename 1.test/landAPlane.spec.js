const test = require('../test-framework');
const AIRPORT = require('../1.classes/classAIRPORT');
const PLANE = require('../1.classes/classPlane');


console.log('---------landAPlane() tests---------');

let globalListOfPlanes = [];
for (let i = 1; i < 11; i++) {
    globalListOfPlanes = [...globalListOfPlanes, new PLANE('PLANE' + i)];
}
Object.freeze(globalListOfPlanes); //no more changes
//console.log(globalListOfPlanes);

test.it('Test 1. Test that \'landAPlane\' lands a Plane when instructed when airport is empty', () => {
    const airport1 = new AIRPORT('airport1');

    airport1.weather = 'clear';//setter for weather

    const copyOfGlobalListOfPlanes = [...globalListOfPlanes];//coping the array as the landAPlane function makes changes in plane properties

    let testPlaneObject = copyOfGlobalListOfPlanes[0]; //where planeID =  "PLANE1"

    //console.log(value1);
    test.assertEquals(airport1.landAPlane(testPlaneObject), `${testPlaneObject.planeID} has now landed!`);

});


test.it('Test 2. Test that \'landAPlane\' lands a Plane when instructed when airport is partially filled', () => {
    const airport2 = new AIRPORT('airport2');

    airport2.weather = 'clear'; //setter for weather

    const copyOfGlobalListOfPlanes = [...globalListOfPlanes]; //coping the array as the landAPlane function makes changes in plane properties



    for (let i = 0; i < 4; i++) {
        airport2.landAPlane(copyOfGlobalListOfPlanes[i]);
    } //fills airport2.listOfLandedPlanes with planeID from PLANE1 to PLANE4

    let testPlaneObject = copyOfGlobalListOfPlanes[4]; //where planeID =  "PLANE5"


    test.assertEquals(airport2.landAPlane(testPlaneObject), `${testPlaneObject.planeID} has now landed!`);
});