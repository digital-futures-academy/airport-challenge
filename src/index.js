const Airport = require("./airport");
const Plane = require("./plane");

const myAirport = new Airport([], 2, "Sunny");
const plane1 = new Plane("plane1");
const plane2 = new Plane("plane2");
const plane3 = new Plane("plane3");

console.log("Here is a series of tests on Airport and Plane");

console.log("Landing a plane");
console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
console.log("Landing plane1");
myAirport.landPlane(plane1);
console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
console.log("Landing plane2");
myAirport.landPlane(plane2);
console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
console.log("");
console.log("");


console.log("Trying to land a plane while at capacity")
try {
    console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
    console.log(`The airports capacity is:${myAirport.airportCapacity}`);
    console.log("Landing plane3");
    myAirport.landPlane(plane3);
}
catch (error) {
    console.log(error.message);
}
console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
console.log("");
console.log("");

console.log("Taking off")
console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
console.log("Plane2 taking off");
myAirport.takeOff(plane2);
console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
console.log("");
console.log("");

console.log("Taking off a plane not at the airport");
try {
    console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
    console.log("Plane3 trying to take off");
    myAirport.takeOff(plane3);
}
catch (error) {
    console.log(error.message);
}
console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
console.log("");
console.log("");

console.log("Trying to land a plane that is already at the airport");
try {
    console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
    console.log("Landing plane1");
    myAirport.landPlane(plane1);
}
catch (error) {
    console.log(error.message);
}
console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
console.log("");
console.log("");

console.log("Changing airport capacity");
console.log(`The airports capacity is:${myAirport.airportCapacity}`);
console.log("Changing capacity to 6");
myAirport.changeAirportCapacity(6);
console.log(`The airports capacity is:${myAirport.airportCapacity}`);
console.log("");
console.log("");

console.log("Stormy weather");
console.log("Changing weather to Stormy");
myAirport.currentWeather = "Stormy";
console.log("");
console.log("");

console.log("Landing in Stormy weather");
try {
    console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
    console.log("Landing plane2");
    myAirport.landPlane(plane2);
}
catch (error) {
    console.log(error.message);
}
console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
console.log("");
console.log("");

console.log("Taking off in Stormy weather");
try {
    console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
    console.log("Plane1 taking off");
    myAirport.takeOff(plane1);
}
catch (error) {
    console.log(error.message);
}
console.log(`Planes in the airport:${myAirport.listOfPlanes.map(plane => plane.planeId)}`);
console.log("");
console.log("");