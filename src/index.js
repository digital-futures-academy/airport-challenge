const airport = require("./airport");

const plane1 = { id: `PH-EZF` };
const plane2 = { id: `EI-HGL` };
const plane3 = { id: `G-IPLY` };
const plane4 = { id: `G-TAWX` };

// Scenario 1 - Plane 1 and plane 2 landed at the airport.

airport.landPlanes(plane1);
airport.landPlanes(plane2);

console.log(`Scenario 1`);
console.log(airport.landedPlanes);
console.log(``);

// Scenario 2 - Modify the default capacity of the airport to 3.

airport.modifyAirportCapacity(3);

console.log(`Scenario 2`);
console.log(airport.defaultAirportCapacity);
console.log(``);

// Scenario 3 - Land plane 3  at the airport.

airport.landPlanes(plane3);

console.log(`Scenario 3`);
console.log(airport.landedPlanes);
console.log(``);

// Scenario 4 - Try to land plane 4 at the airport. And get a message stating that airport is at full capacity.

airport.landPlanes(plane4);

console.log(`Scenario 4`);
console.log(airport.landPlanes(plane4));
console.log(airport.landedPlanes);
console.log(``);

// Scenario 5 - Check if plane 1 is at the airport, or if it can be landed.

console.log(`Scenario 5`);
console.log(airport.planesExist(plane1));
console.log(``);

// Scenario  6 - Check if plane 4 is at the airport, and therefore can take-off.

console.log(`Scenario 6`);
console.log(airport.planesExist(plane4));
console.log(``);

// Scenario  7 - Remove plane 1 from airport, and check if it is still at airport.

airport.removePlanes(plane1);

console.log(`Scenario 7`);
console.log(airport.planesExist(plane1));
console.log(airport.landedPlanes)
console.log(``);

// Scenario  8 - Land Plane 4 and confirm it is at the airport.

airport.landPlanes(plane4);

console.log(`Scenario 8`);
console.log(airport.planesExist(plane4));
console.log(airport.landedPlanes);
console.log(``);