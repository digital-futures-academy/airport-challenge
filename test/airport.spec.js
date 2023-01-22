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
Check if the airport if full
*/
console.log(`============================================`) 
console.log(`Test 4 - isFull method is called and have to be true when airport is full`);

// Arrange
airport = new Airport();
for (let i = 0; i < airport.capacity; i++) {
    airport.landPlane(new Plane());
}
airport.isFull = true;
expected = true;

// Act
actual = airport.isFull;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 4: Airport capacity is full : ${result}`);

// Clean up 
expected, actual, result = undefined;
airport, plane = null;






/* Test 5
arrivedPlanes decreases by 1 when a plane is identified and takes off
*/
console.log(`============================================`) 
console.log(`Test 5 - arrivedPlanes decreases by 1 when a plane is identified and takes off`);

// Arrange
airport = new Airport();
plane = new Plane();
airport.landPlane(plane);
expected = airport.landPlane.length - 1;

// Act
airport.flyPlane(plane);
actual = airport.arrivedPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 5: planeOnGround decreases by 1 when takes off: ${result}`);

// Clean up 
expected, actual, result = undefined;
airport, plane = null;






/* Test 6
Prevent a plane from landing if it is in the airport already
*/
console.log(`============================================`) 
console.log(`Test 6 - plane cannot be landing if it is in the airport already`);

// Arrange
airport = new Airport();
plane = new Plane();
airport.landPlane(plane);
expected = false;

// Act
actual = airport.landPlane(plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 6: Preventing a plane from landing if it is in the airport already: ${result}`);

// Clean up 
expected, actual, result = undefined;
airport, plane = null;







/* Test 7
Prevent a plane from taking off if it already departed from the airport
*/
console.log(`============================================`) 
console.log(`Test 7 - plane cannot take off if it already departed from the airport`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = false;

// Act
actual = airport.flyPlane(plane);


// Assert
result = assertEquals(expected, actual);
console.log(`Test 7: Plane cannot take off from the airport if it is not in the airport : ${result}`);

// Clean up 
expected, actual, result = undefined;
airport, plane = null;



/* Test 8
Plane cannot lading if weather = stormy

*/
console.log(`============================================`) 
console.log(`Test 8 - plane cannot land if weather = stormy`);

// Arrange
airport = new Airport();
plane = new Plane();
Weather = new weather();
Weather.weatherStatus = `stormy`;
expected = false;

// Act
actual = airport.flyPlane(plane, weather);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 8: If the weather is stormy, planes cannot land: ${result}`);

// Clean up 
expected, actual, result = undefined;
airport, plane = null;







/* Test 9
Plane cannot land if weather = stormy
*/
console.log(`============================================`)
console.log(`Test 9 - plane cannot land if weather = stormy`);


// Arrange
airport = new Airport();
plane = new Plane();
Weather = new weather();
Weather.weatherStatus = `stormy`;
expected = false;

// Act
actual = airport.planesOnGround(plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 9: Plane does not land if weather is stormy : ${result}`);

// Clean up 
expected, actual, result = undefined;
airport, plane = null;