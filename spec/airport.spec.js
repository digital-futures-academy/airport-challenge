const Airport = require("../src/airport");
const { assertEquals } = require("../testing-framework");
const { assertTrue } = require("../testing-framework");



let expected, actual, result;

console.log('Test 1: plane is added to planeAtAirstrip array?  ')
//Arrange
newAirport = new Airport()
plane1 = 'Boeing 237'
expected = 1;

//Act
newAirport.landplane(plane1)
actual = newAirport.planesAtAirstrip.length

//Assert
result = assertEquals(expected, actual)
console.log(`There is currenlty 1 plane on the airstrip: ${result}`)

// Clean up
newAirport = null;
actual = undefined;
expected = undefined;
result = undefined;


console.log('====================================')
console.log('Test 1.5: confirmation message of plane laned?  ')
//Arrange
newAirport = new Airport()
plane1 = 'Boeing 237'
expected = 'Plane has successfully landed at the airstrip';

//Act
actual = newAirport.landplane(plane1)

//Assert
result = assertEquals(expected, actual)
console.log(`Plane has successfully landed: ${result}`)

// Clean up
newAirport = null;
actual = undefined;
expected = undefined;
result = undefined;

console.log('====================================')
console.log('Test 2: Airport/airstrip has a default capacity ')
//Arrange
newAirport = new Airport()
expected = 3;

//Act
actual = newAirport.capacity

//Assert
result = assertEquals(expected, actual)
console.log(`The airport can only land 3 planes on the airstrip: ${result}`)

// Clean up
newAirport = null;
actual = undefined;
expected = undefined;
result = undefined;

console.log('====================================')
console.log('Test 2.5: Airport/airstrip capacity can be changed')
//Arrange
newAirport = new Airport()
expected = 6;

//Act
newAirport.changeCapacity(6)
actual = newAirport.capacity


//Assert
result = assertEquals(expected, actual)
console.log(`The airport can now land 6 planes on the airstrip: ${result}`)

// Clean up
newAirport = null;
actual = undefined;
expected = undefined;
result = undefined;

console.log('====================================')
console.log('Test 3: Plane is not added to array when capacity is full ')
//Arrange
newAirport = new Airport()
expected = 3;

//Act
newAirport.landplane('Boeing 244')
newAirport.landplane('Boeing 267')
newAirport.landplane('Boeing 123')
newAirport.landplane('Boeing 334')
actual = newAirport.planesAtAirstrip.length

//Assert
result = assertEquals(expected, actual)
console.log(`Airstrip currently has 3 planes can not land any more: ${result}`)

// Clean up
newAirport = null;
actual = undefined;
expected = undefined;
result = undefined;

console.log('====================================')
console.log('Test 3.5: Message returned when plane is not added to array when capacity is full ')
//Arrange
newAirport = new Airport()
expected = 'Im Sorry you can not land here, the airstrip is full';

//Act
newAirport.landplane('Boeing 244')
newAirport.landplane('Boeing 267')
newAirport.landplane('Boeing 123')
actual = newAirport.landplane('Boeing 334')


//Assert
result = assertEquals(expected, actual)
console.log(`Airport is full, you cannot land here: ${result}`)

// Clean up
newAirport = null;
actual = undefined;
expected = undefined;
result = undefined;

console.log('====================================')
console.log('Test 4: Plane has been removed from the array ')
//Arrange
newAirport = new Airport()
expected = 2;

//Act
newAirport.landplane('Boeing 244')
newAirport.landplane('Boeing 267')
newAirport.landplane('Boeing 123')
newAirport.planeTakesOff()
actual = newAirport.planesAtAirstrip.length

//Assert
result = assertEquals(expected, actual)
console.log(`Plane has taken off, there is currently 2 plane on the airstrip: ${result}`)

// Clean up
newAirport = null;
actual = undefined;
expected = undefined;
result = undefined;



console.log('====================================')
console.log('Test 4.5: Message returned when plane has been removed from array ')
//Arrange
newAirport = new Airport()
expected = 'Plane has succesfully taken off and left the airstrip';

//Act
newAirport.landplane('Boeing 244')
newAirport.landplane('Boeing 267')
newAirport.landplane('Boeing 123')
actual = newAirport.planeTakesOff()


//Assert
result = assertEquals(expected, actual)
console.log(`Plane has successfully taken off confirmation: ${result}`)

// Clean up
newAirport = null;
actual = undefined;
expected = undefined;
result = undefined;