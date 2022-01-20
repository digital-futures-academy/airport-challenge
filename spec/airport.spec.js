const assertStatements = require(`./test-framework.js`);
const Airport = require("../src/airport.js");


//***************//
//Jasmine testing//
//***************//

class MockPlane {
    planeID = 'T3ST-1NG';
    isLanded = false;
}

// class MockPlane {
//     constructor(planeID = 'T3ST-1NG') {
//         this.planeID = planeID;
//     }
// }

describe(`Airport:`, () => {
    describe(`Constructor:`, () => {
        it(`should be empty with new airport`, () => {
            //Arrange
            let testAirport = new Airport();
            //Act
            let actual = testAirport.getPlanes();
            //Assert
            expect(actual.length).toBe(0);
        });
        it(`should be set to input supplied in constructor`, () => {
            //Arrange
            let input = 5;
            let testAirport = new Airport(input);

            //Act
            let actual = testAirport.getCapacity();

            //Assert
            expect(actual).toBe(input);

        });
        it(`should be set to ID supplied in constructor`, () => {
            //Arrange
            let input = "LAX";
            let testAirport = new Airport(10, input);

            //Act
            let actual = testAirport.getID();

            //Assert
            expect(actual).toBe(input);
        });
    });
    describe(`Plane manipulation:`, () => {
        it(`should return an array`, () => {
            //Arrange
            let testAirport = new Airport();

            //Act
            let actual = testAirport.getPlanes();

            //Assert
            expect(actual).toBeInstanceOf(Array);
        });
        it(`should add Plane while airport is not full`, () => {
            //Arrange
            let testAirport = new Airport();
            let testPlane = new MockPlane();

            //Act
            testAirport.land(testPlane);
            let actual = testAirport.getPlanes();

            //Assert
            expect(actual.length).toBe(1);
        });
        it(`should not add Plane while airport is full`, () => {
            //Arrange
            let testAirport = new Airport(3);
            let testPlane1 = new MockPlane();
            let testPlane2 = new MockPlane();
            let testPlane3 = new MockPlane();
            testAirport.land(testPlane1);
            testAirport.land(testPlane2);
            testAirport.land(testPlane3);

            let testPlane = new MockPlane();

            //Act
            let actual = testAirport.land(testPlane);
            //let actual = testAirport.getPlanes();

            //Assert
            expect(actual).toBeInstanceOf(Error);
        });
        it(`should remove Plane from airport`, () => {
            //Arrange
            let testAirport = new Airport();
            let testPlane = new MockPlane();
            testAirport.land(testPlane);

            //Act
            testAirport.takeOff(testPlane);
            let actual = testAirport.getPlanes();

            //Assert
            expect(actual.length).toBe(0);
        });
        it(`should not remove Plane from empty airport`, () => {
            //Arrange
            let testAirport = new Airport(5, `LAX`);
            let testPlane = new MockPlane();

            //Act
            let actual = testAirport.takeOff(testPlane);

            //Assert
            expect(actual).toBeInstanceOf(Error);
        });
        it(`should not land an invalid object`, () => {
            //Arrange
            let testAirport = new Airport();
            let testObject = { 'test': 42 };
            //Act
            let actual = testAirport.land(testObject);

            //Assert
            expect(actual).toBeInstanceOf(Error);
            expect(testAirport.getPlanes().length).toBe(0);
        });
        it(`should not takeoff an invalid object at an empty airport`, () => {
            //Arrange
            let testAirport = new Airport();
            let testObject = { 'test': 42 };

            //Act
            let actual = testAirport.takeOff(testObject);

            //Assert
            expect(actual).toBeInstanceOf(Error);
            expect(testAirport.getPlanes().length).toBe(0);
        });
        it(`should not takeoff an invalid object`, () => {
            //Arrange
            let testAirport = new Airport();
            let testPlane = new MockPlane();
            let testObject = { 'test': 42 };
            testAirport.land(testPlane);
            // console.log(`testAirport.getPlanes: ${testAirport.getPlanes()}`);
            // console.log(`testAirport.getPlanes.length: ${testAirport.getPlanes().length}`);

            //Act
            let actual = testAirport.takeOff(testObject);

            //Assert
            expect(actual).toBeInstanceOf(Error);
            expect(testAirport.getPlanes().length).toBe(1);
        });
        it(`should not land in multiple airports`, () => {
            //Arrange
            let testAirport1 = new Airport();
            let testAirport2 = new Airport();
            let testPlane = new MockPlane();
            testAirport1.land(testPlane);

            //Act
            let actual = testAirport2.land(testPlane);

            //Assert
            expect(actual).toBeInstanceOf(Error);
            expect(testAirport1.getPlanes().length).toBe(1);
            expect(testAirport2.getPlanes().length).toBe(0);
        });
        it(`should not take off unless landed`, () => {
            //Arrange
            let testAirport = new Airport();
            let testPlane1 = new MockPlane();
            testAirport.land(testPlane1);
            let testPlane2 = new MockPlane();

            //Act
            let actual = testAirport.takeOff(testPlane2);

            //Assert
            expect(actual).toBeInstanceOf(Error);
            expect(testAirport.getPlanes().length).toBe(1);
        });
        it(`should not takeoff unless landed at the correct airport`, () => {
            //Arrange
            let testAirport1 = new Airport();
            let testAirport2 = new Airport();
            let testPlane = new MockPlane();
            testAirport1.land(testPlane);

            //Act
            let actual = testAirport2.takeOff(testPlane);

            //Assert
            expect(actual).toBeInstanceOf(Error);
            expect(testAirport1.getPlanes().length).toBe(1);
            expect(testAirport2.getPlanes().length).toBe(0);
        });
    });
    describe(`Weather manipulation:`, () => {
        it(`should produce valid weather when supplied with a < 1 float`, () => {
            //Arrange
            let testAirport = new Airport();

            //Act
            testAirport.setWeather(0.2);
            let actual = testAirport.getWeather();

            //Assert
            expect(actual).toBe(`sunny`);

        });
        it(`should produce valid weather when supplied with a int < weatherPossibilities.length`, () => {
            //Arrange
            let testAirport = new Airport();

            //Act
            testAirport.setWeather(2);
            let actual = testAirport.getWeather();

            //Assert
            expect(actual).toBe(`rainy`);
        });
        it(`should produce valid weather when supplied with a float < weatherPossibilities.length`, () => {
            //Arrange
            let testAirport = new Airport();

            //Act
            testAirport.setWeather(2.3);
            let actual = testAirport.getWeather();

            //Assert
            expect(actual).toBe(`rainy`);
        });
        it(`should produce valid weather when supplied with a string in weatherPossibilities`, () => {
            //Arrange
            let testAirport = new Airport();

            //Act
            testAirport.setWeather(`rainy`);
            let actual = testAirport.getWeather();

            //Assert
            expect(actual).toBe(`rainy`);
        });
        it(`should produce an error when supplied with an invalid string`, () => {
            //Arrange
            let testAirport = new Airport();

            //Act
            let actual = testAirport.setWeather(`inferno`);

            //Assert
            expect(actual).toBeInstanceOf(Error);
        });
        it(`should produce an error when supplied with an invalid number`, () => {
            //Arrange
            let testAirport = new Airport();

            //Act
            let actual = testAirport.setWeather(34);

            //Assert
            expect(actual).toBeInstanceOf(Error);
        });
        it(`should not allow planes to land while stormy`, () => {
            //Arrange
            let testAirport = new Airport();
            testAirport.setWeather(`stormy`);
            let testPlane = new MockPlane();

            //Act
            let actual = testAirport.land(testPlane);

            //Assert
            expect(actual).toBeInstanceOf(Error);
            expect(testAirport.getPlanes().length).toBe(0);
        });
        it(`should not allow planes to takeoff while stormy`, () => {
            //Arrange
            let testAirport = new Airport();
            let testPlane = new MockPlane();
            testAirport.land(testPlane);
            testAirport.setWeather(`stormy`);

            //Act
            let actual = testAirport.takeOff(testPlane);

            //Assert
            expect(actual).toBeInstanceOf(Error);
            expect(testAirport.getPlanes().length).toBe(1);
        });
    });
});


//***//
//OLD//
//***//
/*const Plane = require("../src/plane.js");

// const testingMethod = () => {
//     //Setup
//     let input = 0;
//     let expected = 0;
//     console.log(`Testing that ${input} => ${expected}`);
//     //Execute
//     let actual = methodToTest(input);
//     //Verify
//     let result = assertStatements.assertEquals(actual, expected);
//     console.log(`testingMethod \n expected = ${expected} \n actual = ${actual} \n assertEquals = ${result}`);

// }

const testNewAirport = () => {
    //Setup
    // let input = 0;
    // let expected = 0;
    airport1 = new Airport();
    //     console.log(`Testing that ${input} => ${expected}`);
    //Execute
    //     let actual = methodToTest(input);
    //Verify
    //     let result = assertStatements.assertEquals(actual, expected);
    //     console.log(`testingMethod \n expected = ${expected} \n actual = ${actual} \n assertEquals = ${result}`);
}

const testNewAirportIsEmpty = () => { //Converted to jasmine
    //Setup
    // let input = 0;
    let expected = 0;
    let airport1 = new Airport();
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    let actual = airport1.landedPlanes.length = 0;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testNewAirportIsEmpty\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testOverridingPlaneCapacityToNewAirport = () => {
    //Setup
    let input = 3;
    let expected = 3;
    let airport1 = new Airport();
    console.log(`Testing that ${input} => ${expected}`);
    //Execute
    airport1.maxPlaneCapacity = input;
    let actual = airport1.maxPlaneCapacity;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testOveridingPlaneCapacityToNewAirport\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testLandingPlane = () => {
    //Setup
    // let input = 0;
    let expected = 1;
    let plane1 = new Plane();
    let airport1 = new Airport();
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    airport1.land(plane1);
    let actual = airport1.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testLandingPlane\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testLandingPlaneInFullAirport = () => {
    //Setup
    // let input = 0;
    let airport1 = new Airport();
    airport1.maxPlaneCapacity = 3;
    let expected = airport1.maxPlaneCapacity;
    let plane1 = new Plane();
    let plane2 = new Plane();
    let plane3 = new Plane();
    let plane4 = new Plane();
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    airport1.land(plane1);
    airport1.land(plane2);
    airport1.land(plane3);
    airport1.land(plane4);
    let actual = airport1.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testLandingPlaneInFullAirport\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testPlaneTakingOff = () => {
    //Setup
    // let input = 0;
    let airport1 = new Airport();
    let expected = 0;
    let plane1 = new Plane();
    airport1.land(plane1);
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    airport1.takeOff(plane1);
    let actual = airport1.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testPlaneTakingOff\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testPlaneTakingOffInEmptyAirport = () => {
    //Setup
    // let input = 0;
    let airport1 = new Airport();
    let expected = 0;
    let plane1 = new Plane();
    // airport1.land(plane1);
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    airport1.takeOff(plane1);
    let actual = airport1.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testPlaneTakingOffInEmptyAirport\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testLandingNotAPlane = () => {
    //Setup
    // let input = 0;
    let airport1 = new Airport();
    let expected = 0;
    let notAPlane1 = new Airport();
    airport1.land(notAPlane1);
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    // airport1.takeOff(notAPlane1);
    let actual = airport1.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testLandingNotAPlane\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testNotAPlaneTakingOffInEmptyAirport = () => {
    //Setup
    // let input = 0;
    let airport1 = new Airport();
    let expected = 0;
    let notAPlane1 = new Airport();
    // airport1.land(plane1);
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    airport1.takeOff(notAPlane1);
    let actual = airport1.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testNotAPlaneTakingOffInEmptyAirport\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testNotAPlaneTakingOff = () => {
    //Setup
    // let input = 0;
    let airport1 = new Airport();
    let plane1 = new Plane("595NN");
    let plane2 = new Plane("646CA");
    let plane3 = new Plane("999GY");
    airport1.land(plane1);
    airport1.land(plane2);
    airport1.land(plane3);
    let notAPlane1 = new Airport();
    let expected = airport1.landedPlanes.length;
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    airport1.takeOff(notAPlane1);
    let actual = airport1.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testNotAPlaneTakingOff\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testSetWeatherUsingInt = () => {
    //Setup
    let input = 2;
    let airport1 = new Airport();
    let expected = airport1.weatherPossibilities[input];
    console.log(`Testing that airport1.weather => ${expected}`);

    //Execute
    airport1.setWeather(input);
    let actual = airport1.weather;

    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testSetWeatherUsingInt\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testSetWeatherUsingValidStr = () => {
    //Setup
    let input = `sunny`;
    let airport1 = new Airport();
    let expected = airport1.weatherPossibilities[0];
    console.log(`Testing that airport1.weather => ${expected}`);

    //Execute
    airport1.setWeather(input);
    let actual = airport1.weather;

    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testSetWeatherUsingValidStr\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testSetWeatherUsingInvalidInt = () => {
    //Setup
    let input = 78;
    let airport1 = new Airport();
    let expected = true;
    console.log(`Testing that instanceof Error => ${expected}`);

    //Execute
    let actual = airport1.setWeather(input) instanceof Error;

    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testSetWeatherUsingInvalidInt\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testSetWeatherUsingInvalidStr = () => {
    //Setup
    let input = `nonsense`;
    let airport1 = new Airport();
    let expected = true;
    console.log(`Testing that instanceof Error => ${expected}`);

    //Execute
    let actual = airport1.setWeather(input) instanceof Error;

    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testSetWeatherUsingInvalidStr\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

//todo: test landing/taking off in stormy weather
//

const airportSpec = {
    testNewAirport, //
    testNewAirportIsEmpty, //
    testOverridingPlaneCapacityToNewAirport, //
    testLandingPlane, //
    testLandingPlaneInFullAirport, //
    testPlaneTakingOff, //
    testPlaneTakingOffInEmptyAirport, //
    testLandingNotAPlane, //
    testNotAPlaneTakingOffInEmptyAirport, //
    testNotAPlaneTakingOff, //
    testSetWeatherUsingInt, //
    testSetWeatherUsingValidStr, //
    testSetWeatherUsingInvalidInt, //
    testSetWeatherUsingInvalidStr //
}

module.exports = airportSpec;*/