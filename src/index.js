const { Airport } = require(`../src/Airport.js`);
const { Plane } = require(`../src/Plane.js`);

// First part is to demonstrate the user input validation. Ensures a correct and proper Plane object is produced. This would prevent airport arrays receiving non Plane objects

console.log('Plane object tests')
console.log('------------------------');

checkPlane1 = new Plane();
checkPlane2 = 'hi';
checkPlane3 = new Plane('A1', true);
checkPlane4 = new Plane(2, 'true');
checkPlane5 = new Plane('B2', 2);
checkPlane6 = new Plane(true, 2);

planeArray = [checkPlane1, checkPlane2, checkPlane3, checkPlane4, checkPlane5, checkPlane6]

planeArray.forEach(isThisAnInstanceOfPlane);
console.log('------------------------');
planeArray.forEach(constructorPlaneID);
console.log('------------------------');
planeArray.forEach(constructorInFlight);
console.log('------------------------');

console.log('Demo')
console.log('------------------------');

// Create planes
realPlane1 = new Plane('A1', true)
realPlane2 = new Plane('B2', true)
realPlane3 = new Plane('C3', true)
realPlane4 = new Plane('D4', true)
realPlane5 = new Plane('E3', true)
realPlane6 = new Plane('F4', true)


let planeCount = 0;
realPlaneArray = [realPlane1, realPlane2, realPlane3, realPlane4, realPlane5, realPlane6]; // Store all planes for at Airport count

// Display example of planes
displayPlane(realPlane1);
displayPlane(realPlane6);
console.log('------------------------');

// Plane at airport count should be zero
realPlaneArray.forEach(planeAtAirport);
console.log('Plane at airport count: ' + planeCount);
console.log('------------------------');

//Create airports
airport1 = new Airport('Berlin');
airport2 = new Airport('Rome');
airport3 = new Airport('Stormy');

airport3.setWeatherSafeForAction(false); // Makes it impossible to land as weather is stormy / unsafe

// Add planes to airports
airport1.instructToLand(realPlane1);
airport1.instructToLand(realPlane2);

airport2.instructToLand(realPlane3);
airport2.instructToLand(realPlane4);

airport3.instructToLand(realPlane5); // bad weather / unsafe
airport3.instructToLand(realPlane6); // bad weather / unsafe

// Display airport
displayAirport(airport1);
displayAirport(airport2);
displayAirport(airport3);
console.log('------------------------');

// Display airport1 (Berlin) plane list
demoArray = airport1.getListOfPlanesAtAirport;
console.log(`Berlin plane list:` + JSON.stringify(demoArray));
console.log('------------------------');

// Display example of planes at airport
displayPlane(realPlane1);
displayPlane(realPlane6);
console.log('------------------------');

// Plane at airport count should be 4
realPlaneArray.forEach(planeAtAirport);
console.log('Plane at airport count: ' + planeCount);
console.log('------------------------');

//Change Capacity of airports 
airport1.setAirportMaxCapacity(4);
airport2.setAirportMaxCapacity('four'); // not valid
airport2.setAirportMaxCapacity(-2); // not valid

// Display airport
displayAirport(airport1);
displayAirport(airport2);
console.log('------------------------');

// Ask if airport is full
console.log('Airport1 (Berlin) full? ' + airport1.isAirportFull())
console.log('Airport2 (Rome) full? ' + airport2.isAirportFull())
console.log('------------------------');

//Land more planes
airport1.instructToLand(realPlane1); // impossible - is already landed
airport1.instructToLand(realPlane5);
airport2.instructToLand(realPlane6); // impossible - capacity is 2 

// display airports
displayAirport(airport1);
displayAirport(airport2);
console.log('------------------------');

// Plane at airport checks
console.log(`Is plane A1 at Berlin? ` + airport1.checkPlaneAtAirport(realPlane1)); // true
console.log(`Is plane F6 at Berlin? ` + airport1.checkPlaneAtAirport(realPlane6)); // false
console.log(`Is plane C3 at Rome? ` + airport2.checkPlaneAtAirport(realPlane3)); // true
console.log('------------------------');

airport2.setWeatherSafeForAction(false); // Makes it impossible to takeoff from airport2 (Rome) as weather is stormy / unsafe

//Take off planes
airport1.instructToTakeOff2(realPlane1);
airport1.instructToTakeOff2(realPlane3); // impossible at other airport/ not at Berlin
airport2.instructToTakeOff2(realPlane3); // impossible bad weather / unsafe

// display airports
displayAirport(airport1);
displayAirport(airport2);
console.log('------------------------');

// Show plane in flight cant take off
console.log('Logic Demo 1 ')
console.log('------------------------');

logicPlane = new Plane('Grounded', true);
logicAirport = new Airport('Makes No Sense');
logicAirport.instructToLand(logicPlane);

displayPlane(logicPlane);
logicArray = logicAirport.getListOfPlanesAtAirport;
console.log(JSON.stringify(logicArray));
console.log('------------------------');

// Change inflight to be true then ask to take off - then review same info as previous console.log
logicPlane.setInFlight(true);
logicAirport.instructToTakeOff2(logicPlane);

displayPlane(logicPlane);
logicArray = logicAirport.getListOfPlanesAtAirport;
console.log(JSON.stringify(logicArray));
console.log('------------------------');

// Show plane grounded cant be ask to land
console.log('Logic Demo 2 ')
console.log('------------------------');

logicPlane2 = new Plane('Grounded', false); // In flight is false so cant be asked to land
logicAirport2 = new Airport('Makes No Sense');
logicAirport2.instructToLand(logicPlane2);

displayPlane(logicPlane2);
logicArray2 = logicAirport2.getListOfPlanesAtAirport;
console.log(JSON.stringify(logicArray2));

console.log('------------------------');

console.log('Weather generator Demo')
console.log('------------------------');

// True represents safe action weather i.e sunny, false represents stormy
for (loop = 0; loop < 10; loop++) {
    console.log(`Weather safe for landing/takeOff? ` + Airport.weatherGenerator());
}

function isThisAnInstanceOfPlane(input) {
    console.log('Input is a instance of Plane object: ' + Plane.checkInputIsAPlaneObject(input))
}

function constructorPlaneID(input) {
    console.log('Input has a planeID property: ' + Plane.checkPlaneIDInput(input))
}

function constructorInFlight(input) {
    console.log('Input has a inFlight property: ' + Plane.checkPlaneFlightInput(input))
}

function displayPlane(plane) {
    console.log(`PlaneID: ${plane.getPlaneID()}    In Flight: ${plane.getInFlight()}    At airport: ${plane.getAtAirport()}`)
}

function displayAirport(airport) {
    console.log(`AirportID: ${airport.getAirportID}    number of planes: ${airport.getListOfPlanesAtAirport.length}    capacity: ${airport.airportMaxCapacity}    safe: ${airport.weatherSafeForAction}`)
}

function planeAtAirport(landedPlane) {

    if (landedPlane.getAtAirport() === true) {
        planeCount += 1
    }

}



