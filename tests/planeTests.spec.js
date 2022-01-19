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


const testPlaneHasStringName = () => {


    //Identity 
    console.log(`testPlaneIsOnlyString \n ========== \n`);


    //Arrange
    const testPlane = new Plane('plane1');
    const expected = 'string';

    //Act

    const actual = typeof testPlane.getName();

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testPlaneIsOnlyString result: ${result}`);

};

//New Test which is throw error if nothing isn't supplied as the Plane name

const testErrorIfNullPlaneName = () => {

    //Identity


    //Arrange

    //Act

    //Assert

}








// const testNoNonStringPlanes = () => {

//     //Identity 
//     console.log(`testNoNonStringPlanes \n ========== \n`);


//     //Arrange
//     input = new Airport();
//     expected = true;

//     //Act

//     const nonStringPlane = input.landPlane();
//     actual = nonStringPlane instanceof Error;

//     //Assert
//     result = assertEquals(actual, expected);

//     //Report
//     console.log(`testNoNonStringPlanes result: ${result}`);


// };




planeTests = { testPlaneIsFlyingByDefault, testPlaneIsLandedIfSupplied, testPlaneHasStringName }
module.exports = planeTests;