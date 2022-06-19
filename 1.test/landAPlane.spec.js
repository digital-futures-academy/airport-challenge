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

test.it('Test that \'landAPlane\' lands a Plane when instructed when airport is empty', () => {
    const airport1 = new AIRPORT('airport1');

    airport1.weather = 'clear';

    const copyOfGlobalListOfPlanes = [...globalListOfPlanes];

    let inputPlaneObject = copyOfGlobalListOfPlanes[0]; //plane.planeID =  "PLANE1"


    airport1.landAPlane(inputPlaneObject);
    let value1;
    let checkPlaneID = () => {
        airport1.listOfLandedPlanes.forEach(elementObject => {
            if (inputPlaneObject.planeID === elementObject.planeID) {
                value1 = true;
                return value1;
            }
        });
    };
    checkPlaneID();

    //console.log(value1);

    test.assertEquals(value1, true);






});