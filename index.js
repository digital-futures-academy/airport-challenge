import Airport from "./src/airport.js";

const plane1 = { make: "Boeing 737 MAX 8", id: "NSZ3GC" };
const plane2 = { make: "Boeing 737-84P", id: "NOZ1VE" };
const plane3 = { make: "Boeing 777-236(ER)", id: "BAW19N" };
const plane4 = { make: "Cessna 182S Skylane", id: "C182" };
const plane5 = { make: "Airbus A320-214", id: "EJU67UP" };
const plane6 = { make: "Beech 1900D", id: "TJT87MK" };

let airport = new Airport();
console.log(`The airport has a capacity of ${airport.capacity} and currently has ${airport.planesOnGround.length} planes on the ground`);
console.log(`Landing the following plane...\n${JSON.stringify(plane1)}`);
airport.landPlane(plane1);
console.log(`The airport now has ${airport.planesOnGround.length} planes on the ground, which are ${JSON.stringify(airport.planesOnGround)}`);
try {
    console.log(`Trying to land the same plane again`);
    airport.landPlane(plane1);
} catch (error) {
    console.log(`Throws an error: ${error}`);
}
console.log(`We can change the capacity of the airport, e.g. to 3`);
airport.setCapacity(3);
console.log(`Now the airport has a capacity of ${airport.capacity}`);
console.log(`Attempting to land two more planes should be fine...`);
airport.landPlane(plane2);
console.log(`Planes in airport: ${JSON.stringify(airport.planesOnGround)}`);
airport.landPlane(plane3);
console.log(`Planes in airport: ${JSON.stringify(airport.planesOnGround)}`);
try {
    console.log(`But trying to land additional planes beyond the airport's capacity`);
    airport.landPlane(plane4);
} catch (error) {
    console.log(`Throws an error: ${error}`);
}

console.log(`Planes can take off as well, and will confirm that they have done so`);
let didTakeOff = airport.takeOff(plane1);
console.log(`Plane ${JSON.stringify(plane1)} ${didTakeOff ? "took off successfully" : "failed to take off"}`);


console.log(`Trying to have a plane take off that isn't in the airport`);
didTakeOff = airport.takeOff(plane5);

console.log(`Fails: Plane ${JSON.stringify(plane5)} ${didTakeOff ? "took off successfully" : "failed to take off"}`);


try {
    console.log(`Similarly, trying to land a plane that is already in the airport`);
    airport.landPlane(plane2);
} catch (error) {
    console.log(`Throws the following error: ${error}`);
}