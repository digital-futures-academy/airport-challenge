const assertEquals = require("../test-framework");
const Airport = require("../src/airport");
// const Plane = require("../src/plane")
const Weather = require("../src/weather")

const planeLanding = () => {                        //checks the length of the array to see whether the plane has been added to this. 
    //Arrange 
    const testAirport = new Airport();
    const expected = 1;

    //Act
    testAirport.landPlane()
    const actual = testAirport.landPlane.length

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`The Plane has successfully landed at the Airport: ${result}`)
};

const checkIfAirportIsFull = () => {              //uses .isFull to check if there is capacity. Returns a boolean value of true. 
    //Arrange 
    const testAirport = new Airport();
    const expected = true;

    //Act
    const actual = testAirport.isFull();

    //Assert
    const result = assertEquals(actual, expected);

    //Report 
    console.log(`The Airport has capacity: ${result}`)
};

const preventLandingIfAirportFull = () => {      // testPlane attempts a landing but an error is returned to due to no capacity, a falsy value returns. 

    //Arrange
    const testAirport = new Airport();
    const expected = false;
    const testPlane = ['Test Plane']

    //Act
    const landWhenFull = testAirport.landWhenFull(testPlane)
    const actual = landWhenFull instanceof Error;

    //Assert
    const result = assertEquals(actual, expected);

    //Report 
    console.log(`The Plane cannot land when the Airport is full: ${result}`)

};

const takeOffAndConfirmDeparture = () => {    //testPlane3 is added to the landed array, .length is used to check the expected array length equals 0 as the plane departs. 

    //Arrange 
    const testAirport = new Airport();
    const expected = 0
    const testPlane3 = ['Plane 3']

    //Act
    testAirport.landPlane('Plane 3')
    testAirport.departAndConfirm('Plane 3')
    const actual = testAirport.landed.length

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`The Plane (${testPlane3}) has departed from the Airport: ${result}`)

};

const preventLandingAlreadyLandedPlane = () => {      // The expected is false as it is expected that an error is returned when the landing is attempted 

    //Arrange 
    const testAirport = new Airport();
    const expected = false
    const testPlane5 = ['Test Plane 5']

    //Act
    const preventLanding = testAirport.preventLanding(testPlane5)
    const actual = preventLanding instanceof Error

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`The Plane does not need to land as it has already landed: ${result}`)

};


const preventLandingWhenStormy = () => {           // The expected is false as an error will be returned if the weather is stormy 

    //Arrange 
    const testWeather = new Weather()
    const expected = false
    const testPlane = ['Test Plane']

    //Act
    const stormyWeather = testWeather.stormyWeather(testPlane)
    const actual = stormyWeather instanceof Error;

    //Assert
    const result = assertEquals(actual, expected);

    //Report 
    console.log(`The Plane cannot land as the weather is stormy: ${result}`)

};

const preventTakeOffWhenStormy = () => {

    //Arrange 
    const testWeather = new Weather()
    const expected = false
    const testPlane = ['Test Plane']

    //Act
    const stormyWeather = testWeather.stormyWeather(testPlane)
    const actual = stormyWeather instanceof Error;

    //Assert
    const result = assertEquals(actual, expected);

    //Report 
    console.log(`The Plane cannot take off as the weather is stormy: ${result}`)

};


module.exports = {
    checkIfAirportIsFull,
    planeLanding,
    preventLandingIfAirportFull,
    takeOffAndConfirmDeparture,
    preventLandingAlreadyLandedPlane,
    preventLandingWhenStormy,
    preventTakeOffWhenStormy
};