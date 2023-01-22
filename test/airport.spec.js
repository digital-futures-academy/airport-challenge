const {assertEquals} = require(`../testing-framework`);
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`);
const weather = require(`../src/Weather`);


let expected, actual, result, airport, plane;



/*Test 1 
planesOnGround length should increase by 1
*/
console.log(`============================================`)
console.log(`Test 1 - planesOnGround should increase by 1`)

//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.planesOnGround(plane);
actual = airport.planesOnGround.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 1: planesOnGround should increase by 1 : ${result}`) 

//Clean up
expected, actual, result = undefined;
airport, plane = null;




/* Test 2
capacity can be changed
*/
console.log(`============================================`) 
console.log(`Test 2- capacity can be changed as desired`);

// Arrange
airport = new Airport(10);
expected = 10;

// Act
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 2: Airport capacity is 10 : ${result}`);

// Clean up 
expected, actual, result = undefined;
airport, plane = null;




/*Test 3 
Only planes can land in an Airport
*/
console.log(`============================================`) 
console.log(`Test 3 - Airport can not accept object that are not planes`)

airport = new Airport();
plane = `British Airways`;
expected = 0;

//Act
airport.planesOnGround(plane);
actual = airport.arrivedPlanes.length;

//Assert 
result = assertEquals(expected, actual);
console.log(`Test 3: Only known planes can land: ${result}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;







/* Test 4
arrivedPlanes decreases by 1 when a plane is identified and takes off
*/
console.log(`============================================`) 
console.log(`Test 4 - arrivedPlanes decreases by 1 when a plane is identified and takes off`);

// Arrange
airport = new Airport();
plane = new Plane();
airport.planesOnGround(plane);
expected = airport.planesOnGround.length - 1;

// Act
airport.flyPlane(plane);
actual = airport.arrivedPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 4: planeOnGround decreases by 1 when takes off: ${result}`);

// Clean up 
expected, actual, result = undefined;
airport, plane = null;



