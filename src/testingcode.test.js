const {assertEquals} = require ('./test-framework.js')
const {Airport} = require('./airport.js');
const Weather = require('./weather.js');
const Plane = require('./plane.js');
const plane1 = new Plane("plane 1");
const plane2 = new Plane("plane 2");
const plane3 = new Plane("plane 3");
const plane4 = new Plane("plane 4");


//Test 1
console.log(' Test 1 instruct the airport to land a plane')
let actualOutput;
let result;
let expectedOutput;


//Arrange
airport = new Airport ();
plane =  new Plane();
expectedOutput = 1;

//Act
airport.landPlane(plane)
actualOutput= airport.hangar.length;

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`A plane lands at the airport *** ${result}`);

//clean up
airport = null;
plane = null;
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

//Test 2
console.log('=============================================')
console.log('Test 2 landPlane function only land plane instance at the airport')

//Arrange
airport = new Airport ();
plane =  'not a plane instance';
expectedOutput = 0;

//Act
airport.landPlane(plane)
actualOutput= airport.hangar.length;

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Only plane instance added to the airport *** ${result}`);

//clean up
airport = null;
plane = null;
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

//Test 3
console.log('=============================================')
console.log('Test 3 edge case - falsy value plane should not land')
//Arrange
airport = new Airport ();
plane = null;
expectedOutput = 0;

//Act
airport.landPlane(plane)
actualOutput= airport.hangar.length;

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log( `falsy value plane should not land *** ${result}`);

//clean up
airport = null;
plane = null;
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

//Test 4
console.log('=============================================')
console.log('Test 4 default airport capacity that can be overridden')

//Arrange
airport = new Airport();
airport.airportCapacity = 20;
expectedOutput = 20;

//Act
actualOutput = airport.airportCapacity;

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log( `default airport capacity that can be overridden *** ${result}`);

//clean up
airport = null;
plane = null;
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

//Test 5
console.log('=============================================')
console.log('Test 5 prevent landing if the airport is full')

//Arrange
airport = new Airport(10);
plane = new Plane("plane 11");
airport.hangar = Array(10).fill().map((_, i) => new Plane(`plane ${i+1}`));
expectedOutput = 10;

//Act
airport.landPlane(plane)
actualOutput = airport.hangar.length;

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log( `land no planes when airport is full *** ${result}`);

//clean up
airport = null;
plane = null;
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

//Test 6
console.log('=============================================')
console.log('Test 6 plane take off, no longer in the airport')

//Arrange
airport = new Airport(10);
airport.hangar = airport.hangar.concat(plane1,plane2,plane3)
expectedOutput = airport.hangar.length-1;

//Act
airport.takeoffPlane(plane2)
actualOutput = airport.hangar.length;

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log( `A plane in the airport takes off *** ${result}`);

//clean up
airport = null;
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

//Test 7
console.log('=============================================')
console.log('Test 7 Check is the plane already in the airport')

//Arrange
airport = new Airport(10);
airport.hangar = airport.hangar.concat(plane1,plane2,plane3)
expectedOutput = true;
//Act
actualOutput = airport.isPlaneInAirport(plane1) 

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`The plane is already in the airport *** ${result}` );

//clean up
airport = null;
plane = null;
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

//Test 8
console.log('=============================================')
console.log('Test 8 prevent landed planes from landing')

//Arrange
airport = new Airport(10);
airport.hangar = airport.hangar.concat(plane1,plane2,plane3);
expectedOutput = 3

//Act
airport.landPlane(plane3)
actualOutput = airport.hangar.length

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Airport prevents landed planes from landing *** ${result}` );

//clean up
airport = null;
plane = null;
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

//Test 9
console.log('=============================================')
console.log('Test 9 prevent non-exist planes from taking off')

//Arrange
airport = new Airport(10);
airport.hangar = airport.hangar.concat(plane1,plane2,plane3);
expectedOutput = 3

//Act
airport.takeoffPlane(plane4)
actualOutput = airport.hangar.length

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Airport prevents landed planes from landing *** ${result}` );

//clean up
airport = null;
plane = null;
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

//Test 10
console.log('=============================================')
console.log('Test 10 Is weather stormy')


//clean up
airport = null;
plane = null;
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;