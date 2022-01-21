const Airplane = require('../src/airPlane');
const Airport = require('../src/airport');
// const AirTrafficController = require('../src/airTrafficController');
const {assertEquals} = require('./testFramework');

checkIfAnAirPortLandedPlane = () => {
    //setup
    const testAirplane = new Airplane('BA21', true);
    const testAirport = new Airport('Heathrow')
    const expected = true;

    //act
    let actual = testAirport.landPlane(testAirplane);

    //result
    const result = assertEquals(actual,expected);
    console.log(`the Airport has landed is: ${result}`);
}

//testAirportaddedplanetoArray

checkIfAirportCapacityOverridden = () => {
    //set up
    const testAirport = new Airport('Heathrow')
    const expected = 10;
    let newCapacity = 10;

    //act
    let actual = testAirport.changeCapacity(newCapacity);

    //result
    const result = assertEquals(actual,expected);
    console.log(`new capacity has been updated: ${result}`);
}
//check if integer entered



module.exports={
    checkIfAnAirPortLandedPlane,
    checkIfAirportCapacityOverridden
}