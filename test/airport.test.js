const {Airplane} = require('../src/airPlane');
const {Airport} = require('../src/airport');
const {AirTrafficController} = require('../src/airTrafficController');
const {assertEquals} = require('./testFramework');

checkIfAirPortLandedPlane = () => {
    //setup
    // const testAirplane = new Airplane('BA21', true);
    // const testAirport = new Airport('Heathrow');
    const testAirTrafficController = new AirTrafficController();
    const expected = true;

    //act
    let airplane = 'BA21';
    let airport = 'Heathrow';
    let actual = testAirTrafficController.landPlaneOrder(airplane, airport);

    //result
    const result = assertEquals(actual,expected);
    console.log(`the Airport has landed is: ${result}`);
}

module.exports={
    checkIfAirPortLandedPlane
}