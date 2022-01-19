const { assertEquals } = require(`./test-frameworks`);
const { Plane } = require(`../src/plane`);



const testPlaneIsFlyingByDefault = () => {

    //Identity
    console.log('testPlaneIsFlyingByDefault \n ========== \n');


    //Arrange 
    const testPlane = new Plane();
    const expected = false;

    //Act
    const actual = testPlane.isLanded();


    //Assert

    const result = assertEquals(actual, expected);

    //Report
    console.log(`testPlaneIsFlyingByDefault result: ${result} \n`);

};


const testPlaneIsLandedIfSupplied = () => {

    //Identity
    console.log('testPlaneIsLandedIfSupplied \n ========== \n');


    //Arrange 
    const testPlane = new Plane(landed = true);
    const expected = true;

    //Act
    const actual = testPlane.isLanded();


    //Assert

    const result = assertEquals(actual, expected);

    //Report
    console.log(`testPlaneIsLandedIfSupplied result: ${result} \n`);

};













planeTests = { testPlaneIsFlyingByDefault, testPlaneIsLandedIfSupplied }
module.exports = planeTests;