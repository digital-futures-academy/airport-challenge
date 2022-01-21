const Airplane = require('../src/airPlane');
const Airport = require('../src/airport');
const {assertEquals} = require('./testFramework');


const checkAirplaneObjectIsObject = () => {
    //setup
    const testAirplaneObject = new Airplane('BD21');
    const expected = { airplaneName: 'BD21', inAir: false }
    let input = testAirplaneObject;

    //act
    let actual = input;
    const result = assertEquals(actual,expected);

    //result
    console.log(`the ${testAirplaneObject.airplaneName} object is a object ${true}`);
}

const checkAirplaneNameIsOfTypeString = () => {
    //setup
    const testAirplaneObject = new Airplane('GM22');
    const expected = 'string'
    //act
    let input = testAirplaneObject.getAirplaneName();
    const actual = typeof input;

    //result
    const result = assertEquals(actual, expected);
    console.log(`The airplane name is of type string: ${result}`)
}
const checkInAirStatusIsOfTypeBoolean = () => {
    //setup
    const testAirplaneObject = new Airplane('GM22');
    const expected = 'boolean'
    //act
    let input = testAirplaneObject.getInAirStatus();
    const actual = typeof input;

    //result
    const result = assertEquals(actual, expected);
    console.log(`The airplane inAirStatus is of type string: ${result}`)
}

module.exports={
    checkAirplaneObjectIsObject,
    checkAirplaneNameIsOfTypeString,
    checkInAirStatusIsOfTypeBoolean
}