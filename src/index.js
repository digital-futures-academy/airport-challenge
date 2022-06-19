// Program demonstrating running scenarios with the developed classes.

//import classes
const Airport = require("./airport.js");
const Plane = require("./plane.js")

// create two airports - with different capacities (1 and 2)
const heathrow = new Airport(1);


console.log(`======================================================`)
console.log(`One airport is operating - with non-default capacity:`)
console.log(`Heathrow - capacity: ${heathrow.getCapacity()} planes`);


//create 3 planes and set them to 'flying' using takeOff()
const plane1 = new Plane(`Plane-1`);
plane1.takeOff();
const plane2 = new Plane(`Plane-2`);
plane2.takeOff();
const plane3 = new Plane(`Plane-3`);
plane3.takeOff();

console.log(`Planes and their status:`);
console.log(`${plane1.getPlaneId()}: ${plane1.getState()}`)
console.log(`${plane2.getPlaneId()}: ${plane2.getState()}`)
console.log(`${plane3.getPlaneId()}: ${plane3.getState()}`)

console.log(`===================================================`);
console.log(`Scenario for requriment 1: 'I want to instruct the airport to land a plane' \nHeathrow instructs Plane-1 to land. There is capacity so the plane lands safely.`)

heathrow.instructToLand(plane1);

console.log(`Airport and Plane-1 after successful landing instruction:`);
console.log(`Heathrow - planes in airport:`)
for (let i = 0; i < heathrow.getInAirport().length; i++) {
    console.log(heathrow.getInAirport()[i].getPlaneId().padStart(10))
}
console.log(`${plane1.getPlaneId()} state is now: ${plane1.getState()}`);

console.log(`===================================================`);
console.log(`Scenario for requriment 2: 'I would like a default airport capacity that can be overridden as appropriate' \nHeathrow has opened an additional runway and its capacity is increased from 1 to 2`);
console.log(`Heathrow starting capacity: ${heathrow.getCapacity()}`)
heathrow.setCapacity(2);
console.log(`Heathrow capacity after capacity updated: ${heathrow.getCapacity()}`);

console.log(`===================================================`);
console.log(`Scenario for requriment 3: 'I want top prevent landing when the airport is full' \nHeathrow lands Plane-2 successfully using its additional capacity`);
heathrow.instructToLand(plane2);
console.log(`Heathrow - planes in airport:`)
for (let i = 0; i < heathrow.getInAirport().length; i++) {
    console.log(heathrow.getInAirport()[i].getPlaneId().padStart(10))
}
console.log(`${plane1.getPlaneId()} state is now: ${plane1.getState()}`);
console.log(`${plane2.getPlaneId()} state is now: ${plane2.getState()}`);
console.log(`However Heathrow then accidentally tries to land Plane-3 even though there is no capacity. The safety features kick in, no landing instruction is given and Plane-3 remains flying`)
heathrow.instructToLand(plane3);
console.log(`Heathrow - planes in airport:`)
for (let i = 0; i < heathrow.getInAirport().length; i++) {
    console.log(heathrow.getInAirport()[i].getPlaneId().padStart(10))
}
console.log(`${plane1.getPlaneId()} state is now: ${plane1.getState()}`);
console.log(`${plane2.getPlaneId()} state is now: ${plane2.getState()}`);
console.log(`${plane3.getPlaneId()} state is now: ${plane3.getState()}`);

console.log(`===================================================`);
console.log(`Scenario for requirement 4: 'I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport' \nHeathrow instructs Plane-1 to take off. The success message is received and printed.`);
const successMessage = heathrow.instructToTakeOff(plane1);
console.log(`Message received confirming Plane-1 successfully left: '${successMessage}'`);

console.log(`Heathrow - planes in airport:`)
for (let i = 0; i < heathrow.getInAirport().length; i++) {
    console.log(heathrow.getInAirport()[i].getPlaneId().padStart(10))
}
console.log(`${plane1.getPlaneId()} state is now: ${plane1.getState()}`);

console.log(`===================================================`);
console.log(`Scenario for requirement 5: 'I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed' \nHeathrow instructs Plane-1 to take off even though it has.`);
