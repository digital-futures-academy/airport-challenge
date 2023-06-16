const airport = require("../src/airport");
const plane = require("../src/plane");

console.log(`Airport can land plane if plane is flying: ${airport.land(plane)}`);

console.log(`Amount of planes at airport is: ${airport.planeLanded.length}`);
console.log(`Current default capacity for airport: ${airport.defaultAirportCapacity}`);
console.log(`Airport capacity has been updated to: ${airport.updateCapacity(4)}`);

const plane1 = Object.create(plane);
console.log(`An additional plane is flying: ${plane1.isPlaneFlying()}`);

if (plane.isAtAirport()) {
    console.log(`Airport can instruct a plane at the airport to take off`);
} else {
    console.log(`The plane cannot take off`);
}

