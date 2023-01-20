const { assertEqual } = require('./test-framework.spec')
const Airport = require('../src/airport');
const Airplanes = require('../src/airplane');
const Weather = require('../src/weather');


let expected;
let actual;
let result;
let airport;
let airplane;

//Test 1 - airportLength increases by 1 when airplane lands in airport
console.log('===========================');
console.log('Test1 - This test adds airplane to airport when landPlane is called increasing airport.length by 1')

//Arrange
airport = new Airport();
airplane = new Airplanes('airplane');
expected = 1

//Act
airport.landPlane(airplane);
console.log(airport.airplaneList)
actual = airport.airplaneList.length

//Assert
result = assertEqual(expected, actual);
console.log(result ? 'Passed' : 'Failed')

//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
airplane = null;

console.log('===========================');

//Test 2 - Error message when input is null 
console.log('===========================');
console.log('Test2 - This test provides an error message when null is inputted into airplane')

//Arrange
airport = new Airport();
airplane = null;
expected = 0

//Act
airport.landPlane(airplane);
actual = airport.airplaneList.length;

//Assert
result = assertEqual(expected, actual);
console.log(result ? 'Passed' : 'Failed')
console.log(`The result is: ${result ? `This is an invalid input` : result} `)


//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
airplane = null;

console.log('===========================');

//Test 3 - Checks the capacity of the airport 
console.log('===========================');
console.log('Test3 - This tests checks to see if you can change the max capacity of the airport')

//Arrange
airport = new Airport();
airplane = new Airplanes();
expected = 12

//Act
airport.maxCapacity(12)
actual = airport.airportCapacity;

//Assert
result = assertEqual(expected, actual);
console.log(result ? 'Passed' : 'Failed');
console.log(`This allows the max capacity to be overridden and has a default max capacity of 10`)


//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
airplane = null;

console.log('===========================');

//Test 4 - Check to see if the airport is full
console.log('===========================');
console.log('Test4 - Checks to see whether the airport is full')

//Arrange
airport = new Airport();
airplane = new Airplanes('11A');
expected = 'Airport capacity at max';

//Act
airport.maxCapacity(1)
airport.landPlane(airplane)
console.log(airport.checkCapacity())
actual = airport.checkCapacity();

//Assert
result = assertEqual(expected, actual);
console.log(result ? 'Passed' : 'Failed');
console.log(result ? 'The airport is full' : 'there is space in the airport');


//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
airplane = null;

console.log('===========================');

//Test 5 - To take of airplane and check if in airport
console.log('===========================');
console.log('Test5 - Test to instruct airplane to take off')

//Arrange
airport = new Airport();
airplane = new Airplanes(1);
airplane2 = new Airplanes(2)
expected = 1;

//Act
airport.landPlane(airplane);
airport.landPlane(airplane2)
airport.planeTakeOff(airplane)
actual = airport.airplaneList.length;

//Assert
result = assertEqual(expected, actual);
console.log(result ? 'Passed' : 'Failed');
console.log(result ? 'Plane has taken-off' : 'Failed');


//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
airplane = null;

console.log('===========================');

//Test 6 - Checks whether a plane is in the airport or not
console.log('===========================');
console.log('Test6 - Checks whether a plane is in the airport or not')

//Arrange
airport = new Airport();
airplane1 = new Airplanes(1);
airplane2 = new Airplanes(2)
expected = 'Plane is in the airport';

//Act
airport.landPlane(airplane1);
airport.landPlane(airplane2)
actual = airport.findPlane(airplane1);

//Assert
result = assertEqual(expected, actual);
console.log(result ? 'Passed' : 'Failed');
console.log(result ? 'Your airplane is at the airport, ready to take-off!' : 'No airplane with this ID found in the airport');


//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
airplane = null;

console.log('===========================');

//Test 7- Does not allow negative numbers to be input
console.log('===========================');
console.log('Test7 - Does not take negative numbers as input')

//Arrange
airport = new Airport();
airplane1 = new Airplanes(-1);
expected = 0;

//Act
airport.landPlane(airplane1);
console.log(airport.airplaneList);
actual = airport.airplaneList.length;

//Assert
result = assertEqual(expected, actual);
console.log(result ? 'Passed' : 'Failed');
console.log(result ? 'Cannot take negative input as ID' : 'Failed');


//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
airplane = null;

console.log('===========================');

//Test 8 - Does not take-off when weather is stormy
console.log('===========================');
console.log('Test8 - Check to prevent take off when weather stormy')

//Arrange
airport = new Airport();
weather = new Weather();
expected = 'stormy';

//Act
weather.checkWeather()
actual = (weather.checkWeather())
// weather.checkWeather('stormy');
// actual = weather.checkWeather('stormy');

//Assert
result = assertEqual(expected, actual);
console.log(result ? 'Stormy' : 'Not stormy');
console.log(result ? 'Cannot take off or land when it is stormy' : 'Weather is clear for take off or landing');


//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
airplane = null;

console.log('===========================');

//Test 9 - Allows strings to be added as plane ID 
console.log('===========================');
console.log('Test9 - Accepts string as airplane ID')

//Arrange
airport = new Airport();
airplane1 = new Airplanes('11A');
expected = 1;

//Act
airport.landPlane(airplane1);
actual = airport.airplaneList.length;

//Assert
result = assertEqual(expected, actual);
console.log(result ? 'Passed' : 'Failed');
console.log(result ? `Airplane ID: ${airplane1.ID}` : 'Failed')


//Clean-Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
airplane = null;

console.log('===========================');


