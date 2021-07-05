const assertEquals = require('../test-framework');
const Airport = require('../src/airport');

//defining the varriables need
let airport, result, check; 

//Testing the Land Funtion
console.log(' ');
console.log('Does the land function print the required string');

//Setup
airport = new Airport(2);

//Execute
result = airport.landPlane('plane 2');

//Verify
console.log(assertEquals(result.length, 2));


//Testing the get capacity Funtion
console.log(' ');
console.log('Does the getCapacity function return the desired output');

//Setup

console.log('Testing when the output is valid');
airport = new Airport(6);

//Execute
result = airport.getCapacity();

//Verify
console.log(result);
console.log(assertEquals(result.includes(6), true));

//Setup
console.log(' ');
console.log('Testing when the output is invalid');
airport = new Airport(-6);

//Execute
result = airport.getCapacity();

//Verify
console.log(result);
console.log(assertEquals(result.includes(6), false));


//Testing the Land Funtion included in the isFull function
console.log(' ');
console.log('Does the plane land when the landing area is not full');

//Setup
airport = new Airport(6);

//Execute
result = airport.landPlane('plane 2');
check = airport.isFull();
console.log(result.length);

//Verify
console.log(assertEquals(result.length, 2));
console.log(assertEquals(check, false));

//Testing the Land Funtion included in the isFull function
console.log(' ');
console.log('Does the plane land when the landing area is full');

//Setup
airport = new Airport(1);

//Execute
result = airport.landPlane('plane 2');
check = airport.isFull();
console.log(result.length);

//Verify
console.log(assertEquals(result.length, 1));
console.log(assertEquals(check, true));

//Testing the takeOff function
console.log(' ');
console.log('Does the takeOff when the plane is not flying ');

//Setup
airport = new Airport(2);

//Execute
result = airport.takeOff('plane 1');
check = airport.landedPlane.length;

//Verify
console.log(result);
console.log(assertEquals(result.includes('plane 1'), true));
console.log(assertEquals(check, 0));

console.log(' ');
console.log('Does the takeOff when the plane is flying ');

//Setup
airport = new Airport(2);

//Execute
result = airport.takeOff('plane 2');
check = airport.landedPlane.length;

//Verify
console.log(result);
console.log(assertEquals(result.includes('plane 2'), true));
console.log(assertEquals(check, 1));

//Testing the takeOff function
console.log(' ');
console.log('Does it return the number of right planes that have landed ');

//Setup
airport = new Airport(2);

//Execute
result = airport.landedPlane.length;

//Verify
console.log(assertEquals(result, 1));

