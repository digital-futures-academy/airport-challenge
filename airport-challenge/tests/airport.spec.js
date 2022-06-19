const Airport = require("../src/airport")
const { assertEquals } = require("../test-FW"); //

console.log('====User story 1.1====')

//arrange'
testName = `Test that plane lands and returns ID of plane`
const testAirport = new Airport();
const testPlane = {
    id: `FR1907`
}

//act

testAirport.planeLand(testPlane);
let actualResult = testAirport.planesAtAirport[0]?.id //?. only access id if it exists, otherwise returns undefined.

//assert
let result = assertEquals(actualResult, testPlane.id)

//report
console.log(result ? `PASS` : `FAIL`);


console.log('==== User Story 2 ====')


//arrange'
testName = `Test that default airport capacity changes`
const testAirport1 = new Airport(); //we don't change 'new Airport' because that is the class.


//act
const newCapacityNumber = 100
actualResult = testAirport1.changeCapacity(newCapacityNumber);

//assert
result = assertEquals(actualResult, newCapacityNumber)

//report
console.log(result ? `PASS` : `FAIL`);


console.log('==== User Story 3 ====')


//arrange'
testName = `Test that plane does not land when airport capacity is full`
const testAirport2 = new Airport(); //we don't change 'new Airport' because that is the class.


//act
const fullCapacity = 250
actualResult = testAirport2.preventLanding(fullCapacity);

//assert
result = assertEquals(actualResult, fullCapacity);

//report
console.log(result ? `PASS` : `FAIL`);

console.log(`==== User Story 4 ====`)

//arrange
testName = `Test that plane takes off successfully and produces take off message`
testAirport3 = new Airport();
const testPlane2 = { id: `FR1907` } // I can't figure out why this line is broken

//act

testAirport.planeFly(testPlane);
actualResult = testAirport.planesAtAirport[0]?.id //?. only access id if it exists, otherwise returns undefined.

//assert
result = assertEquals(actualResult, testAirport.id)

//report
console.log(result ? `PASS` : `FAIL`);


console.log(`==== User Story 5 ====`)


//arrange    
testName = (`Test that airport is not asked to land plane if the plane is already landed or not at the airport`)
const testAirport4 = new Airport();

//act
//Here you want to define your variables such as actual result


//assert
result = // insert assertEquals from testFMW

    //report

    console.log(result ? `PASS` : `FAIL`);






