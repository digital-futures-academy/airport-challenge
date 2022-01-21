const { assertEquals } = require(`./test-frameworks`);
const { Plane } = require(`../src/plane`);



const testPlaneIsFlyingByDefault = () => {

    //Identity
    console.log('testPlaneIsFlyingByDefault \n ========== \n');


    //Arrange 
    const testPlane = new Plane('testPlane');
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
    const testPlane = new Plane('testPlane', landed = true);
    const expected = true;

    //Act
    const actual = testPlane.isLanded();


    //Assert

    const result = assertEquals(actual, expected);

    //Report
    console.log(`testPlaneIsLandedIfSupplied result: ${result} \n`);

};


const testPlaneHasStringName = () => {


    //Identity 
    console.log(`testPlaneHasStringName \n ========== \n`);


    //Arrange
    const testPlane = new Plane('testPlane1');
    const expected = 'string';

    //Act

    const actual = typeof testPlane.getName();

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testPlaneHasStringName result: ${result} \n`);

};

//New Test which is throw error if nothing isn't supplied as the Plane name

const testErrorIfNullPlaneName = () => {


    //Identity 

    console.log(`testErrorIfNullPlaneName \n ========== \n`);


    //Arrange
    const namePlane = null;
    const expected = true;

    //Act
    const testPlane = new Plane(namePlane);
    const actual = testPlane instanceof Error;

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testErrorIfNullPlaneName result: ${result} \n`);

}


const testErrorIfNameIsNonString = () => {

    //Identity 

    console.log(`testErrorIfNameIsNonString \n ========== \n`);


    //Arrange
    const namePlane = 1999;
    const expected = true;

    //Act
    const testPlane = new Plane(namePlane);
    const actual = testPlane instanceof Error;


    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testErrorIfNameIsNonString result: ${result} \n`);


};

//MIGHT NOT NEED THIS IF CAN CHANGE LANDING STATUS IN THE AIRPORT CLASS

const testChangingPlaneLandingStatus = () => {

    //Initial 
    console.log(`testChangingPlaneLandingStatus \n ============ \n`);

    //Arrange 
    const testPlane = new Plane('Test Plane');
    const expected = true;

    //Act
    testPlane.changeLandingStatus();
    const actual = testPlane.isLanded()

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testChangingPlaneLandingStatus result ${result} \n`);

};







planeTests = {
    testPlaneIsFlyingByDefault,
    testPlaneIsLandedIfSupplied,
    testPlaneHasStringName,
    testErrorIfNullPlaneName,
    testErrorIfNameIsNonString,
    testChangingPlaneLandingStatus

}

module.exports = planeTests;