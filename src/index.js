const Airport = require("./Airport");
const Plane = require("./Plane");

// User Story 1
const airport = new Airport();
const plane = new Plane(0);

console.log(`No of planes at airport initially: ${airport.planeList.length}`);
airport.land(plane);
console.log(`No of planes at airport after landing a plane: ${airport.planeList.length}`);

// User Story 2
const airportLarge = new Airport(10);
console.log(`Default capacity: ${new Airport().capacity} || Overridden capacity: ${airportLarge.capacity}`);

// User Story 3
let planes = []
for (let i = 0; i < 10; i++) {
    planes.push(new Plane(i + 1));
    airportLarge.land(planes[i]);  // filling the large airport
}

console.log(`No of planes in large airport: ${airportLarge.planeList.length}`);

const plane11 = new Plane(11);
airportLarge.land(plane11);
console.log(`No of planes in large airport after attempting to land an 11th: ${airportLarge.planeList.length}`);

// User Story 4
airportLarge.takeOff(planes[0]);
console.log(`No of planes in large airport after a plane takes off: ${airportLarge.planeList.length}`);

// User Story 5

// No take-off for non-landed plane
airportLarge.takeOff(plane11);
console.log(`No of planes in large airport after trying to take-off non-landed plane (plane11): ${airportLarge.planeList.length}`);

airportLarge.land(planes[1]); // trying to land a plane that has already landed (part 1)
console.log(`No of planes in large airport after trying to land a plane that's already at the airport: ${airportLarge.planeList.length}`);

console.log(`No of planes at airport: ${airport.planeList.length}`);
airport.land(planes[1]); // part 2
console.log(`No of planes at airport after trying to land a plane that's at a different airport: ${airport.planeList.length}`);