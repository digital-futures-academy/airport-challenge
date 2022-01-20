const Airplane = require('../src/airPlane');
const Airport = require('../src/airport');
const AirTrafficController = require('../src/airTrafficController');
const assertEquals = require('./testFramework');

checkIfAirPortLandedPlane = () => {
    //setup
    const testAirport = new Airport();
    const testAirTrafficController = new AirTrafficController();
    const testAirplane = new Airplane();
    const expected = true;
    //act
    let input = false;
    let actual = landPlaneOrder();

    //result
    const result = assertEquals(actual,expected);
    console.log(`the Airport has landed is: ${result}`);
}

module.exports={
    checkIfAirPortLandedPlane
}