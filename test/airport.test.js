const Airplane = require('../src/airPlane');
const Airport = require('../src/airport');
// const AirTrafficController = require('../src/airTrafficController');
const {assertEquals} = require('./testFramework');

checkIfAnAirportLandedPlane = () => {
    //test
    console.log(`checkIfAnAirPortLandedPlane \n ========= \n`);

    //setup
    const testAirplane = new Airplane('BA21', true);
    const testAirport = new Airport('Heathrow');
    const expected = true;

    //act
    let actual = testAirport.landPlane(testAirplane);

    //result
    const result = assertEquals(actual,expected);
    console.log(`The ${testAirplane.airplaneName} has landed is: ${result}\n`);
}

checkIfAirportCapacityOverridden = () => {
    //test
    console.log(`checkIfAirportCapacityOverridden \n ========= \n`);

    //set up
    const testAirport = new Airport('Heathrow');
    const expected = 10;
    let newCapacity = 10;

    //act
    let actual = testAirport.changeCapacity(newCapacity);

    //result
    const result = assertEquals(actual,expected);
    console.log(`${testAirport.airportName} capacity has been updated: ${result}\n`);
}

checkIfIntegerEnteredForAirportCapacity = () => {
    //test
    console.log(`checkIfIntegerEnteredForAirportCapacity \n ========= \n`)

    //setup
    const testAirport = new Airport('Heathrow');
    const expected = false;
    let newCapacity = 'ten';

    //act
    let actual = testAirport.changeCapacity(newCapacity);

    //result
    const result = assertEquals(actual,expected);
    console.log(`${testAirport.airportName} capacity has failed to update: ${result}\n`);

}

checkIfAnAirportLandedPlaneWhenFull = () => {
    //test
    console.log(`checkIfAnAirportLandedPlaneWhenFull \n ========= \n`);

    //setup
    const testAirplane = new Airplane('BA23', true);
    const testAirport = new Airport('Dhaka');
    testAirport.parkedPlanes = [1,2,3,4,5];
    //expected is false as it is prevented
    const expected = false;

    //act
    let actual = testAirport.landPlane(testAirplane);

    //result
    const result = assertEquals(actual,expected);
    console.log(`${testAirport.airportName} had no capacity: ${result}\n`);
}

checkIfPlaneTakenOffAndConfirmedWithAirport = () => {
    //test
    console.log(`checkIfPlaneTakenOffAndConfirmedWithAirport \n ========= \n`);

    //set up
    const testAirplane = new Airplane('BA24');
    const testAirport = new Airport('Dubai');

    //parking a plane for the set up
    testAirport.parkedPlanes.push(testAirplane.airplaneName);
    const expected = true;

    //act
    let input = testAirport.takeOffPlane(testAirplane);
    let actual = input;
    //result
    const result = assertEquals(actual,expected);
    console.log(`${testAirplane.airplaneName} has taken off from: ${testAirport.airportName} is: ${result}\n`);
}

checkIfPlaneCanLandAtAnotherAirportIfAlreadyLanded = () => {
    //test
    console.log(`checkIfPlaneCanLandAtAnotherAirportIfAlreadyLanded \n ========= \n`);

    //set up
    const testAirplane = new Airplane('BA24');
    const testAirport = new Airport('Tokyo');
    const testAirport2 = new Airport('Dubai');

    //parking a plane in first airport for the set up
    testAirport.parkedPlanes.push(testAirplane.airplaneName);
    const expected = false;

    //act
    let input = testAirport2.landPlane(testAirplane);
    let actual = input;
    //result
    const result = assertEquals(actual,expected);
    console.log(`checkIfPlaneCanLandAtAnotherAirportIfAlreadyLanded passed is: ${result}\n`);
}

module.exports={
    checkIfAnAirportLandedPlane,
    checkIfAirportCapacityOverridden,
    checkIfAnAirportLandedPlaneWhenFull,
    checkIfPlaneTakenOffAndConfirmedWithAirport,
    checkIfIntegerEnteredForAirportCapacity,
    checkIfPlaneCanLandAtAnotherAirportIfAlreadyLanded
}